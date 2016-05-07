import DOM from 'react-dom'
import React, {Component} from 'react'
import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'

//MODULES

var Header = React.createClass({
	render:function(){
		return (
			<div className='hed'>
					<h1>Boaz Blake</h1>
					<table>
						<tr className='faRow'>
							<th>
								<i className="fa fa-envelope-o one-quarter columns icons "></i>
							</th>
							<th>
								<i className="fa fa-mobile one-quarter columns icons "></i>
							</th>
							<th>
								<i className="fa fa-linkedin-square one-quarter columns icons "></i>
							</th>
							<th>
								<i className="fa fa-github-square one-quarter columns icons "></i>
							</th>
						</tr>
						<tr className='faRow'>
								<th className='one-quarter titles' >email</th>
								<th className='one-quarter titles' >mobile</th>
								<th className='one-quarter titles' >linkedin</th>
								<th className='one-quarter titles' >portfolio</th>
						</tr>
						<tr>
								<td className='one-quarter deets' >boazblake@gmail.com</td>
								<td className='one-quarter deets' >347.420.3251</td>
								<td className='one-quarter deets' >www.linkedin.com/in/boazblake</td>
								<td className='one-quarter deets' >boazblake.github.io/portfolio</td>
						</tr>
					</table>
			</div>
		)
	}
})

var Footer = React.createClass({
	render: function(){
		return (
			<div className='row footer'>

			</div>
		)
	}
})

var Education = React.createClass({
	render:function(){
		var edu = this.props.edu
		return(
			<div className='edu'>
				<table>
					<th>{edu.title}</th>
					<tbody>
						<tr>
							<td className='eight columns desc'>{edu.body.tr1.td1.desc}</td>
							<td className='four columns date'>{edu.body.tr1.td1.date}</td>
						</tr>
						<tr>
							<td className='eight columns desc'>{edu.body.tr2.td1.desc}</td>
							<td className='four columns date'>{edu.body.tr2.td1.date}</td>
						</tr>
						<tr>
							<td className='eight columns desc'>{edu.body.tr3.td1.desc}</td>
							<td className='four columns date'>{edu.body.tr3.td1.date}</td>
						</tr>
						<tr>
							<td className='eight columns desc'>{edu.body.tr4.td1.desc}</td>
							<td className='four columns date'>{edu.body.tr4.td1.date}</td>
						</tr>
					</tbody>
				</table>
			</div>
			)
	}
}) 

var Skills = React.createClass({
	render:function(){
		var skills = this.props.skills
		return(
			<div className='skills'>
				<table>
					<tbody>
						<tr>
							<th>{skills.title.t1}</th>
							<th>{skills.title.t2}</th>
						</tr>
						<tr>
						<td>{skills.body.td1}</td>
							<td>{skills.body.td2}</td>
						</tr>
					</tbody>
				</table>
			</div>
			)
	}
})

var Work = React.createClass({
	render:function(){
		var work = this.props.work
		return(
			<div className='work'>
				<table>
					<th>{work.title}</th>
					<tbody>
						<tr>
							<td className='eight columns desc'>{work.body.tr1.td1.desc}</td>
							<td	className='four columns date'>{work.body.tr1.td1.date}</td>
						</tr>
						<tr>
							<td className='eight columns desc'>{work.body.tr2.td1.desc}</td>
							<td className='four columns date'>{work.body.tr2.td1.date}</td>
						</tr>
						<tr>
							<td className='eight columns desc'>{work.body.tr3.td1.desc}</td>
							<td className='four columns date'>{work.body.tr3.td1.date}</td>
						</tr>
						<tr>
						<td className='eight columns desc'>{work.body.tr4.td1.desc}</td>
							<td className='four columns date'>{work.body.tr4.td1.date}</td>
						</tr>
						<tr>
							<td className='eight columns desc'>{work.body.tr5.td1.desc}</td>
							<td className='four columns date'>{work.body.tr5.td1.date}</td>
						</tr>
						<tr>
							<td className='eight columns desc'>{work.body.tr6.td1.desc}</td>
							<td className='four columns date'>{work.body.tr6.td1.date}</td>
						</tr>
						<tr>
							<td className='eight columns desc'>{work.body.tr7.td1.desc}</td>
							<td className='four columns date'>{work.body.tr7.td1.date}</td>
						</tr>
					</tbody>
				</table>
			</div>
			)
	}
})

