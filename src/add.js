import React from 'react'
import Component from '@reactions/component'

const Add = ({ onNewItem }) => (
  <Component initialState={{ desc: '' }}>
    {({ state, setState }) => (
      <React.Fragment>
        <input
          placeholder="description"
          value={state.desc}
          onChange={e => setState({ desc: e.target.value })}
        />
        <button
          type="button"
          onClick={() => {
            const todo = {
              id: new Date().toISOString(),
              desc: state.desc,
              completed: false
            }
            onNewItem(todo)
            setState({ desc: '' })
          }}
        >
          Add
        </button>
      </React.Fragment>
    )}
  </Component>
)

export default Add
