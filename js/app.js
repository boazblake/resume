// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

// universal utils: cache, fetch, store, resource, fetcher, router, vdom, etc
// import * as u from 'universal-utils'

// the following line, if uncommented, will enable browserify to push
// a changed fn to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
// -- browserify-hmr having install issues right now
// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         app()
//     })
// }

// Check for ServiceWorker support before trying to install it
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./serviceworker.js').then(() => {
//         // Registration was successful
//         console.info('registration success')
//     }).catch(() => {
//         console.error('registration failed')
//             // Registration failed
//     })
// } else {
//     // No ServiceWorker Support
// }

// ///////////////////////////////////////////////////////////
// IMPORT FILES
// ///////////////////////////////////////////////////////////
import DOM from 'react-dom'
import React, {Component} from 'react'
import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'
// import Firebase from 'firebase'
// import BackboneFire from 'bbfire'
// console.log("$>>>>>", $)
// console.log("_>>>>>", _)
// console.log("Firebase>>>>>", Firebase)
// console.log("backbone>>>>>", Backbone)
// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////

// API URL

var NutrientModel = Backbone.Model.extend({})

var NutrientColl = Backbone.Collection.extend({
	_setURL: function(qry){
		this.url = `https://api.nutritionix.com/v1_1/search/${qry}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&`
	},

	appKey:'c530fdb9500741614cb04ec9dc9883d6',
	appId:'98cd0ce4',

	model:NutrientModel,
	
	parse:function(rawData){
		console.log('rawData.hits: >>>>>>', rawData.hits)
		return rawData.hits
	}
})

var IronEventsRouter = Backbone.Router.extend({
	
	routes:{
		'*test':'handleTestPage'
	},

	handleTestPage: function(){
		var component = this
		var hashRoute = location.hash
		var qry = hashRoute.substring(1)
		console.log('qry', qry)
		component.nc = new NutrientColl()
		component.nc._setURL(qry)
		console.log('component.nc', component.nc)
		component.nc.fetch({
			data:{
				'appId':component.nc.appId,
				'appKey':component.nc.appKey,
				// 'query':'tomato'
			}
		}).then( function(){
			DOM.render(<AppView qryColl={component.nc}/>, document.querySelector('.container'))
		})
	},

	initialize: function(){
		// console.log('app is routing!')
		Backbone.history.start()
	}
})

//MODULES
var Footer = React.createClass({
	render:function(){
		return(
			<div className='logo'>
				<a href='http://www.nutritionix.com/api'>
					<img src='https://d3jpl91pxevbkh.cloudfront.net/nutritionix/image/upload/v1363458498/attribution_jqfdgy.png'/>
				</a>
			</div>
			)
	}
})


// VIEWS
var AppView = React.createClass({

	_handleSearch:function(evt){
		// console.log(evt.target.value)
		var searchTerm = evt.target.value
		var spaceInWord = ' '
		var re = new RegExp(spaceInWord, 'g')
		var hashTerm = searchTerm.replace(re, '%20')
		if (evt.keyCode === 13){			
			location.hash=hashTerm
		}
	},


						// <h3 >brand_id: {item.get('fields').brand_id}</h3>
						// <h3 >item_id: {item.get('fields').item_id}</h3>


	render: function(){

		return (
			<div id='render'>
				<div className='searchBox'>
					<input onKeyDown={this._handleSearch} type='search' placeholder='search food item' type='text'></input>
					<button className={"btn btn-primary"}> search food item</button>
				</div>
				<SearchResultsView qryColl={this.props.qryColl.models}/>
				<Footer/>
			</div>
		)
	}
})


var SearchResultsView = React.createClass({


	_generateJSXresults:function(modelsArray){
		var JSXArray = ''
		// console.log('this.props.qryColl.modelsArray>>>>>', modelsArray)
		JSXArray = modelsArray.map(function(item, i){
			var component = this
			// console.log('brand_id>>>',item.get('fields').item_name)
			return (
				<SearchResultsItems item={item} key={i}/>
			)
		}) 
		return JSXArray
	},



	render:function(){
		var component = this
		var item = component.props.item
		return (
			<div>
			{this._generateJSXresults(component.props.qryColl)}
			</div>
		)
	}
})


var SearchResultsItems =  React.createClass({
	render:function(){
		var item = this.props.item
		return (
			<div key={this.props.key} className='brandDeets'>
				<h3 > {item.get('fields').item_name}</h3>
				<h5 >brand: {item.get('fields').brand_name}</h5>
				<p >size: {item.get('fields').nf_serving_size_qty} {item.get('fields').nf_serving_size_unit}</p>
			</div>
		)
	}
})






var IER = new IronEventsRouter()