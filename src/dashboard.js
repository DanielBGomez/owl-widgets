// Modules
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// Local modules
import Dashboard, { reducer } from './modules/Dashboard'

// Docs
import OverWolf from './docs/overwolf'

// Methods
import Data from './methods/Data'

// Stores
const store = createStore( reducer )

// AppData
const AppData = Data( OverWolf.windows.getMainWindow() )

// Render
ReactDom.render(
    <Provider store={ store }>
        <Dashboard appData={ AppData } windowId={ AppData.windows.Dashboard } />
    </Provider>,
    document.getElementById("app")
)