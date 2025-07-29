import React, {useState} from 'react'

export default function Login() {
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) =>{
        // prevent default form submission
        e.preventDefault()

        // send API request to login user/
        const res = await fetch("http://localhost:8080/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })

        const data = await res.json()

        console.log(data)

        if(data.token){
            localStorage.setItem("token", data.token)
        }

        alert(data.message)

        // reset form after submission
        setForm({
            email: '',  
            password: '',
        })
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}
