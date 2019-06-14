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
function $I(m){
    return document.getElementById(m)
}
function $C(m){
    return document.getElementsByClassName(m)
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



class Children extends React.Component {
    constructor(props){
        super(props)
        this.state={
            children : [],
            arr:[],
            cache:[]
        }
    }

    componentDidMount(){
        
        var cache=[],stylee,stylee1,
        vw = Math.round(window.innerWidth/100)*4,
        number = Math.round(2*3.14*vw / vw)-1,
        turn = 1/number,cacheT = turn,
        i=0
        ref.child('heads/'+this.props.keys+'/children').on('child_added',d=>{
            stylee = {"transform":"rotate("+turn+"turn) translate(0px,"+vw+"px)"}
            stylee1 = {"transform":"rotate(-"+turn+"turn)"}
            turn += cacheT
            i++
            cache.push(
                <div style={stylee} className="child">
                    <p style={stylee1}>{d.val().title}</p>
                </div>
            )
            this.setState({arr:cache})
            if(i>number-1){
                i=0
                vw = vw*1.2+50
                cl(vw)
                number = Math.round(2*3.14*vw / 50)-1
                turn = 1/number
                cacheT = turn
            }
        })
    }

    render(){
        return (<div>{this.state.arr}</div>);
	}
}



class Head extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			headId:'',
			children:[],
			form:[],
            input:[],
            top:'',
            left:''
		}
	}
	componentDidMount(){
        var h_i = 0
		ref.child('heads').on('child_added',d=>{
			var childr = []
				var stylee = {
					"top": d.val().top+'px', 
					"left": d.val().left+'px'
				}
                childr.push(this.state.children)
				childr.push(
					<div className={"head round "+d.key} key={d.key} style={stylee} onMouseLeave={()=>on=false} onMouseOver={()=>on=true}>
                        <div className="contain">
                            <span className="head-data">{d.val().title}</span>
                            <input className="head-check" onChange={()=>console.log(this.checked +' 1')} type="checkbox" id={"head-check"+h_i}/>
                            <label className="head-minus-cont head-plus" htmlFor={"head-check"+h_i}>+</label>
                            <div className="head-children">
                                <label className="head-minus" htmlFor={"head-check"+h_i}>-</label>
                                <div className="add-child" data-key={d.key} onClick={this.add_child}>+</div>
                                <Children keys={d.key}/>
                            </div>
                        </div>
					</div>
                )
                
            this.setState({children:childr})
            h_i++
        })
        ref.child('heads').on('child_removed',m=>{
            if($C(m.key)[0] != undefined)
                $C(m.key)[0].remove()
        })
	}
    
    add_child = (e) =>{
        this.setState({
			form:(
                <form onSubmit={this.add_child2} data-key={e.target.getAttribute("data-key")} onMouseLeave={()=>on=false} onMouseOver={()=>on=true}>
                    <label>
                        Info: <input type="text" id="fire-inp" autoFocus/>
                    </label>
                    <input type="submit" value="Send"/>
                    <input type="reset" value="Cancel" onClick={()=>this.cancel_head()}/>
                </form>
            )
        })
        on=true
    }

    add_child2 = e =>{
        e.preventDefault()
        cl(e.target.getAttribute("data-key"))
        var p = ref.child('heads/'+e.target.getAttribute('data-key')+'/children').push()
		p.set({
            title:e.target.children[0].children[0].value
        }).then(()=>{
            this.setState({
                form:[]
            })
            on = false
        })
    }

    cancel_head = ()=>{
        this.setState({
            form:[]
        })
    }

	render(){
		return (
			<React.Fragment>
				{this.state.children}
				{this.state.form}
			</React.Fragment>
		);
	}

}


class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			headId:'',
			children:[],
			form:[],
            input:[],
            top:'',
            left:''
		}
	}
	componentDidMount(){
		
        ref.child('heads').on('child_removed',m=>{
            if($C(m.key)[0] != undefined)
                $C(m.key)[0].remove()
        })
	}

	add_head1 = (e)=>{
        this.state.top = e.clientY
        this.state.left = e.clientX
        on = true
		this.setState({
			form:(
                <form onSubmit={this.add_head2} onMouseLeave={()=>on=false} onMouseOver={()=>on=true}>
                    <label>
                        Title: <input type="text" id="fire-inp" autoFocus/>
                    </label>
                    <input type="submit" value="Send"/>
                    <input type="reset" value="Cancel" onClick={()=>this.cancel_head()}/>
                </form>
            )
        })
	}
	add_head2 = e =>{
        e.preventDefault()
        var p = ref.child('heads').push()
		p.set({
			top:this.state.top,
			left:this.state.left,
            title:e.target.children[0].children[0].value
        }).then(()=>{
            this.setState({
                form:[]
            })
            on = false
		})
    }

    cancel_head = ()=>{
        this.setState({
            form:[]
        })
    }

	render(){
		return (
			<div className="App" onClick={(event)=>{if(!on) this.add_head1(event)}}>
				<Head/>
				{this.state.form}
			</div>
		);
	}

}



export default App;
