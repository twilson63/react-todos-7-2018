import React from 'react'
import Component from '@reactions/component'

const Description = ({ value, onSubmit }) => (
  <Component initialState={{ edit: false, desc: value }}>
    {({ state, setState }) =>
      state.edit ? (
        <React.Fragment>
          <input
            type="text"
            value={state.desc}
            onChange={e => setState({ desc: e.target.value })}
          />
          <button
            type="button"
            onClick={() => {
              onSubmit(state.desc)
              setState({ edit: false })
            }}
          >
            Update
          </button>
        </React.Fragment>
      ) : (
        <div onDoubleClick={() => setState({ edit: true })}>{state.desc}</div>
      )
    }
  </Component>
)

export default Description
