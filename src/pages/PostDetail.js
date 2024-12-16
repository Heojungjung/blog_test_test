import React from 'react'
import { useParams } from 'react-router-dom'
import CommentSection from '../components/CommentSection'
import postsData from '../data/postsData'

const PostDetail = () => {
  const {id} = useParams();
  const post = postsData.find((p)=>p.id === parseInt(id,10));

  if(!post){
    return (
      <div className='journalLayout'>
        게시글을 찾을 수 없습니다.
      </div>
    )
  }
  return (
    <div>
      <div>
      <h2>{post.title}</h2>
      <div>Writer {post.author}</div>
      <span>{post.date}</span>
    </div>
      <h2>
        {post.content}
      </h2>
    <p>
      {post.body}
    </p>
    <CommentSection>
      
    </CommentSection>
    </div>
  )
}

export default PostDetail