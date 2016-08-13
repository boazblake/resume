import DOM from 'react-dom'
import React, {Component} from 'react'
import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'

//MODULES

var Header = React.createClass({
	 
	 getInitialState: function() {
        return {hover: false}
    },

    mouseOver: function (evt) {
    	evt.preventDefault()
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
				<a href="https://github.com/boazblake/resume/blob/master/Boaz_Blake_Resume.pdf" target="_blank">
					<input type="button" className="button" value="PDF VERSION" />
				</a>
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
							<a target="_blank" href='tel:347.420.3251'>
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
					<tr className='faRow'>
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
			</div>
		)
	}
})

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
							<td>{skills.body.td3}</td>
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
export var ResumeTemplate = React.createClass({


	render: function(){
		console.log(this.props)
		return (
			<div id='render'>
				<Header/>
				<SubHeader/>
				<MainBody mainBody={this.props.ResumeData.mainBody} />
				<Footer/>
			</div>
		)
	}
})