// Modules
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// Component
import Modal from './modules/Modal'

// Docs
import OverWolf from './docs/overwolf'

// Methods
import Data from './methods/Data'

// AppData
const AppData = Data( OverWolf.windows.getMainWindow() )

// Render
render(
  <Provider store={ AppData.store }>
    <Modal appData={AppData} windowId={AppData.windows.Modal} />
  </Provider>, document.getElementById("app"))