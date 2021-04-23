// Local modules
import Main from './Main'

/**
 * @typedef {import('./Main').Class} Main
 */

/**
 * Create ref to data in the main window for communication between windows
 * 
 * @param {Window} window 
 * @returns {Main}
 */
export default function Data(window){
    // Init app object if doesn't exists
    if(typeof window.app == 'undefined') window.app = Main()
    
    // Return reference
    return window.app
}

/**
 * @typedef {Object} MainData
 * @property {Object} app
 */