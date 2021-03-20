// Imports
import './objects'
import './windows'

/**
 * Use this API to create, interact with and modify your app’s windows.
 * 
 * 
 * 
 * @typedef {Object} Overwolf
 * @property {WindowsAPI} windows
 */

/**
 * @type {Overwolf}
 */
const ow = typeof overwolf != "undefined" ? overwolf : {
    windows: {}
}

export default ow