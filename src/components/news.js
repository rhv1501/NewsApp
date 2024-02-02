import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class news extends Component {
  render() {
    let {art}=this.props;
    return (
      <div className='container my-3'>
        <h2>NewsMaster Top Headlines</h2>
        <div className='row'>
        {art.map((element)=>{return<div className='col-md-4'><NewsItem Title={element.title} key={element} description={element.description}imageurl={element.urlToImage} newsurl={element.url}Published={element.publishedAt} source={element.source.name} author={element.author}/>
          </div>})}
        </div>
      </div>
    )
  }
}
export default news