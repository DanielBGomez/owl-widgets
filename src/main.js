// Methods
import Data from './methods/Data'

// Docs
import Overwolf from './docs/overwolf'

// Configs
import WIDGETS from './configs/widgets'

const STORAGE_SPACE = Overwolf.extensions.io.enums.StorageSpace.appData

const CONFIGS = {}

// Exists config file?
new Promise((resolve, reject) => Overwolf.extensions.io.exist( STORAGE_SPACE, 'configs/widgets.json', async ({ success }) => {
        if(success) {
            // Get config data
            return Overwolf.extensions.io.readTextFile( STORAGE_SPACE, 'configs/widgets.json', ({ success, content, error }) => {
                // Exit if failed
                if(!success) return reject(error) 

                try {
                    // Parse JSON
                    CONFIGS.WIDGETS = JSON.parse( content )

                    resolve()
                } catch(err) {
                    reject(err)
                }
            })
            
        } else {
            // Create config file with default values

            try {
                // Exists folder?
                await new Promise((resolve, reject) => Overwolf.extensions.io.exist( STORAGE_SPACE, 'configs', ({ success, type }) => {
                    // Create config folder if doesn't exists
                    if(!success) Overwolf.extensions.io.createDirectory( STORAGE_SPACE, 'configs', ({ success, error }) => success ? resolve() : reject(error) )
                } ))
        
                // Create file
                await new Promise((resolve, reject) => Overwolf.extensions.io.writeTextFile( STORAGE_SPACE, 'configs/widgets.json', JSON.stringify( WIDGETS ), ({ success, error }) => success ? resolve() : reject(error)) )

            } catch(error) {
                reject(error)
            }
        }
    }) )
    .catch(console.error)
    .then(() => {
        // Use the default widgets config if failed to fetch the file
        if(!CONFIGS.WIDGETS) CONFIGS.WIDGETS = WIDGETS

        // Setup data
        const App = Data(window, {
            windows: {},
            widgets: CONFIGS.WIDGETS || WIDGETS
        })

        // Views
        const Manifest = require('../manifest.json')
        const Views = Manifest.data.windows
        
        // Load views
        Promise.all( Object.keys(Views).map( windowName => new Promise( (resolve, reject) => {
                    // Get window data
                    Overwolf.windows.obtainDeclaredWindow( windowName, ({ success, window }) => {
                            // Exit if failed
                            if(!success) return reject()
        
                            // Store window id
                            App.windows[windowName] = window.id
        
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