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