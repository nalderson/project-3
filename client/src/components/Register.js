import React, { useState } from 'react'
import axios from 'axios'

export default function Register({ history }) {

  const [formData, updateFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const [errors, updateErrors] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  function handleChange(event) {
    const { name, value } = event.target
    updateFormData({ ...formData, [name]: value })
    updateErrors({ ...errors, [name]: '' })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/register', formData)
      console.log(data)
      history.push('/login')
    } catch (err) {
      updateErrors(err.response.data.errors)
    }
  }

  return <div className="section">
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={formData.username}
              onChange={handleChange}
              name={'username'}
            />
            {
              // ! I can make error messages appear conditionally in here, like this!
              // ! Or however you like, use your imagination!

              // ! When errors.username = '', nothing will show, so you need an actual
              // ! error from the b/e this text to appear..
            }
            {errors.username && <small className="has-text-danger">
              {errors.username}
            </small>}
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={formData.email}
              onChange={handleChange}
              name={'email'}
            />
            {
              // ! Same idea for email
            }
            {errors.email && <small className="has-text-danger">
              {errors.email}
            </small>}
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              value={formData.password}
              onChange={handleChange}
              name={'password'}
            />
            {
              // ! and passwords
            }
            {errors.password && <small className="has-text-danger">
              {errors.password}
            </small>}
          </div>
        </div>
        <div className="field">
          <label className="label">Confirm password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              value={formData.passwordConfirmation}
              onChange={handleChange}
              name={'passwordConfirmation'}
            />
            {
              // ! and password conf. This one is fun because it can show 2 different errors
              // ! 1) if its missing, 2) if it doesn't match password!
            }
            {errors.passwordConfirmation && <small className="has-text-danger">
              {errors.passwordConfirmation}
            </small>}
          </div>
        </div>
        <button className="button">Submit</button>
      </form>
    </div>
  </div>
}