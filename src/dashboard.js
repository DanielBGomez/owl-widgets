// Modules
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

// Local modules
import Dashboard from './modules/Dashboard'

// Docs
import OverWolf from './docs/overwolf'

// Methods
import Data from './methods/Data'

// AppData
const AppData = Data( OverWolf.windows.getMainWindow() )

// Render
ReactDom.render(
    <Provider store={ AppData.stores.widgets }>
        <Dashboard appData={ AppData } windowId={ AppData.windows.Dashboard } />
    </Provider>,
    document.getElementById("app")
)