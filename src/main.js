// Methods
import Data from './methods/Data'

// Docs
import Overwolf from './docs/overwolf'

// Views
const Manifest = require('../manifest.json')
const Views = Manifest.data.windows

// Setup data
const App = Data(window)

// Sync config files
App.syncAllConfigs()
    .then(() => {
        // Load views
        Promise.all( Object.keys(Views).map( windowName => new Promise( (resolve, reject) => {
                    // Get window data
                    Overwolf.windows.obtainDeclaredWindow( windowName, ({ success, window }) => {
                            // Exit if failed
                            if(!success) return reject()
        
                            // Store window id
                            App.registerWindow( windowName, window.id )
        
                            // Resolve
                            resolve()
                        })
                })
            ))
            .then(() => {
                // Restore dashboard window
                Overwolf.windows.restore( App.windows.Dashboard )
            })
    })
    .catch(console.error)