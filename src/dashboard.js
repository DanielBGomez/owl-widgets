// Modules
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// Local modules
import Dashboard, { reducer } from './modules/Dashboard'

// Stores
const store = createStore( reducer )

// Render
ReactDom.render(
    <Provider store={ store }>
        <Dashboard />
    </Provider>,
    document.getElementById("app")
)