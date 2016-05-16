import DOM from 'react-dom'
import React, {Component} from 'react'
import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'

//MODULES

var Header = React.createClass({
<<<<<<< HEAD

	 getInitialState: function () {
        return {hover: false};
=======
	 
	 getInitialState: function() {
        return {hover: false}
>>>>>>> refrac
    },

    mouseOver: function (evt) {
    	evt.preventDefault()
<<<<<<< HEAD
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
=======
    	var fullName = evt.currentTarget.className.split(' ')
    	var target = fullName.slice(5)
    	console.log('target', target)


        this.setState({
        	hover: true
        });
    },

    mouseOut: function () {
        this.setState({
        	hover: false
        });
    },

    hover: function () {
    	console.log('onHover is working')
        this.setState({
        	hover: true
        });
    },


	render:function(){
		if (this.state.hover){
			var rowStyle = {
					backgroundColor:'rgba(41, 128, 185,1.0)',
					transition:'0.7s all ease'
			}
			var iconStyle = {
					color:'white',
					backgroundColor:'rgba(41, 128, 185,1.0)',
					transition:'0.7s all ease'
			}
			var titleStyle ={
					transition:'0.7s all ease',
					height:'100%',
					opacity:'1'
			}
			var deetsStyle = {
					transition:'0.7s all ease',
					height:'100%',
					opacity:'1'
			}
		} else {
			var rowStyle = {
					transition:'0.7s all ease'
			}
			var iconStyle = {
					backgroundColor:'white',
					color:'rgba(41, 128, 185,1.0)',
					transition:'0.7s all ease'
			}
			var titleStyle ={
					transition:'2s all ease',
					height:'0',
					opacity:'0'
			}
			var deetsStyle = {
					transition:'2s all ease',
					height:'0',
					opacity:'0'
			}
		}



		return (
			<div className='hed' >
				<h1>Boaz Blake</h1>
				<table>
					<tr className='faRow' style={rowStyle}>
						<th>
							<a 	target="_blank"
								href='mailto:boazblake@gmail.com?Subject=I saw your resume!'>
								<i 	
									style={iconStyle}
									onMouseOver={this.mouseOver}
									
									className="fa fa-envelope-o one-quarter columns icons email">
								</i>
							</a>
						</th>
						<th>
							<a target="_blank" href='347.420.3251'>
								<i 	
									style={iconStyle}
									onMouseOver={this.mouseOver}
									
									className="fa fa-mobile one-quarter columns icons phone">
								</i>
							</a>
						</th>
						<th>
							<a target="_blank" href='https://www.linkedin.com/in/boazblake'>
								<i
									style={iconStyle}
									onMouseOver={this.mouseOver}
									
									className="fa fa-linkedin-square one-quarter columns icons linkedin">
								</i>
							</a>
						</th>
						<th>
							<a 	target="_blank" href='https://boazblake.github.io/portfolio'>
								<i	
									style={iconStyle}	
									onMouseOver={this.mouseOver}	
										
									className="fa fa-github-square one-quarter columns icons github">
								</i>
							</a>
						</th>
					</tr>
					<tr className='faRow' onMouseOut={this.mouseOut}>
							<th
								style={titleStyle}
								onHover={this.hover}
								className='one-quarter titles email' >email
							</th>
							<th
								style={titleStyle}
								onHover={this.hover}
								className='one-quarter titles phone' >mobile
							</th>
							<th
								style={titleStyle}
								onHover={this.hover}
								className='one-quarter titles linkedin' >linkedin
							</th>
							<th
								style={titleStyle}
								onHover={this.hover}
								className='one-quarter titles github' >portfolio
							</th>
					</tr>
					<tr className='faRow' onMouseOut={this.mouseOut}>
							<td
								style={deetsStyle}
								onHover={this.hover}
								className='one-quarter deets email' >boazblake@gmail.com
							</td>
							<td
								style={deetsStyle}
								onHover={this.hover}
								className='one-quarter deets phone' >347.420.3251
							</td>
							<td
								style={deetsStyle}
								onHover={this.hover}
								className='one-quarter deets linkedin' >www.linkedin.com/in/boazblake
							</td>
							<td
								style={deetsStyle}
								onHover={this.hover}
								className='one-quarter deets github' >boazblake.github.io/portfolio
							</td>
					</tr>
				</table>
>>>>>>> refrac
			</div>
		)
	}
})

<<<<<<< HEAD
=======
var SubHeader = React.createClass({


	render:function(){
		var divStyle = {
			height:`$('.Header').style`
		}

		return (
			<div style={divStyle}></div>
			)
	}
})
>>>>>>> refrac

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

var Education = React.createClass({
	render:function(){
		var edu = this.props.edu
		return(
			<div className='edu'>
				<table>
					<th>{edu.title}</th>
					<tbody>
						<tr>
<<<<<<< HEAD
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
=======
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
>>>>>>> refrac
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
<<<<<<< HEAD
						<td><span>Coding </span> nodeJs, backboneJS, reactJs, jQuery, HTML, SCSS, Github,
						<span>Adobe  </span> Photoshop, illustrator, InDesign After Effects, DreamWeaver.
						<span>Open Source </span> Sketch, iDraw, inkScape, Sketch, Gimp.
						<span>3D </span> 123D Design, 123D Make, Live Interior 3D, Sketchup.</td>
							<td>I have started to research PHP postgreSQL, as well as Redux Flux and nodeJS</td>
=======
							<td>{skills.body.td1}</td>
							<td>{skills.body.td2}</td>
							<td>{skills.body.td3}</td>
>>>>>>> refrac
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
<<<<<<< HEAD
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
=======
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
>>>>>>> refrac
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
				<SubHeader/>
<<<<<<< HEAD
				<MainBody/>
=======
				<MainBody mainBody={this.props.ResumeData.mainBody} />
>>>>>>> refrac
				<Footer/>
			</div>
		)
	}
})

export{Resume}