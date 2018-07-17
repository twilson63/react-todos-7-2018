import React from 'react'
import { map, append, reject, propEq } from 'ramda'
import Description from './description'

import Add from './add'

const App = props => {
  const { state, setState } = props
  return (
    <main>
      <header>
        <h1>Todo App</h1>
        <Add
          onNewItem={todo => setState({ todos: append(todo, state.todos) })}
        />
      </header>
      <div>
        <button>remove all completed items</button>
      </div>
      <ul>{map(li, state.todos)}</ul>
      <button>all</button>
      <button>uncomplete</button>
      <button>completed</button>
    </main>
  )

  function li(todo) {
    return (
      <li key={todo.id}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            const newList = map(t => {
              if (t.id === todo.id) {
                t.completed = !t.completed
              }
              return t
            }, state.todos)
            setState({ todos: newList })
          }}
        />
        <Description
          value={todo.desc}
          onSubmit={desc =>
            setState({
              todos: map(t => {
                if (todo.id === t.id) {
                  t.desc = desc
                }
                return t
              }, state.todos)
            })
          }
        />
        <button
          type="button"
          onClick={() => {
            if (confirm('Are you sure?')) {
              setState({
                todos: reject(propEq('id', todo.id), state.todos)
              })
            }
          }}
        >
          remove
        </button>
      </li>
    )
  }
}

export default App
