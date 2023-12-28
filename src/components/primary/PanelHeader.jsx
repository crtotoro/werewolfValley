import React from 'react'
import { toTitleCase } from '../../js/util/helpers'

export default function PanelHeader({ panel }) {
  return (
    <h3>{toTitleCase(panel)}</h3>
  )
}
