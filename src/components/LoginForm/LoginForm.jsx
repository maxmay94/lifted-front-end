import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'
import * as authService from '../../services/authService'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="p-2"
    >

      <div className="m-5 grid">
        <label htmlFor="email" className="">Email</label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          className="bg-slate-800 text-slate-200 rounded"
        />
      </div>
      <div className="grid">
        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={formData.pw}
          name="pw"
          onChange={handleChange}
          className="bg-slate-800 text-slate-200 rounded"
        />
      </div>
      
      <div className='mt-5 flex'>
        <button className="flex-1 bg-green-100/10 rounded mx-5">Log In</button>
        <Link to="/" className='flex-1 bg-red-100/10 rounded mx-5'>
          <button className=''>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
