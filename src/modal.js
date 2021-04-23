// Modules
import React, { Fragment } from 'react'
import { render } from 'react-dom'

// Component
import Modal from './modules/Modal'

// Docs
import OverWolf from './docs/overwolf'

// Methods
import Data from './methods/Data'

// AppData
const AppData = Data( OverWolf.windows.getMainWindow() )

// Render
render(<Modal {...AppData.modalProps} appData={AppData} windowId={AppData.windows.Modal} />, document.getElementById("app"))