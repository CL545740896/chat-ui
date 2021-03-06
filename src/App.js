import React from 'react'
import ChatApp from './views/ChatApp'
import theme from './theme'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ChatApp />
      </ThemeProvider>
    </Router>
  )
}

export default App
