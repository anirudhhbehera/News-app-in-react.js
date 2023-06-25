import React, { Component } from 'react'

export default class NewsItem extends Component {
  
  render() {
    let {title,description,imgurl,newsurl}=this.props
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src={!imgurl?"https://english.cdn.zeenews.com/sites/default/files/2022/12/06/1126180-indbanblog.jpg":imgurl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsurl} target="_blank" className="btn btn-dark">Read More</a>
        </div>
      </div>
      </div>
    )
  }
}
