import React from 'react'
import LoginForm from './LoginForm'
import './App.scss'
import { Box, Columns, Column } from './bulma'

const handleLogin = data => {
  console.log(data)
}

const App = () => {
  return (
    <div className="App">
      <Columns>
        <Column span={3}>
          <Box>
            <LoginForm onLogin={handleLogin}/>
          </Box>
        </Column>
      </Columns>
    </div>
  )
}

export default App
