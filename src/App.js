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

var firebaseConfig = {
	apiKey: "AIzaSyA-CIcFDUs0L5yvpduik7tgqWgh4OdxMyQ",
	authDomain: "domino-1997.firebaseapp.com",
	databaseURL: "https://domino-1997.firebaseio.com",
	projectId: "domino-1997",
	storageBucket: "domino-1997.appspot.com",
	messagingSenderId: "987781570357",
	appId: "1:987781570357:web:381073dce1409542"
};
firebase.initializeApp(firebaseConfig);
var ref = firebase.database().ref()

var on = false,count = 0;


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
        vw1 = Math.round(window.innerWidth/100)*4,
        number = Math.round(2*3.14*vw / vw)-1,
        turn = 1/number,cacheT = turn,
        i=0
        
        ref.child('heads/'+this.props.keys+'/children').on('child_added',d=>{
            stylee = {"transform":"rotate("+turn+"turn) translate(0px,"+vw+"px)"}
            stylee1 = {"transform":"rotate(-"+turn+"turn)"}
            turn += cacheT
            i++ 
            cache.push(
                <React.Fragment>
                    <input type="checkbox" className="p-tog" id={d.key} style={{'display':'none'}}/>
                    <label htmlFor={d.key} className="child" style={stylee}>
                        <p style={stylee1}>{d.val().title}</p>
                    </label>
                </React.Fragment>
            )
            this.setState({arr:cache})
            if(i>number-1){
                i=0
                vw = vw*1.2+50
                cl(vw)
                number = Math.round(2*3.14*vw / vw1)-4
                turn = 1/number
                cacheT = turn
            }
        })
    }

    render(){
        return (<React.Fragment>{this.state.arr}</React.Fragment>);
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
            if(d.val().user == this.props.user){
                var childr = []
                var stylee = {
                    "top": d.val().top+'px', 
                    "left": d.val().left+'px',
                    'background':d.val().color
                }
                ref.child('heads/'+d.key+'/children').once('value',e=>{
                    var num=1,width
                    e.forEach(b=>{
                        num++
                    })
                    width = ((num/14)>1?num/14:1)*(Math.round(window.innerWidth/100)*4)*2 + (Math.round((num/14)+1))*50*2
                    var childrenContainStyle = {
                        "width": width + 'px',
                        "height": width + 'px',
                        "top":"calc(50% - "+width/2+"px)",
                        "left":"calc(50% - "+width/2+"px)"
                    }
                    childr.push(this.state.children)
                    childr.push(
                        <label htmlFor="asd" className={"head round "+d.key} key={d.key} style={stylee} onMouseLeave={()=>on=false} onMouseOver={()=>on=true}>
                            <div className="contain">
                                <span className="head-data">{d.val().title}</span>
                                <input className="head-check" onChange={()=>console.log(this.checked +' 1')} type="checkbox" id={"head-check"+h_i}/>
                                <label className="head-minus-cont head-plus" htmlFor={"head-check"+h_i}>o</label>
                                <div className="head-children" style={childrenContainStyle}>
                                    <label className="head-minus" htmlFor={"head-check"+h_i}>-</label>
                                    <div className="add-child" data-key={d.key} onClick={this.add_child}>+</div>
                                    <Children keys={d.key}/>
                                </div>
                            </div>
                        </label>
                    )
                    
                    this.setState({children:childr})
                    h_i++
                })
            }
        })
        ref.child('heads').on('child_removed',m=>{
            if($C(m.key)[0] != undefined)
                $C(m.key)[0].remove()
        })
	}
    
    add_child = (e) =>{
        this.setState({
			form:(
                <label className="pop flex-col" style={{'display':'flex'}} onMouseLeave={()=>on=false} onMouseOver={()=>on=true}>
                    <form className="pop-body round flex-col" onSubmit={this.add_child2} data-key={e.target.getAttribute("data-key")}>
                            Info: <input type="text" autoFocus required/>
                        <br/>
                        <input className="primary btn" type="submit" value="Send"/>
                        <input className="btn" type="reset" value="Cancel" onClick={()=>this.cancel_head()}/>
                    </form>
                </label>
            )
        })
        on=true
    }

    add_child2 = e =>{
        e.preventDefault()
        if(e.target.children[0].children[0].children[0].value.length>0){
            var p = ref.child('heads/'+e.target.getAttribute('data-key')+'/children').push()
            p.set({
                title:e.target.children[0].children[0].children[0].value
            }).then(()=>{
                this.setState({
                    form:[]
                })
                on = false
            })
        }
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
            left:'',
            uid:false,
            set:false
        }
        firebase.auth().onAuthStateChanged(u=>{
            if(u)
                this.setState({
                    uid:u.uid
                })
            else this.setState({
                uid:''
            })
            this.setState({
                set:true,
                form:(
                    <React.Fragment>
                        <input type="checkbox" id="pop-check"/>
                        <label htmlFor="pop-check" className="pop flex-col" onMouseLeave={()=>on=false} onMouseOver={()=>on=true}>
                            <form className="pop-body round flex-col" onSubmit={this.add_head2}>
                                <label htmlFor="" className="flex-col" >
                                    <label>
                                        Title: <input type="text" id="fire-inp" autoFocus required/>
                                    </label>
                                    <br/>
                                    <label htmlFor="" id="color-pick">
                                        Color:
                                        <input type="radio" className="color-radio" name="colo" data-val="white" id="white" defaultChecked required/> <label htmlFor="white" className="color round" style={{"background":"white"}}></label>                                    <input type="radio" className="color-radio" name="colo" data-val="#e44b4b" id="red"/> <label htmlFor="red"  className="color round" style={{"background":"#e44b4b"}}></label>
                                        <input type="radio" className="color-radio" name="colo" data-val="#6464de" id="blue"/> <label htmlFor="blue"  className="color round" style={{"background":"#6464de"}}></label>
                                        <input type="radio" className="color-radio" name="colo" data-val="#f5f55f" id="yellow"/> <label htmlFor="yellow"  className="color round" style={{"background":"#f5f55f"}}></label>
                                    </label>
                                    <br/>
                                    <input type="submit" className="btn primary" value="Send"/>
                                    <input type="reset" className="btn" onClick={()=>document.getElementById('pop-check').click()} value="Cancel"/>
                                </label>
                            </form>
                        </label>
                    </React.Fragment>
                )
            })
        })
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
	}
	add_head2 = e =>{
        e.preventDefault()
        var p = ref.child('heads').push(),
        color
        document.getElementById('pop-check').click();
        [].forEach.call(document.getElementsByClassName('color-radio'),c=>{
            if(c.checked){
                color = c.getAttribute('data-val')
                cl(c.getAttribute('data-val'))
                p.set({
                    top:this.state.top,
                    left:this.state.left,
                    title:e.target.children[0].children[0].children[0].value,
                    color:color,
                    user:this.state.uid
                }).then(()=>{
                    on = false
                })
            }
        })
    }
    cancel_head = () => {
        this.setState({
            form:[]
        })
    }
	render(){
        if(this.state.set){
            if(this.state.uid)
                return (
                    <label htmlFor="pop-check" className="App" onClick={(event)=>{if(!on) this.add_head1(event)}}>
                        <button style={{"float":'right'}} onClick={()=>{firebase.auth().signOut()}} onMouseOver={()=>on=true} onMouseLeave={()=>on=false}>Log out</button>
                        <Head user={this.state.uid}/>
                        {this.state.form}
                    </label>
                );
            else return (<Sign/>)
        }
        else return 0
	}
}






