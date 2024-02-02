import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let{Title,description,imageurl,newsurl,Published,source,author}=this.props
    return (
      <div className='my-3'>
        <div class="card" style={{width:'18rem'}}>
        <img src={!imageurl?'https://media.istockphoto.com/vectors/no-image-available-sign-vector-id1138179183?k=6&m=1138179183&s=612x612&w=0&h=prMYPP9mLRNpTp3XIykjeJJ8oCZRhb2iez6vKs8a8eE=':imageurl} class="card-img-top" alt=" Not Found In The Data"  height='175'/>
        <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <p classNAme="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item">Source- {source}</li>
        <li className="list-group-item">Date Of Publication- {Published}</li>
        <li className="list-group-item">Author- {author}</li>
        </ul>
        <div className="card-body">
        <a href={newsurl} className="card-link">Card link</a>
        {/* <a href="#" className="card-link">Another link</a> */}
        </div>
  </div>
      </div>
    )
  }
}

export default NewsItem