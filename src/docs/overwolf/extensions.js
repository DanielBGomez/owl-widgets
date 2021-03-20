// Imports
import io from './extensions.io'

/**
 * @typedef {import('./extensions.io').ExtensionsIOAPI} ExtensionsIOAPI
 */

/**
 * Change or retrieve the information of an Overwolf app or respond to events in the app’s lifecycle.
 * 
 * @typedef {object} ExtensionsAPI
 * @property {launch} launch
 * @property {setInfo} setInfo
 * @property {getInfo} getInfo
 * @property {registerInfo} registerInfo
 * @property {unregisterInfo} unregisterInfo
 * @property {getRunningState} getRunningState
 * @property {getManifest} getManifest
 * @property {relaunch} relaunch
 * @property {updateExtension} updateExtension
 * @property {checkForExtensionUpdate} checkForExtensionUpdate
 * @property {getServiceConsumers} getServiceConsumers
 * 
 * @property {ExtensionsIOAPI} io
 */


// ###################################
// ##            Methods            ##
// ###################################



// ###################################
// ##            Events             ##
// ###################################



// ###################################
// ##             Types             ##
// ###################################


/**
 * @type {ExtensionsAPI}
 */
const extension = {
    io
}
export default extension