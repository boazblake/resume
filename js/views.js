import DOM from 'react-dom'
import React, {Component} from 'react'
import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'

//MODULES

var Header = React.createClass({
	render:function(){
		return (
			<div class='hed'>HEADER</div>
		)
	}
})

var Footer = React.createClass({
	render:function(){
		return(
			<div className='foot'>FOOTER</div>
			)
	}
})


// VIEWS

var SplashView = React.createClass({


	render: function(){
		console.log(this.props)
		return (
			<div id='render'>
				<Header/>
				{this.props.hworld}
				<Footer/>
			</div>
		)
	}
})

export{SplashView}