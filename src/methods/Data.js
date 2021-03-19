/**
 * Create ref to data in the main window for communication between windows
 * 
 * @param {Window} window 
 * @returns {MainData}
 */
export default function Data(window, initialState = {}){
    // Init app object if doesn't exists
    if(typeof window.app == 'undefined') window.app = initialState
    
    // Return reference
    return window.app
}

/**
 * @typedef {Object} MainData
 * @property {Object} app
 */