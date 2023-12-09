import React , {useState , useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function Protected({children , authentication = true}) {

    const navigate = useNavigate()
    const [loading , setLoading] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    //TODO: make it more optimized
    useEffect(() => {
        if(authStatus === true){
            navigate('/');
        }
        else if(authStatus === false){
            navigate('/login');
        }
        setLoading(false);
    }, [authStatus , navigate , authentication])

  return (
    <div>AuthLayout</div>
  )
}

