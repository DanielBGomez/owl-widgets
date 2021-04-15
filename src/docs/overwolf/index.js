// Imports
import extensions from './extensions'
import './utils'
import './windows'

/**
 * @typedef {import('./extensions').ExtensionsAPI} ExtensionsAPI
 * @typedef {import('./utils').UtilsAPI} UtilsAPI
 */

/**
 * Overwolf APIs are global components that allow interaction with various Overwolf features, third party services and server-side queries.
 * 
 * @see https://overwolf.github.io/docs/api/overwolf-api-overview
 * 
 * @typedef {Object} Overwolf
 * @property {ExtensionsAPI} extensions           Use the overwolf.utils API to get the user's system information, send keystrokes to the game, open URLs in default browser and more.
 * @property {UtilsAPI} utils           Use the overwolf.utils API to get the user's system information, send keystrokes to the game, open URLs in default browser and more.
 * @property {WindowsAPI} windows       Use the overwolf.windows API to to create, modify or interact with your app's windows.
 */

/**
 * @type {Overwolf}
 */
const ow = typeof overwolf != "undefined" ? overwolf : {
    utils: {},
    windows: {},
    extensions
}

export default ow