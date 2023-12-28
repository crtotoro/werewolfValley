import React from 'react'
import Panel from './Panel'

export default function Panels() {
  return (
    <div className='panels'>
      <Panel key="players" panel="players" />
      <Panel key="roles" panel="roles" />
    </div>
  )
}
