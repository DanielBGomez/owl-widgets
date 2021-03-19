// Methods
import Data from './methods/Data'

// Docs
import OverWolf from './docs/overwolf'

// Setup data
const App = Data(window, { windows: {} })

// Load dashboard
OverWolf.windows.obtainDeclaredWindow( 'Dashboard', ({ success, window }) => {
    //
    if( success ) {
        // Store window
        App.windows[window.name] = window.id
        
        // Restore window
        OverWolf.windows.restore( window.id )
    }
})