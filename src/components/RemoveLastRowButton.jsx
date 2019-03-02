import React from 'react'
import { observer } from 'mobx-react'

// Leading decorators must be attached to a class declaration
const RemoveLastRowButton = ({ store }) => {
  const { removeTodo } = store
  return (
    <div>
      <button onClick={removeTodo}>Remove</button>
    </div>
  )
}

export default observer(RemoveLastRowButton)
