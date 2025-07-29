import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router'



export default function Dashboard() {
    const [data, setData] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            navigate("/login")
            return
        }

        fetch("http://localhost:8080/api/private", {
            headers: {
                Authorization: token
            }
        })
        .then((res)=>{
            if(res.status === 401){
                navigate("/login")
                return
            }
            return res.json()
        })
        .then((data)=>{
            setData(data)
        })
        .catch((err)=>{
            console.error(err)
        })
        .finally(()=>{
            // cleaning up
            console.log("Data:", data)
        })
    }, [])


  return (
    <div>
        <h1>Dashboard</h1>
        <p>all the private information</p>
    </div>
  )
}
