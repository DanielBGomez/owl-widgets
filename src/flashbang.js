// Modules
import React from 'react'
import ReactDom from 'react-dom'

// Local modules
import Flashbang from './modules/Flashbang'

// Docs
import Overwolf from './docs/overwolf'

// Methods
import Data from './methods/Data'

// AppData
const AppData = Data( Overwolf.windows.getMainWindow() )

// Render
ReactDom.render(<Flashbang appData={ AppData } windowId={ AppData.windows.Flashbang } />, document.getElementById("app"))