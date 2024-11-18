import React from 'react'
import { addElipsis } from '../../Utils/Common_utils'


const Post = ({ post }) => {

  const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
 
  return (
    <>
      <div className="card cardShadow card-size">
        <img src={url} alt="Blog" className='img-fluid blog-img-size' />
        <div className="text-center" style={{ paddingTop: "10px" }}>
          <p style={{ margin: "0px" }}>{post.categories}</p>
          <h5>{addElipsis(post.title, 20)}</h5>
          <p>{post.username}</p>
          <p>{addElipsis(post.description, 50)}</p>
        </div>
      </div>
    </>
  )
}

export default Post