var Military = React.createClass({
	render:function(){
		var military = this.props.military

		return(
			<div className='military'>
				<table>
					<th>{military.title}</th>
					<tbody body={military.body}>
						<tr tr1={military.body.tr1}>
							<td className='eight columns desc'>{military.body.tr1.td1.desc}</td>
							<td className='four columns date'>{military.body.tr1.td1.date}</td>
						</tr>
						<tr tr2={this.props.tr2}>
							<td className='eight columns desc' >{military.body.tr2.td1.desc}</td>
							<td className='four columns date' >{military.body.tr2.td1.date}</td>
						</tr>
						<tr tr3={this.props.tr3}>
							<td className='eight columns desc' >{military.body.tr3.td1.desc}</td>
							<td className='four columns date' >{military.body.tr3.td1.date}</td>
						</tr>
						<tr tr4={this.props.tr4}>
							<td className='eight columns desc' >{military.body.tr4.td1.desc}</td>
							<td className='four columns date' >{military.body.tr4.td1.date}</td>
						</tr>
						<tr tr5={this.props.tr5}>
							<td className='eight columns  desc' >{military.body.tr5.td1.desc}</td>
							<td className='four columns  date' >{military.body.tr5.td1.date}</td>
						</tr>
					</tbody>
				</table>
			</div>
			)
	}
})

var nonTrad_education = React.createClass({
	render:function(){
		var nonTrad_education = this.props.body.nonTrad_education

		return(
			<div className='nonTrad_education'>
				<table>
					<th>{nonTrad_education.title}</th>
					<tbody body={nonTrad_education.body}>
						<tr tr1={nonTrad_education.body.tr1}>
							<td className='eight columns desc' >{nonTrad_education.body.tr1.td1.desc}</td>
							<td className='four columns date' >{nonTrad_education.body.tr1.td1.date}</td>
						</tr>
						<tr tr1={nonTrad_education.body.tr2}>
							<td className='eight columns desc' >{nonTrad_education.body.tr2.td1.desc}</td>
							<td className='four columns date' >{nonTrad_education.body.tr2.td1.date}</td>
						</tr>
						<tr tr1={nonTrad_education.body.tr3}>
							<td className='eight columns desc' >{nonTrad_education.body.tr3.td1.desc} </td>
							<td className='four columns date' >{nonTrad_education.body.tr3.td1.date}</td>
						</tr>
					</tbody>
				</table>

			</div>
			)
	}
})

var Certs = React.createClass({
	render:function(){

		var certs = this.props.certs

		return(
			<div className='certs'>
				<table>
					<th>{certs.title}</th>
					<tbody body={certs.body}>
						<tr tr1={certs.body.tr1}>
							<td>{certs.body.tr1.td1.desc}</td>
						</tr>
						<tr tr2={certs.body.tr2}>
							<td>{certs.body.tr2.td1.desc}</td>
						</tr>
						<tr tr3={certs.body.tr3}>
							<td>{certs.body.tr3.td1.desc}</td>
						</tr>
					</tbody>
				</table>
			</div>
			)
	}
})


//MAINBODY STRUCTURE
var MainBody = React.createClass({
	render:function(){
		console.log(this.props)
		return(
			<div className='mainBody'>
				<Education edu={this.props.mainBody.education}/>
				<Skills skills={this.props.mainBody.skills}/>
				<Work work={this.props.mainBody.work}/>
				<Military military={this.props.mainBody.military}/>
				<nonTrad_education nonTrad_education={this.props.mainBody.nonTrad_education}/>
				<Certs certs={this.props.mainBody.certs}/>
			</div>
		)
	}
})

//RESUME STRUCTURE
var Resume = React.createClass({


	render: function(){
		console.log(this.props)
		return (
			<div id='render'>
				<Header/>
				<MainBody mainBody={this.props.ResumeData.mainBody} />
				<Footer/>
			</div>
		)
	}
})

export{Resume}