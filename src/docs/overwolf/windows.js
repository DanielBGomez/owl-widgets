/**
 * Returns a window object of the index page.
 * 
 * This function allows you to get direct access to your main index page (which should be a controller/background page) and it’s HTML Window object (and thus any JS function or DOM element), which is also guaranteed to exist when calling this method from any other window (unlike the getOpenWindows()).
 * 
 * If you hold one global "manager" object in your background, then all other windows have a single object to interact with. This is why we recommend the getMainWindow() approach.
 * 
 * overwolf.windows.sendMessage performs object copying, so it might be a bit less efficient - depending on your use-case
 * 
 * Read more in the {@link https://overwolf.github.io/docs/topics/communicating-between-windows|"Communication between windows"} section.
 * 
 * @callback getMainWindow
 * @returns {Window} 
 */

/**
 * Calls the given callback function with the current window object as a parameter.
 * 
 * @callback getCurrentWindow
 * @param {CBWindowResult} callback A callback function which will be called with the current window object as a parameter
 * @returns {void}
 */

/**
 * Creates an instance of your window (the window’s name has to be declared in the manifest.json) or returns a window by the window name.
 * 
 * @callback obtainDeclaredWindow
 * @param {string} windowName           The name of the window that was declared in the data.windows section in the manifest
 * @param {CBWindowResult} callback     A callback function which will be called with the current window object as a parameter
 */

/**
 * Closes the window.
 * 
 * @callback minimize
 * @param {string} windowId             The id or name of the window to close
 * @param {CBWindowResult} callback     Called after the window is closed
 */

/**
 * Minimizes the window.
 * 
 * @callback minimize
 * @param {string} windowId             The id or name of the window to minimize
 * @param {CBWindowResult} callback     Called after the window is minimized
 */

/**
 * Maximize the window.
 * 
 * * This function will not work if the manifest resizable flag is set to false.
 * * If you would like to "unmaximize" the window after calling "maximize()", you can call window.restore(), to restore the window to the previous size/position.
 * 
 * @callback maximize
 * @param {string} windowId             The id or name of the window to maximize
 * @param {CBWindowResult} callback     Called after the window is maximized
 */

/**
 * Restores a minimized/maximized/hidden window.
 * 
 * @callback restore
 * @param {string} window               The id or name of the window to restore
 * @param {CBWindowResult?} callback    Called after the window is restored
 */



/**
 * A callback function which will be called with a window object as a parameter
 * 
 * @callback CBWindowResult
 * @param {WindowResult} window
 * @returns {void}
 */



/**
 * Use this API to create, interact with and modify your app’s windows.
 * 
 * @typedef {object} WindowsAPI
 * @property {getMainWindow} getMainWindow
 * @property {getCurrentWindow} getCurrentWindow 
 * @property {obtainDeclaredWindow} obtainDeclaredWindow
 * @property {close} close
 * @property {minimize} minimize
 * @property {maximize} maximize
 * @property {restore} restore
 */