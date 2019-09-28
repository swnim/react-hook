import React, { useState } from 'react'
import { Button, Control, Field, Input } from './bulma'

const defaultValue = {
  email: '',
  password: '',
}

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState(defaultValue)
  const handleChange = ({target: { name, value }}) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleSubmit = e => {
    e.preventDefault()

    onLogin(formData)
  }
  const handleCancel = () => {
    setFormData(defaultValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Field>
        <Control>
          <Input name="email" htmlType="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        </Control>
      </Field>
      <Field>
        <Control>
          <Input name="password" htmlType="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        </Control>
      </Field>
      <Field grouped>
        <Control>
          <Button htmlType="submit" color="link">Submit</Button>
          <Button htmlType="button" color="text" onClick={handleCancel}>Cancel</Button>
        </Control>
      </Field>
    </form>
  )
}

export default LoginForm