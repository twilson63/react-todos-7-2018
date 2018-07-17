import React from 'react'
import ReactDOM from 'react-dom'
import Component from '@reactions/component'
import App from './app'

ReactDOM.render(
  <Component
    initialState={{
      todos: [{ id: 1, desc: 'Remember Milk', completed: false }]
    }}
  >
    {App}
  </Component>,
  document.getElementById('app')
)