class Sign extends React.Component{
    signup = (event) => {
        event.preventDefault()
        var email = $I('sign-email').value,
        name = $I('sign-name').value,
        pass = $I('sign-pass').value
        firebase.auth().createUserWithEmailAndPassword(email,pass).then(()=>{
            ref.child('users/'+firebase.auth().currentUser.uid).set({
                name:name,
                email:email
            });
            window.location.reload()
        }).catch(e=>$I('sign-err').innerHTML = e.message)
    }
    login = (event)=>{
        event.preventDefault()
        var email = $I('log-email').value,
        pass = $I('log-pass').value
        firebase.auth().signInWithEmailAndPassword(email,pass).then(()=>{
            window.location.reload()
        }).catch(e=>$I('log-err').innerHTML = e.message)
    }
    render(){
        return (
            <React.Fragment>
            <div id="intro"></div>
            <div id="sign-cont" className="flex-col pop">
                <div id="sign-div" className=" flex-col pop-body">
                    <label htmlFor="signup" id="sign-up">Sign up</label>
                    <input className="sign-btn" type="radio" id="signup" name="sign" style={{"display":"none"}} autoFocus/>
                    <form action="#" onSubmit={this.signup} style={{"display":"none"}}>
                        <div>
                        <div>
                            <div id="sign-err"></div>
                            <div>
                                <input type="text" id="sign-name" required autoFocus/>
                                <label htmlFor="sign-name">User name</label>
                            </div>
                            <div>
                                <input type="email" id="sign-email" required/>
                                <label htmlFor="sign-email">Email</label>
                            </div>
                            <div>
                                <input type="password" id="sign-pass"  required/>
                                <label htmlFor="sign-pass">Password</label>
                            </div>
                            <input type="submit" className="btn" value="Sign up"/>
                        </div>
                        </div>
                    </form>
                    <label htmlFor="login" id="log-in">Log in</label>
                    <input className="sign-btn" type="radio" id="login" name="sign" style={{"display":"none"}}/>
                    <form action="#" onSubmit={this.login} style={{"display":"none"}}>
                        <div>
                            <div>
                                <div id="log-err"></div>
                                <div>
                                    <input type="email" id="log-email" required/>
                                    <label htmlFor="log-email">Email</label>
                                </div>
                                <div>
                                    <input type="password" id="log-pass"  required/>
                                    <label htmlFor="log-pass">Password</label>
                                </div>
                                <input type="submit" className="btn" value="log in"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </React.Fragment>
        )
    }
}



export default App;
