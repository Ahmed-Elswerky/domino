import React,{Component} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import './css.js';
import * as firebase from 'firebase';

function cl(m){
    console.log(m)
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


var state = {
    childs:[]
}
class App extends Component{
    constructor(props){
        super(props)
        ref.child('heads').once('value',m=>{
            var cache = []
            m.forEach(e=>{
                cache.push(<Text>{e.val().title}</Text>)
            })
            state.childs = cache
        })
        this.state={
            headS:StyleSheet.create({
                head:{
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:'50%',
                    backgroundColor:'#ffffff36',
                    width:'15vw',
                    height:'15vw'
                }
            }),
            childTog:0
        }
    }

    toggle=()=>{
        this.state.childTog?
        this.setState({
            headS:StyleSheet.create({
                head:{
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:'50%',
                    backgroundColor:'#ffffff36',
                    width:'15vw',
                    height:'15vw'
                }
            }),
            childTog:0
        })
        : this.setState({
            headS:StyleSheet.create({
                head:{
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:'50%',
                    backgroundColor:'#ffffff36',
                    width:'5vw',
                    height:'5vw'
                }
            }),
            childTog:1
        })
        cl('asd')
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={this.state.headS.head}>
                    <Text style={styles.text}>hello bitch</Text>
                </View>
                <Button onPress={()=>this.toggle} title='hide'/>
            </View>
        )
    }
}

export default App;

const styles = StyleSheet.create({
container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'red',
  },
  head:{
      alignItems:'center',
      justifyContent:'center',
      borderRadius:'50%',
      backgroundColor:'#ffffff36',
      width:'15vw',
      height:'15vw'
  },
  text:{
      color:'#fff',
      fontWeight:'bolder',
      fontSize:'2rem',
  }
});
