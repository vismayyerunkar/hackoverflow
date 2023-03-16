import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../styles/Community.css'
import Avatar from 'react-avatar';
import {BiUpvote} from "react-icons/bi"
import {FaCommentDots,FaDonate} from "react-icons/fa"
import axios from "axios"

export const Community = () => {

  const [isLiked,setIsLiked] = useState(false);
  const [showComments,setShowComments] = useState(false);
  const [comment,setComment] = useState("");
  const [donate,setDonate] = useState(false);

  useEffect(()=>{
    axios.get("http://172.17.29.30:5000/api/v1/p/get").then((res)=>{
      console.log(res.data);
    })
  },[])



  return (
    <>
        <Navbar/>
        <div className='community'>
            {/* <div className="community-leftbar">
              sda
            </div> */}
            <div className='community-card-holder'>
              <div className='community-card'>
                <div className='community-card-info-wrapper'>
                    <Avatar className='community-card-avatar' size="50" round={true} src="https://rb.gy/ae5rhx" />
                    <div className='community-card-info'>
                        <b>John doe</b>
                        <span>Maharashtra | India</span>
                    </div>
                </div> 
                <div className='caption-holder'>
                  lorem loremloremloremloremlorem lorem lorem lorem lorem lorem lorem
                  lorem loremloremloremloremlorem lorem lorkajhd aksdh kj asd kashd  asd kajsd em lorem lorem lorem lorem
                </div> 
                {/* <div className='img-holder'>
                    <img width={"100%"} height={"60%"} src="https://rb.gy/f5glym"/>
                </div>  */}
                <hr/>
                <div className='card-options'>
                    <div>
                      <span><BiUpvote size={21}/></span>
                      <span>Upvote</span>
                    </div>
                    <div>
                      <span><FaCommentDots size={21}/></span>
                      <span>Comment</span>
                    </div>
                    {
                      true && (
                        <div style={{color:donate ? "var(--primary-color)" : ""}} onClick={()=>setDonate(!donate)}>
                        <span><FaDonate size={21}/></span>
                        <span>Donate</span>
                      </div>
                    )
                  }

                </div>
                {
                  donate && (
                    <div className='comment-holder'>
                    <div className='comment-input-holder'>
                      <input placeholder='Please start typing ...' type="text"/>
                      <button>Place</button>
                    </div>

                    <div className='comment'>
                        <div className='comment-header'>
                            <Avatar className='comment-user-info' size="50" round={true} src="https://rb.gy/ae5rhx" />
                          <div className='comment-user-info'>
                              <b>John doe</b>
                              <p>Maharashtra | india</p>
                              
                          </div>
                          {/* if the logged in user has created this post then he can see the accept btn */}
                          <button className='accept-bid'>
                              Accept
                            </button>
                        </div>
                        <div className='comment-desc'>
                            this is a comment
                        </div>
                    </div>  
                    {/* <h4 className='load-more-comments'>Load more Bids</h4> */}
                </div>
                  )
                }
              </div>
              <div className='community-card'>
                <div className='community-card-info-wrapper'>
                    <Avatar className='community-card-avatar' size="50" round={true} src="https://rb.gy/ae5rhx" />
                    <div className='community-card-info'>
                        <b>John doe</b>
                    </div>
                </div> 
                <div className='caption-holder'>
                  lorem loremloremloremloremlorem lorem lorem lorem lorem lorem lorem
                  lorem loremloremloremloremlorem lorem lorkajhd aksdh kj asd kashd  asd kajsd em lorem lorem lorem lorem
                </div> 
                <div className='img-holder'>
                    <img width={"100%"} height={"60%"} src="https://rb.gy/f5glym"/>
                </div> 
                <hr/>
                <div className='card-options'>
                    <div>
                      <span><BiUpvote size={21}/></span>
                      <span>Upvote</span>
                    </div>
                    <div style={{color:showComments ? "var(--primary-color)" : ""}} onClick={()=>setShowComments(!showComments)}>
                      <span><FaCommentDots size={21}/></span>
                      <span>Comment</span>
                    </div>
                </div>

                {
                  showComments && (
                    <div className='comment-holder'>
                    <div className='comment-input-holder'>
                      <input placeholder='Please start typing ...' type="text"/>
                      <button>Post</button>
                    </div>

                    <div className='comment'>
                        <div className='comment-header'>
                            <Avatar className='comment-user-info' size="50" round={true} src="https://rb.gy/ae5rhx" />
                          <div className='comment-user-info'>
                              <b>John doe</b>
                              <p>Maharashtra | india</p>
                          </div>
                        </div>
                        <div className='comment-desc'>
                            this is a comment
                        </div>
                    </div>  
                    {/* <h4 className='load-more-comments'>Load more comments</h4> */}
                </div>
                )
              }
               
                
              </div>
            </div>
            
            {/* <div className="community-rightbar">
                
            </div> */}
        </div>
    </>
  )
}

