// Imports
import './objects'
import './windows'

/**
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