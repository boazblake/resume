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
								<i className='icons'className="fa fa-envelope-o"></i>
							</th>
							<th>
								<i className='icons'className="fa fa-mobile"></i>
							</th>
							<th>
								<i className='icons'className="fa fa-linkedin-square"></i>
							</th>
							<th>
								<i className='icons'className="fa fa-github-square"></i>
							</th>
						</tr>
						<tr className='faRow'>
								<th className='titles' >email</th>
								<th className='titles' >mobile</th>
								<th className='titles' >linkedin</th>
								<th className='titles' >portfolio</th>
						</tr>
						<tr>
								<td className='deets' >boazblake@gmail.com</td>
								<td className='deets' >347.420.3251</td>
								<td className='deets' >www.linkedin.com/in/boazblake</td>
								<td className='deets' >boazblake.github.io/portfolio</td>
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
		return(
			<div className='edu'>
				<table>
					<th>
						Traditional Education
					</th>
					<tbody>
						<tr>
						<td className='desc'><span>Front End Engineering</span>
	Intensive JavaScript programming course with a focus on SOLID principles and MVC frameworks ReactJS, BackboneJs
	The Iron Yard - Houston</td>
							<td className='date'>February 2016 - April 2016</td>
						</tr>
						<tr>
						<td className='desc'><span>PhD Human Space Exploration </span> environemntal stress on epigenetic inheritance and health
	University of Houston
	NASA HRP Grant #NNX12AF04G</td>
							<td className='date'>September 2011-May 2014 (on Haitus)</td>
						</tr>
						<tr>
						<td className='desc'><span>Bachelor of Science in Sports Medicine</span>
	Intensive program focused on Athletic injuries to both the  amateur and professional athlete
	James Madison University, Harrisonburg, VA
	cum laude</td>
							<td className='date'>August 2007 - May 2010</td>
						</tr>
						<tr>
						<td className='desc'><span>International Criminal Justice</span>
	John Jay College of Criminal Justice, New York, NY
	GPA: 4.0.</td>
							<td className='date'>January 2006 - August 2007</td>
						</tr>
					</tbody>
				</table>
			</div>
			)
	}
}) 

var Skills = React.createClass({
	render:function(){
		return(
			<div className='skills'>
				<table>
					<tbody>
						<tr>
							<th>Skills Currently Mastering</th>
							<th>Skills Currently Learning:</th>
						</tr>
						<tr>
						<td><span>Coding</span> nodeJs, backboneJS, reactJs, jQuery, HTML, SCSS, Github,
						<span>Adobe </span> Photoshop, illustrator, InDesign After Effects, DreamWeaver.
						<span>Open Source</span> Sketch, iDraw, inkScape, Sketch, Gimp.
						<span>3D</span> 123D Design, 123D Make, Live Interior 3D, Sketchup.</td>
							<td>I have started to research PHP postgreSQL, as well as Redux Flux and nodeJS</td>
						</tr>
					</tbody>
				</table>
			</div>
			)
	}
})

var Work = React.createClass({
	render:function(){
		return(
			<div className='work'>
				<table>
					<th></th>
					<tbody>
						<tr>
							<td  className='desc'><span>Freelance Graphic Designer</span>
	Houston, Texas
	Designed and implemented marketing strategies and campaigns for local businesses. Designed logos  and branding.</td>
							<td
	className='date'>April 2015 - Present</td>
						</tr>
						<tr>
							<td className='desc'>Range Safety Officer.
	Top Gun Range, Houston, Texas
	Educate public and private sector market on all aspects of  gun ownership and usage. Focus on tactical application with integration of armed and unarmed situations.</td>
							<td className='date'>April 2015 - Present</td>
						</tr>
						<tr>
							<td className='desc'>PhD Research Assistant
	Taught Undergraduate science classNamees on Biomechanics, Statistics and health and fitness while studying the effects of spaceflight on the nervous system and the genetic effects of environmental stressors on immune function.</td>
							<td className='date'>September 2011 - May 2014</td>
						</tr>
						<tr>
							<td className='desc'>Graduate Athletic Trainer - Syracuse Football Team.
	Syracuse University, Syracuse, NY
	Evaluated, wrote and implemented football injury rehabilitation protocols.</td>
							<td className='date'>June 2010 - August 2011</td>
						</tr>
						<tr>
							<td className='desc'>Athletic Training Student  - Athletic Training Education Program.
	James Madison University, Harrisonburg, VA
	Rotations with Men's Soccer, Men's Basketball, Football, Women's Track and Field and Cross Country, Women's Swimming and Diving, Men's and Women's Tennis.</td>
							<td className='date'>September 2008 - May 2010</td>
						</tr>
						<tr>
							<td className='desc'>FDNY Instructor. Candidate Physical Ability Test (CPAT). 
	Coached candidates for FDNY.</td>
							<td className='date'>June 2007 - July 2007</td>
						</tr>
						<tr>
							<td className='desc'>Anti-Terrorist Officer/Bodyguard.
	Provided close protection services for individuals and teams traveling throughout Israel.</td>
							<td className='date'>October 2004 - December 2005</td>
						</tr>
					</tbody>
				</table>
			</div>
			)
	}
})

var Military = React.createClass({
	render:function(){
		console.log('this.props.millitary', this.props.military)
		var military = this.props.military

		return(
			<div className='military'>
				<table>
					<th>{military.title}</th>
					<tbody body={military.body}>
						<tr tr1={military.body.tr1}>
							<td className='desc'>{military.body.tr1.td1.desc}</td>
							<td className='date'>{military.body.tr1.td1.date}</td>
						</tr>
						<tr tr2={this.props.tr2}>
							<td className='desc' >{military.body.tr2.td1.desc}</td>
							<td className='date' >{military.body.tr2.td1.date}</td>
						</tr>
						<tr tr3={this.props.tr3}>
							<td className='desc' >{military.body.tr3.td1.desc}</td>
							<td className='date' >{military.body.tr3.td1.date}</td>
						</tr>
						<tr tr4={this.props.tr4}>
							<td className='desc' >{military.body.tr4.td1.desc}</td>
							<td className='date' >{military.body.tr4.td1.date}</td>
						</tr>
						<tr tr5={this.props.tr5}>
							<td className='desc' >{military.body.tr5.td1.desc}</td>
							<td className='date' >{military.body.tr5.td1.date}</td>
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
							<td className='desc' >{tr1.td1.desc}</td>
							<td className='date' >{tr1.td1.date}</td>
						</tr>
						<tr tr1={nonTrad_education.body.tr2}>
							<td className='desc' >{tr2.td1.desc}</td>
							<td className='date' >{tr2.td1.date}</td>
						</tr>
						<tr tr1={nonTrad_education.body.tr3}>
							<td className='desc' >{tr3.td1.desc} </td>
							<td className='date' >{tr3.td1.date}</td>
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
				<Education/>
				<Skills/>
				<Work />
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