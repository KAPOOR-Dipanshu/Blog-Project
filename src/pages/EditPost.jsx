import React , {useEffect,useState} from 'react'
import { Container, PostCard } from '../components'
import service from '../appwrite/conf'
import {useNavigate, useParams} from 'react-router-dom'

function EditPost() {
    const [post, setPost] = useState(null)
    const navigate = useNavigate()
    const {slug} = useParams()

    useEffect(()=>{
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
        }else{
            navigate('/')
        }
    },[slug,navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostCard post = {post}/>
        </Container>
    </div>
  ) : null
}

export default EditPost