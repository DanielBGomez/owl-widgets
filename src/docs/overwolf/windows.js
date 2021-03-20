/**
 * Use this API to create, interact with and modify your app’s windows.
 * 
 * @typedef {object} WindowsAPI
 * @property {getMainWindow} getMainWindow
 * @property {getCurrentWindow} getCurrentWindow 
 * @property {obtainDeclaredWindow} obtainDeclaredWindow
 * @property {dragMove} dragMove
 * @property {dragResize} dragResize
 * @property {close} close
 * @property {minimize} minimize
 * @property {maximize} maximize
 * @property {restore} restore
 */


// ###################################
// ##            Methods            ##
// ###################################

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
 * @param {CBWindowResult} param    A callback function which will be called with the current window object as a parameter
 * @returns {void}
 */

/**
 * Creates an instance of your window (the window’s name has to be declared in the manifest.json) or returns a window by the window name.
 * 
 * This method can either have just the callback or an object and a callback.
 * 
 * Accepted objects:
 * * DefaultSizeAndLocation
 * * WindowProperties
 * 
 * @see DefaultSizeAndLocation
 * @see WindowProperties
 * 
 * 
 * @callback obtainDeclaredWindow
 * @param {string} windowName           The name of the window that was declared in the data.windows section in the manifest
 * @param {WindowProperties|DefaultSizeAndLocation|CBWindowResult} param 
 * @param {CBWindowResult} callback     A callback function which will be called with the current window object as a parameter
 * @returns {void}
 */

/**
 * Start dragging a window.
 * 
 * @callback dragMove
 * @param {string} windowId             The id or name of the window to drag
 * @param {CBWindowResult} callback     A callback which is called when the drag is completed
 */

/**
 * Start resizing the window from a specific edge or corner.
 * 
 * @todo contentRect param
 * @todo rect param
 * @todo callback param
 * 
 * @callback dragResize
 * @param {string} windowId             The id or name of the window to resize
 * @param {WindowDragEdge} edge         The edge or corner from which to resize the window
 */

/**
 * Closes the window.
 * 
 * @callback close
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


// ###################################
// ##             Types             ##
// ###################################

/**
 * A callback function which will be called with a window object as a parameter
 * 
 * @callback CBWindowResult
 * @param {WindowResult} window
 * @returns {void}
 */

/**
 * An object that Enable the manifest size and position settings (default is false).
 * 
 * The default behaviour of OW is to "remember" the last size and position of a window, before it closes. When useDefaultSizeAndLocation is set to true, the window will be created using the default (manifest) size and location, rather than the saved setting (if one exists).
 * 
 * If there is no "start_position" property (size and position) for a window in the manifest, it will default to 0,0.
 * 
 * @typedef {Object} DefaultSizeAndLocation
 * 
 * @property {bool} useDefaultSizeAndLocation
 */

/**
 * Message prompt icon.
 * 
 * | Value       | Description                                              |
 * | :---------- | :------------------------------------------------------- |
 * | None        | No window edge or corner to drag                         |
 * | Left        | Drag the left window edge in order to resize it          |
 * | Right       | Drag the right window edge in order to resize it         |
 * | Top         | Drag the top window edge in order to resize it           |
 * | Bottom      | Drag the bottom window edge in order to resize it        |
 * | TopLeft     | Drag the top-left window edge in order to resize it      |
 * | TopRight    | Drag the top-right window edge in order to resize it     |
 * | BottomLeft  | Drag the bottom-left window edge in order to resize it   |
 * | BottomRight | Drag the bottom-right window edge in order to resize it  |
 * 
 * @version 0.78
 * 
 * @typedef {'None'|'Left'|'Right'|'Top'|'Bottom'|'TopLeft'|'TopRight'|'BottomLeft'|'BottomRight'} WindowDragEdge
 */

/**
 * The current window object.
 * 
 * @typedef {Object} WindowInfo
 * 
 * @property {string} id
 * @property {string} name
 * @property {number} width
 * @property {number} height
 * @property {number} top
 * @property {number} left
 * @property {boolean} isVisible
 * @property {WindowStateEx} stateEx    Always use this param to get the state of the window
 * @property {string} monitorId         Return monitorId (If the Window is not opened already) - allowing one window (background) to know on which monitor another window exists.
 * @property {string} Parent            The parent window id
 * @property {string} state             Deprecated and kept only for backward compatibility
 */

/**
 * An object that allows to override the manifest.json requested window settings.
 * 
 * @typedef {Object} WindowProperties
 * 
 * @property {boolean} nativeWindow
 * @property {boolean} enablePopupBlocker
 */

/**
 * Container for the currrent window object.
 * 
 * @typedef {Object} WindowResult
 * 
 * @property {boolean} success
 * @property {WindowInfo} window
 */

/**
 * Possible windows states
 * 
 * @typedef {'closed'|'minimized'|'hidden'|'normal'|'maximized'} WindowStateEx
 */