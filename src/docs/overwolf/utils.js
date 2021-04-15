/**
 * Use this API to get the user’s system information, send keystrokes to the game, open URL in default browser and more.
 * 
 * Common use cases:
 * * Getting a string that is currently placed on the clipboard.
 * * Getting the user’s system information (OS, monitors, CPU, GPU, input devices and more).
 * * Opening a URL in a browser.
 * * Send keystrokes to the running game.
 * 
 * @typedef {object} UtilsAPI
 * @property {placeOnClipboard} placeOnClipboard
 * @property {getFromClipboard} getFromClipboard
 * @property {getMonitorsList} getMonitorsList
 * @property {getWindowDPI} getWindowDPI
 * @property {sendKeyStroke} sendKeyStroke
 * @property {openFilePicker} openFilePicker
 * @property {openFolderPicker} openFolderPicker
 * @property {openWindowsExplorer} openWindowsExplorer
 * @property {isTouchDevice} isTouchDevice
 * @property {openUrlInDefaultBrowser} openUrlInDefaultBrowser
 * @property {getSystemInformation} getSystemInformation
 * @property {getPeripherals} getPeripherals
 * @property {openStoreOneAppPage} openStoreOneAppPage
 * @property {openStore} openStore
 * @property {isMouseLeftButtonPressed} isMouseLeftButtonPressed
 * @property {uploadClientLogs} uploadClientLogs
 */


// ###################################
// ##            Methods            ##
// ###################################

/**
 * Copies the given string to the clipboard.
 * 
 * @version 0.80
 * 
 * @callback placeOnClipboard
 * @param {string} data The string to be copied to the clipboard.
 * @returns {void}
 */

/**
 * Gets the string currently placed on the clipboard. If no string is placed on the clipboard, returns null.
 * 
 * @version 0.83
 * 
 * @callback getFromClipboard
 * @param {ClipboardCallback} callback
 * @returns {void}
 */

/**
 * Returns an array with all monitors data including their display resolution, bounds, and names.
 * 
 * Permissions required:
 * - DesktopStreaming
 * 
 * @version 0.83
 * 
 * @callback getMonitorsList
 * @param {GetMonitorsListResultCallback} callback
 * @returns {void}
 */


// ###################################
// ##           Callbacks           ##
// ###################################

/**
 * @callback ClipboardCallback
 * @param {String|null} callback
 * @returns {void}
 */

/**
 * @callback GetMonitorsListResultCallback
 * @param {String|null} callback
 * @returns {void}
 */


// ###################################
// ##             Types             ##
// ###################################

/**
 * @typedef Display
 * @property {string} name
 * @property {string} id
 * @property {number} x                     X returns the pixel distance of your currently active monitor from your primary monitor. For example, if your primary monitor is 1920px wide, and the currently active window is on another monitor located to the left of your primary, X will return 1920 or -1920 based on their relative positions.
 * @property {number} y                     Y returns the pixel distnace of your currently active monitor from your primary monitor. For Example, if your primary monitor and secondary monitor are side by side, Y will return 0, if your displays are one on top of the other and the primary monitor is 1200px tall, Y will return 1200 or -1200 based on their relative positions. 
 * @property {number} dpiX
 * @property {number} dpiY
 * @property {number} width
 * @property {number} height
 * @property {boolean} is_primary
 * @property {object} handle                Returns the current monitor handle
 */

/**
 * @typedef GetMonitorsListResult 
 * @property {boolean} success 
 * @property {string?} error                Error reason in case of success = false
 * @property {Array<Display>?} monitors     The monitors array
 */


// ###################################
// ##            Export             ##
// ###################################
/**
 * @type {ExtensionsIOAPI}
 */
 const io = {
    // createDirectory: e => e,
    // getStoragePath: e => e,
    // exist: e => e,
    // move: e => e,
    // delete: e => e,
    // copy: e => e,
    // dir: e => e,
    // readTextFile: e => e,
    // writeTextFile: e => e,
}
export default io