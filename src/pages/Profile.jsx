import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams} from "react-router-dom"
import appwriteService from "../appwrite/config"
import Button from "../components/Button"
import Container from "../components/container/Container"
import {useSelector } from "react-redux"

function Profile() {
  const [post, setPost] = useState(null)
  const {slug} = useParams()
  const navigate = useNavigate()

  const userData = useSelector((state) => state.auth.userData)
  const isAuthor = post && userData ? post.userId === userData.$id : false

  useEffect(() => {
    if (slug) {
      appwriteService.getProfile(slug).then((post) => {
        if (post) {
          setPost(post)
        }else {
          navigate("/")
        }
      })
    }
  }, [slug, navigate])

  const deletePost = () => {
    appwriteService.deleteProfile(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteProfile(post.profileImage);
        navigate("/")
      }
    })
  }

  return post ? (
    <div className="py-8">
      <Container>
        <div className='w-full flex justify-center mb-4 relative border rounded-xl p-2'>
          <img src={appwriteService.getFilePreview(post.profileImage)} alt={post.title} className='rounded-xl' />
          { isAuthor && (
            <div className="absolute-right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">Edit</Button>
              </Link>
              <Button bgColor="bg-red-500" 
              onClick={deletePost}
              >Delete</Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <h1 className="text-l font-normal">{post.name}</h1>
          <h1 className="text-l font-normal">{post.address}</h1>
          <h1 className="text-l font-normal">{post.contact}</h1>
          <h1 className="text-l font-normal">{post.status}</h1>
        </div>
      </Container>
    </div>
  ) : null
}

export default Profile