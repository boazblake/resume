import DOM from 'react-dom'
import React, {Component} from 'react'
import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'

//MODULES

var Header = React.createClass({

	 getInitialState: function () {
        return {hover: false};
    },

    mouseOver: function (evt) {
    	evt.preventDefault()
    	var classNameofIcon = evt.currentTarget.className
    	console.log('evt', evt.currentTarget.className)

        this.setState({hover: true});
    },

    mouseOut: function () {
        this.setState({hover: false});
    },

	render:function(){	
		if (this.state.hover){
			var divstyle = {
					backgroundColor:'rgba(41, 128, 185,1.0)',
					color:'white',
					transition:'0.7s all ease'
			}	
		} else {
			var divstyle = {
					backgroundColor:'white',
					color:'rgba(41, 128, 185,1.0)',
					transition:'0.7s all ease'
		}
	}
		

		return (
			<div className='hed'>
					<h1>Boaz Blake</h1>
					<table>
						<tr className='faRow'>
							<th>
								<i style={divstyle} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}  className='icons envelope fa fa-envelope-o'></i>
							</th>
							<th>
								<i style={divstyle} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className="icons mobile fa fa-mobile"></i>
							</th>
							<th>
								<i style={divstyle} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className="icons linkedin fa fa-linkedin-square"></i>
							</th>
							<th>
								<i style={divstyle} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className="icons github fa fa-github-square"></i>
							</th>
						</tr>
						<tr className='faRow'>
								<th style={divstyle} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className='titles envelope' >email</th>
								<th style={divstyle} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className='titles mobile' >mobile</th>
								<th style={divstyle} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className='titles linkedin' >linkedin</th>
								<th style={divstyle} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className='titles github' >portfolio</th>
						</tr>
						<tr>
								<td style={divstyle} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className='deets envelope' >boazblake@gmail.com</td>
								<td style={divstyle} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className='deets mobile' >347.420.3251</td>
								<td style={divstyle} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className='deets linkedin' >www.linkedin.com/in/boazblake</td>
								<td style={divstyle} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className='deets github' >boazblake.github.io/portfolio</td>
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
				SUBHEADER
			</div>
		)
	}
})

var SubHeader = React.createClass({


	render: function(){

		function _setDimensions(){
			var subHeader = document.querySelector('.subHeader')
			console.log('subHeader', subHeader)
		}

		return (
			<div className='row subHeader'>

			</div>
		)
	}
})

