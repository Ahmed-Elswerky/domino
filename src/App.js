import React from 'react';
import './App.css';
import * as firebase from 'firebase';
import { continueStatement } from '@babel/types';
function cl(m){
	console.log(m)
} 
function dc(n){
	return document.createElement(n)
}

    // Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyA-CIcFDUs0L5yvpduik7tgqWgh4OdxMyQ",
	authDomain: "domino-1997.firebaseapp.com",
	databaseURL: "https://domino-1997.firebaseio.com",
	projectId: "domino-1997",
	storageBucket: "domino-1997.appspot.com",
	messagingSenderId: "987781570357",
	appId: "1:987781570357:web:381073dce1409542"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var ref = firebase.database().ref()

// function Fire_heads(){
// 	// ref.child('heads').on('child_added',m=>{
// 	// 	return (
// 	// 		<div className="head-parent">
// 	// 			{		
// 	// 				m.forEach(d=>{
// 	// 					return(
// 	// 						<div className="head">{d.val().val}</div>
// 	// 					)
// 	// 				})
// 	// 			}			
// 	// 		</div>
// 	// 	)
// 	// })
// 	return 'asd'
// }
var on = false,count = 0;
// function add_head(event){
// 	count+=1
// 	var contain = dc('div'),
// 	radio = dc('input'),
// 	data = dc('span'),
// 	plus = dc('span'),
// 	minus = dc('span'),
// 	label = dc('label'),
// 	headChildren = dc('div'),//firebase data cloning
// 	headAdd = dc('div'),
// 	headChild1 = dc('div'), 
// 	headChild2 = dc('div'), 
// 	headChild3 = dc('div') 
	
// 	contain.classList.add('head')
// 	contain.classList.add('round')
// 	data.classList.add('head-data')
// 	plus.classList.add('head-plus')
// 	minus.classList.add('head-minus')
// 	label.classList.add('head-minus-cont')
// 	radio.classList.add('head-check')
// 	headChildren.classList.add('head-children')
// 	headChild1.classList.add('round')
// 	headChild2.classList.add('round')
// 	headChild3.classList.add('round')

// 	radio.setAttribute('onchange','console.log(this.checked +\' '+count+'\')')

// 	radio.type = 'checkbox'
// 	radio.setAttribute('id','head-check'+count)
// 	label.setAttribute('for','head-check'+count)
// 	data.innerHTML = 'asdasdjdbq qw'
// 	plus.innerHTML = '+'
// 	minus.innerHTML = '-'
// 	headChild1.innerHTML = 'asdasd'
// 	headChild2.innerHTML = 'asdasd'
// 	headChild3.innerHTML = 'asdasd'


// 	contain.addEventListener('mouseover',()=>{on=true})
// 	contain.addEventListener('mouseleave',()=>{on=false})

// 	contain.style.top = event.clientY + 'px'
// 	contain.style.left = event.clientX + 'px'

// 	label.appendChild(minus)
// 	label.appendChild(plus)

// 	headChildren.appendChild(headChild1)
// 	headChildren.appendChild(headChild2)
// 	headChildren.appendChild(headChild3)

// 	contain.appendChild(data)
// 	contain.appendChild(radio)
// 	contain.appendChild(label)
// 	contain.appendChild(headChildren)
// 	contain.appendChild(headAdd)
	
// 	document.getElementsByClassName('App')[0].appendChild(contain)
// 	cl('head add')
// }

// function App() {
// 	return (
// 		<div className="App" onClick={(event)=>{if(!on) add_head(event)}}>
// 			{<Fire_heads/>}
// 		</div>
// 	);
// }

class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			headId:'',
			children:[],
			form:[],
			input:[]
		}
	}
	componentDidMount(){
		ref.child('heads').on('child_added',m=>{
			var childr = []
			m.forEach(d=>{
				var stylee = {
					top: d.val().top+'px', 
					left: d.val().left+'px'
				}
				cl(stylee)
				cl(d.val().top)
				childr.push(
					<div className="head round" style={stylee} onMouseLeave={()=>on=false} onMouseOver={()=>on=true}>
						<span className="head-data">{d.val().title}</span>
						<input className="head-check" onChange={()=>console.log(this.checked +' 1')} type="checkbox" id="head-check1" />
						<label className="head-minus-cont" htmlFor="head-check1">
							<span className="head-minus">-</span>
							<span className="head-plus">+</span>
						</label>
						<div className="head-children">
						</div>
					</div>
				)
			})
			this.setState({children:childr})
		})
	}

	add_head1 = (e)=>{
        cl('chlicked')
		var p = ref.child('heads').push()
		p.set({
			top:e.clientY,
			left:e.clientX
		})
		this.state.headId = p.key
		this.setState({
			form:(
			<form onSubmit={this.add_head2} onMouseLeave={on=false} onMouseOver={on=true}>
				<label>
					Title: <input type="text"/>
				</label>
				<input type="submit" value="Send"/>
			</form>)
			})
	}
	add_head2 = e =>{
		e.preventDefault()
		ref.child('heads/'+this.state.headId).update({
			title:e.target.children[0].children[0].value
		}).then(()=>{
			this.setState({form:[]})
		})
	}

	render(){
		return (
			<div className="App" onClick={(event)=>{if(!on) this.add_head1(event)}}>
				{this.state.children}
				{this.state.form}
			</div>
		);
	}

}

export default App;
