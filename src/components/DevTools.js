import { default as React } from 'react'
import { createDevTools } from 'redux-devtools'
import { default as LogMonitor } from 'redux-devtools-log-monitor'
import { default as DockMonitor } from 'redux-devtools-dock-monitor'

export default createDevTools(
  <DockMonitor
    changePositionKey='ctrl-w'
    defaultIsVisible={false}
    toggleVisibilityKey='ctrl-h'
  >
    <LogMonitor />
  </DockMonitor>
)
