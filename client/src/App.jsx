import React from 'react'
import { BrowserRouter } from 'react-router'
import BasicRoutings from './components/BasicRoutings'

export default function App() {
  return (
    <BrowserRouter>
      <BasicRoutings />
    </BrowserRouter>
  )
}
