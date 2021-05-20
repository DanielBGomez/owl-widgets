/**
 * Use this API to create, interact with and modify your app’s windows.
 * 
 * @typedef {object} WindowsAPI
 * @property {getMainWindow} getMainWindow
 * @property {getCurrentWindow} getCurrentWindow 
 * @property {obtainDeclaredWindow} obtainDeclaredWindow
 * @property {dragMove} dragMove
 * @property {dragResize} dragResize
 * @property {changeSize} changeSize
 * @property {changePosition} changePosition
 * @property {close} close
 * @property {minimize} minimize
 * @property {maximize} maximize
 * @property {restore} restore
 * @property {hide} hide
 * @property {setTopmost} setTopmost
 * @property {bringToFront} bringToFront
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
 * @param {WindowResultCallback} param    A callback function which will be called with the current window object as a parameter
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
 * @param {string} windowName                 The name of the window that was declared in the data.windows section in the manifest
 * @param {WindowProperties|DefaultSizeAndLocation|WindowResultCallback} param 
 * @param {WindowResultCallback} callback     A callback function which will be called with the current window object as a parameter
 * @returns {void}
 */

/**
 * Start dragging a window.
 * 
 * @callback dragMove
 * @param {string} windowId                   The id or name of the window to drag
 * @param {WindowResultCallback} callback     A callback which is called when the drag is completed
 * @returns {void}
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
 * @returns {void}
 */

/**
 * Changes the window size to the new width and height, in pixels, including DPI scale when resizing.
 * 
 * Notes
 * - This function calculates DPI, so you don't need to calculate it yourself.
 * - This function works for all the {@link https://overwolf.github.io/docs/topics/windows-types|window types}.
 * 
 * @version 0.149
 * 
 * @callback changeSize
 * @param {ChangeWindowSizeParams} ChangeWindowSizeParams   Container for the window settings
 * @param {ResultCallback} callback                         Reports success or failure when the size change is completed.
 * @returns {void}
 */

/**
 * Changes the window position in pixels from the top left corner.
 * 
 * Note: changePosition() calculates DPI before changing position (so you should pass coordinates without calculating their DPI).
 * 
 * @version 0.78
 * 
 * @callback changePosition
 * @param {string} windowId             The id or name of the window for which to change the position
 * @param {number} left                 The new window position on the X axis in pixels from the left
 * @param {number} top                  The new window position on the Y axis in pixels from the top
 * @param {ResultCallback?} callback    Reports success or failure when the position change is completed.
 * @returns {void}
 */

/**
 * Closes the window.
 * 
 * @version 0.78
 * 
 * @callback close
 * @param {string} windowId                   The id or name of the window to close
 * @param {WindowResultCallback} callback     Called after the window is closed
 * @returns {void}
 */

/**
 * Minimizes the window.
 * 
 * @version 0.78
 * 
 * @callback minimize
 * @param {string} windowId                   The id or name of the window to minimize
 * @param {WindowResultCallback} callback     Called after the window is minimized
 * @returns {void}
 */

/**
 * Maximize the window.
 * 
 * * This function will not work if the manifest resizable flag is set to false.
 * * If you would like to "unmaximize" the window after calling "maximize()", you can call window.restore(), to restore the window to the previous size/position.
 * 
 * @version 0.81
 * 
 * @callback maximize
 * @param {string} windowId                   The id or name of the window to maximize
 * @param {WindowResultCallback} callback     Called after the window is maximized
 * @returns {void}
 */

/**
 * Restores a minimized/maximized/hidden window.
 * 
 * @version 0.78
 * 
 * @callback restore
 * @param {string} window                     The id or name of the window to restore
 * @param {WindowResultCallback?} callback    Called after the window is restored
 * @returns {void}
 */

/**
 * Hides the window from screen and taskbar.
 * 
 * @version 0.108
 * 
 * @callback hide
 * @param {string} windowId                   The id or name of the window to hide
 * @param {WindowResultCallback?} callback    Called after the window is restored
 * @returns {void}
 */

/**
 * Change the window’s topmost status. Handle with care as topmost windows can negatively impact user experience.
 * 
 * @version 0.89
 * 
 * @callback setTopmost
 * @param {string} windowId             The id or name of the window to restore
 * @param {Boolean} shouldBeTopmost
 * @param {ResultCallback?} callback    Reports success or failure
 * @returns {void}
 */

/**
 * - bringToFront(callback) - Brings this window to the front.
 * - bringToFront(grabFocus, callback) - Brings this window to the front.
 * - bringToFront(windowId, grabFocus, callback) - Brings a window to the front.
 * 
 * | Parameter | Type     | Description                             |
 * | :-------- | :------- | :-------------------------------------- |
 * | windowId  | String   | The id or name of the window to restore |
 * | grabFocus | Boolean  | Window will take system focus           |
 * | callback  | Funciton | Called with the result of the request   |
 * 
 * Notes:
 * - For in-game windows, calling this function will always bring the window to the front.
 * - For desktop/native windows, the behavior depends on the game mode AND the grabFocus param:
 *   - Fullscreen game + grabFocus:false - The window will stay in the background behind the game.
 *   - Fullscreen game + grabFocus:true - The window will move to the foreground and take the focus. The game window will be minimized (use with caution, usually it's a bad UX).
 *   - Windowed game + grabFocus:true/false - The window will move to the foreground. The game window will not be changed.
 * 
 * @version 0.119
 * @version 0.124
 * 
 * @callback bringToFront
 * @param {string|Boolean|ResultCallback} param1
 *  - [String] The id or name of the window to restore
 *  - [Boolean] window will take system focus
 *  - [ResultCallback] Called with the result of the request
 * @param {Boolean|ResultCallback|null} param2
 *  - [Boolean] window will take system focus
 *  - [ResultCallback] Called with the result of the request
 * @param {ResultCallback?} param3    Called after the window is restored
 * @returns {void}
 */


// ###################################
// ##           Callbacks           ##
// ###################################

/**
 * Reports success or failure.
 * 
 * @callback ResultCallback
 * @param {Result} callback
 * @returns {void}
 */

/**
 * A callback function which will be called with a window object as a parameter
 * 
 * @callback WindowResultCallback
 * @param {WindowResult} window
 * @returns {void}
 */

// ###################################
// ##             Types             ##
// ###################################

/**
 * @typedef Result
 * @property {boolean} success
 * @property {string?} error        Error reason in case of success = false
 */

/**
 * @typedef ChangeWindowSizeParams
 * @version 0.149
 * @property {String} window_id
 * @property {number} width
 * @property {number} height
 * @property {boolean} auto_dpi_resize  
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