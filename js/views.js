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
								<i className="fa fa-envelope-o"></i>
							</th>
							<th>
								<i className="fa fa-mobile"></i>
							</th>
							<th>
								<i className="fa fa-linkedin-square"></i>
							</th>
							<th>
								<i className="fa fa-code-fork"></i>
							</th>
						</tr>
						<tr>
								<th>email</th>
								<th>mobile</th>
								<th>linkedin</th>
								<th>portfolio</th>
						</tr>
						<tr>
								<td>boazblake@gmail.com</td>
								<td>347.420.3251</td>
								<td>www.linkedin.com/in/boazblake</td>
								<td>boazblake.github.io/portfolio</td>
						</tr>
					</table>
			</div>
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
						<td class='desc'><span>Front End Engineering</span>
	Intensive JavaScript programming course with a focus on SOLID principles and MVC frameworks ReactJS, BackboneJs
	The Iron Yard - Houston</td>
							<td class='date'>February 2016 - April 2016</td>
						</tr>
						<tr>
						<td class='desc'><span>PhD Human Space Exploration </span> environemntal stress on epigenetic inheritance and health
	University of Houston
	NASA HRP Grant #NNX12AF04G</td>
							<td class='date'>September 2011-May 2014 (on Haitus)</td>
						</tr>
						<tr>
						<td class='desc'><span>Bachelor of Science in Sports Medicine</span>
	Intensive program focused on Athletic injuries to both the  amateur and professional athlete
	James Madison University, Harrisonburg, VA
	cum laude</td>
							<td class='date'>August 2007 - May 2010</td>
						</tr>
						<tr>
						<td class='desc'><span>International Criminal Justice</span>
	John Jay College of Criminal Justice, New York, NY
	GPA: 4.0.</td>
							<td class='date'>January 2006 - August 2007</td>
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
							<td>Coding: nodeJs, backboneJS, reactJs, jQuery, HTML, SCSS, Github,
	Adobe: Photoshop, illustrator, InDesign After Effects, DreamWeaver.
	Open Source: Sketch, iDraw, inkScape, Sketch, Gimp.
	3D:123D Design, 123D Make, Live Interior 3D, Sketchup.</td>
							<td>I have started to research both PHP and SQL and am open to suggestions.</td>
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
							<td  class='desc'
	class='date'>Freelance Graphic Designer.
	Houston, Texas
	Designed and implemented marketing strategies and campaigns for local businesses. Designed logos  and branding.</td>
							<td  class='desc'
	class='date'>April 2015 - Present</td>
						</tr>
						<tr>
							<td class='desc'>Range Safety Officer. (switch with graphic designer)
	Top Gun Range, Houston, Texas
	Educate public and private sector market on all aspects of  gun ownership and usage. Focus on tactical application with integration of armed and unarmed situations.</td>
							<td class='date'>April 2015 - Present</td>
						</tr>
						<tr>
							<td class='desc'>PhD Research Assistant
	Taught Undergraduate science classes on Biomechanics, Statistics and health and fitness while studying the effects of spaceflight on the nervous system and the genetic effects of environmental stressors on immune function.</td>
							<td class='date'>September 2011 - May 2014</td>
						</tr>
						<tr>
							<td class='desc'>Graduate Athletic Trainer - Syracuse Football Team.
	Syracuse University, Syracuse, NY
	Evaluated, wrote and implemented football injury rehabilitation protocols.</td>
							<td class='date'>June 2010 - August 2011</td>
						</tr>
						<tr>
							<td class='desc'>Athletic Training Student  - Athletic Training Education Program.
	James Madison University, Harrisonburg, VA
	Rotations with Men's Soccer, Men's Basketball, Football, Women's Track and Field and Cross Country, Women's Swimming and Diving, Men's and Women's Tennis.</td>
							<td class='date'>September 2008 - May 2010</td>
						</tr>
						<tr>
							<td class='desc'>FDNY Instructor. Candidate Physical Ability Test (CPAT). 
	Coached candidates for FDNY.</td>
							<td class='date'>June 2007 - July 2007</td>
						</tr>
						<tr>
							<td class='desc'>Anti-Terrorist Officer/Bodyguard.
	Provided close protection services for individuals and teams traveling throughout Israel.</td>
							<td class='date'>October 2004 - December 2005</td>
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
							<td class='desc'>Israeli Defense Force, Airborne, Sergeant 1st class</td>
							<td class='date'>November 2000 - May 2003</td>
						</tr>
						<tr>
							<td class='desc' >Israeli Army Specialist Training: Advanced Training</td>
							<td class='date' >April 2001</td>
						</tr>
						<tr>
							<td class='desc' >Israeli Army Specialist Training: Demolition</td>
							<td class='date' >March 2002</td>
						</tr>
						<tr>
							<td class='desc' >Israeli Army Specialist Training: Parachuting</td>
							<td class='date' >January 2003</td>
						</tr>
						<tr>
							<td class='desc' >Reserve Duty - Nablus and Ramallah, Israel.</td>
							<td class='date' >June 2005 - July 2005</td>
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
							<td class='desc' >Security Training: Global Security - Israel.</td>
							<td class='date' >July 2005</td>
						</tr>
						<tr>
							<td class='desc' >Security Training: Israeli Airports Authority - Israel.</td>
							<td class='date' >October 2004 - March 2005</td>
						</tr>
						<tr>
							<td class='desc' >Security Training: International College of Security - Israel. </td>
							<td class='date' >October 2003</td>
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
				<MainBody/>
				<Footer/>
			</div>
		)
	}
})

export{Resume}