import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/news'
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     articles:[],
     loading:false
    }
    this.Showbiz=this.Showbiz.bind(this);
    this.showsports=this.showsports.bind(this);
  }
    delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  async componentDidMount(){
    this.setState({loading:true});
    await this.delay(2500);
    console.log("heelo mount")
    try{
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=b89254e615834f459b7a1a0d7422d3b4";
    let data= await fetch(url);
    let parseddata=await data.json()
    console.log(parseddata);
    this.setState({articles: parseddata.articles})
    this.setState({loading:false});
    console.log(this.state.articles)
    }
    catch(e){
      await this.delay(1000);
      alert("make sure you have active internet, please reload when you're ready")
    }
  }
  async Showbiz(){
    try{
    this.setState({loading:true});
    await this.delay(2500);
    let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b89254e615834f459b7a1a0d7422d3b4";
    let data= await fetch(url);
    let parseddata=await data.json()
    console.log(parseddata);
    this.setState({articles: parseddata.articles})
    this.setState({loading:false});
    console.log(this.state.articles)
  }
  catch(e){
    await this.delay(1000);
    alert("make sure you have active internet,please reload when you're ready")
  }
  }
  async showsports(){
    try{
    this.setState({loading:true});
    await this.delay(2500);
    let url="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=b89254e615834f459b7a1a0d7422d3b4";
    let data= await fetch(url);
    let parseddata=await data.json()
    console.log(parseddata);
    this.setState({articles: parseddata.articles})
    this.setState({loading:false});
    console.log(this.state.articles)
  }
  catch(e){
    await this.delay(1000);
    alert("make sure you have active internet,please reload when you're ready")
  }
  }
  render() {
    return (
      <div>
      <Navbar Business={this.Showbiz} Sports={this.showsports}/>
      {this.state.loading&&
        <div class="loader">
            <div class="box box-1">
              <div class="side-left"></div>
              <div class="side-right"></div>
              <div class="side-top"></div>
            </div>
            <div class="box box-2">
              <div class="side-left"></div>
              <div class="side-right"></div>
              <div class="side-top"></div>
            </div>
            <div class="box box-3">
              <div class="side-left"></div>
              <div class="side-right"></div>
              <div class="side-top"></div>
            </div>
            <div class="box box-4">
              <div class="side-left"></div>
              <div class="side-right"></div>
              <div class="side-top"></div>
            </div>
        </div>
      }
      {!this.state.loading&&<News art={this.state.articles}/>}
      </div>
    )
  }
}