var Edu = React.createClass({
	render:function(){
		return(
			<div className='edu'>
				<table>
					<th>
						Traditional Education
					</th>
					<tbody>
						<tr>
						<td className='desc'><span>Front End Engineering </span>
	Intensive JavaScript programming course with a focus on SOLID principles and MVC frameworks ReactJS, BackboneJs
	The Iron Yard - Houston</td>
							<td className='date'>February 2016 - April 2016</td>
						</tr>
						<tr>
						<td className='desc'><span>PhD Human Space Exploration  </span> environemntal stress on epigenetic inheritance and health
	University of Houston
	NASA HRP Grant #NNX12AF04G</td>
							<td className='date'>September 2011-May 2014 (on Haitus)</td>
						</tr>
						<tr>
						<td className='desc'><span>Bachelor of Science in Sports Medicine </span>
	Intensive program focused on Athletic injuries to both the  amateur and professional athlete
	James Madison University, Harrisonburg, VA
	cum laude</td>
							<td className='date'>August 2007 - May 2010</td>
						</tr>
						<tr>
						<td className='desc'><span>International Criminal Justice </span>
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
						<td><span>Coding </span> nodeJs, backboneJS, reactJs, jQuery, HTML, SCSS, Github,
						<span>Adobe  </span> Photoshop, illustrator, InDesign After Effects, DreamWeaver.
						<span>Open Source </span> Sketch, iDraw, inkScape, Sketch, Gimp.
						<span>3D </span> 123D Design, 123D Make, Live Interior 3D, Sketchup.</td>
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
					<th>Work Experience</th>
					<tbody>
						<tr>
							<td  className='desc'><span>Freelance Graphic Designer </span>
	Houston, Texas
	Designed and implemented marketing strategies and campaigns for local businesses. Designed logos  and branding.</td>
							<td
	className='date'>April 2015 - Present</td>
						</tr>
						<tr>
						<td className='desc'><span>Range Safety Officer </span> 
	Top Gun Range, Houston, Texas
	Educate public and private sector market on all aspects of  gun ownership and usage. Focus on tactical application with integration of armed and unarmed situations.</td>
							<td className='date'>April 2015 - Present</td>
						</tr>
						<tr>
						<td className='desc'><span>PhD Research Assistant </span> 
	Taught Undergraduate science classNamees on Biomechanics, Statistics and health and fitness while studying the effects of spaceflight on the nervous system and the genetic effects of environmental stressors on immune function.</td>
							<td className='date'>September 2011 - May 2014</td>
						</tr>
						<tr>
						<td className='desc'><span>Graduate Athletic Trainer - Syracuse Football Team </span>
	Syracuse University, Syracuse, NY
	Evaluated, wrote and implemented football injury rehabilitation protocols.</td>
							<td className='date'>June 2010 - August 2011</td>
						</tr>
						<tr>
						<td className='desc'><span>Athletic Training Student  - Athletic Training Education Program </span>
	James Madison University, Harrisonburg, VA
	Rotations with Men's Soccer, Men's Basketball, Football, Women's Track and Field and Cross Country, Women's Swimming and Diving, Men's and Women's Tennis.</td>
							<td className='date'>September 2008 - May 2010</td>
						</tr>
						<tr>
						<td className='desc'><span>Anti-Terrorist Officer/Bodyguard </span>
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
		return(
			<div className='military'>
				<table>
					<th>Military Service</th>
					<tbody>
						<tr>
							<td className='desc'>Israeli Defense Force, Airborne, Sergeant 1st class</td>
							<td className='date'>November 2000 - May 2003</td>
						</tr>
						<tr>
							<td className='desc' >Israeli Army Specialist Training: Advanced Training</td>
							<td className='date' >April 2001</td>
						</tr>
						<tr>
							<td className='desc' >Israeli Army Specialist Training: Demolition</td>
							<td className='date' >March 2002</td>
						</tr>
						<tr>
							<td className='desc' >Israeli Army Specialist Training: Parachuting</td>
							<td className='date' >January 2003</td>
						</tr>
						<tr>
							<td className='desc' >Reserve Duty - Nablus and Ramallah, Israel.</td>
							<td className='date' >June 2005 - July 2005</td>
						</tr>
					</tbody>
				</table>
			</div>
			)
	}
})

var Education = React.createClass({
	render:function(){
		return(
			<div className='education'>
				<table>
					<th>Non-Traditional Education</th>
					<tbody>
						<tr>
							<td className='desc' >Security Training: Global Security - Israel.</td>
							<td className='date' >July 2005</td>
						</tr>
						<tr>
							<td className='desc' >Security Training: Israeli Airports Authority - Israel.</td>
							<td className='date' >October 2004 - March 2005</td>
						</tr>
						<tr>
							<td className='desc' >Security Training: International College of Security - Israel. </td>
							<td className='date' >October 2003</td>
						</tr>
					</tbody>
				</table>

			</div>
			)
	}
})


var Certs = React.createClass({
	render:function(){
		return(
			<div className='certs'>
				<table>
					<th>Certifications</th>
					<tbody>
						<tr>
							<td>Certified Athletic Trainer #: 2000003407</td>
						</tr>
						<tr>
							<td>American Red Cross CPR/AED for the Professional Rescuer</td>
						</tr>
						<tr>
							<td>Krav Maga: Green belt under Grand Master Rohn Mizrachi (Current 2nd Highest holder Dan in Krav Maga)</td>
						</tr>
					</tbody>
				</table>
			</div>
			)
	}
})
var MainBody = React.createClass({
	render:function(){
		return(
			<div className='mainBody'>
				<Edu/>
				<Skills/>
				<Work/>
				<Military/>
				<Education/>
				<Certs/>
			</div>
		)
	}
})

// VIEWS

var Resume = React.createClass({


	render: function(){
		console.log(this.props)
		return (
			<div id='render'>
				<Header/>
				<SubHeader/>
				<MainBody/>
				<Footer/>
			</div>
		)
	}
})

export{Resume}