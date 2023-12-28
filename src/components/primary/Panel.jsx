import React from 'react'
import PanelHeader from './PanelHeader'

export default function Panel({ panel }) {
  return (
    <div id={`${panel}-panel`} className={`panel`}>
      <PanelHeader panel={panel} />
    </div>
  )
}
