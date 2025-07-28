import React, {useState} from 'react'

export default function Register() {
    const [form, setForm] = useState({
        firstName: '', 
        lastName: '',
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

        // send API request to register user/
        const res = await fetch("http://localhost:8080/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })

        const data = await res.json()

        alert(data.message)

        // reset form after submission
        setForm({
            firstName: '',
            lastName: '',
            email: '',  
            password: '',
        })
    }
  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
            <button type="submit">Register</button>
        </form>
    </div>
  )
}
