/**
 * Use this API to get I/O functionalities for the current extension and access your extension's {@link https://overwolf.github.io/docs/api/overwolf-extensions-io#storagespace-enum|dedicated storage space} like the pictures folder, videos folder, or appData folder.
 * 
 * For general I/O functionalities, use the {@link https://overwolf.github.io/docs/api/overwolf-io|overwolf.io API}.
 *
 * In addition, the {@link https://overwolf.github.io/docs/topics/simple-io-plugin|simple I/O plugin} offers several more general I/O features that are not available through the APIs.
 * 
 * @typedef {object} ExtensionsIOAPI
 * @property {createDirectory} createDirectory
 * @property {getStoragePath} getStoragePath
 * @property {exist} exist
 * @property {move} move
 * @property {delete} delete
 * @property {copy} copy
 * @property {dir} dir
 * @property {readTextFile} readTextFile
 * @property {writeTextFile} writeTextFile
 * @property {ExtensionsIOEnums} enums
 */


// ###################################
// ##            Methods            ##
// ###################################

/**
 * Create directory.
 * 
 * @version 0.147
 * 
 * @callback createDirectory
 * @param {StorageSpace} space          The selected storage space.
 * @param {string} path                 Path within the space. Use null or empty string for the space root.
 * @param {ResultCallback} callback     Reports success or failure.
 */

/**
 * Returns the full path of given extension storage space.
 * 
 * @version 0.147
 * 
 * @callback getStoragePath
 * @param {StorageSpace} space                      The selected storage space.
 * @param {GetStoragePathResultCallback} callback   Returns with the full path of the requested extension storage space
 * @returns {void}
 */

/**
 * Returns whether the file or folder specified exist.
 * 
 * @version 0.147
 * 
 * @callback exist
 * @param {StorageSpace} space              The selected storage space.
 * @param {string} path                     Path within the space. Use null or empty string for the space root.
 * @param {ExistResultCallback} callback    Returns with the full path of the requested extension storage space
 * @returns {void}
 */

/**
 * Moves source file or directory and its contents to destination.
 * 
 * @version 0.147
 * 
 * @callback move
 * @param {StorageSpace} space          The selected storage space.
 * @param {string} source               Path for the source.
 * @param {string} destination          Path to move to, including filename.
 * @param {ResultCallback} callback     Reports success or failure.
 * @returns {void}
 */

/**
 * Deletes file or directory and its contents.
 * 
 * @version 0.147
 * 
 * @callback delete
 * @param {StorageSpace} space              The selected storage space.
 * @param {string} path                     Path within the space. Use null or empty string for the space root.
 * @param {DeleteResultCallback} callback   Returns with array of file and directory paths that could not be deleted.
 * @returns {void}
 */

/**
 * Copies source file or directory and its contents to destination.
 * 
 * @version 0.147
 * 
 * @callback copy
 * @param {StorageSpace} space          The selected storage space.
 * @param {string} source               Path for the source.
 * @param {string} destination          Path to copy to, including filename.
 * @param {ResultCallback} callback     Reports success or failure.
 * @returns {void}
 */

/**
 * Lists directories and files under given directory path.
 * 
 * @version 0.147
 * 
 * @callback dir
 * @param {StorageSpace} space              The selected storage space.
 * @param {string} directoryPath            Path within the space. Use null or empty string for the space root.
 * @param {DirResultCallback} callback      Returns with array of file names within the directory.
 * @returns {void}
 */

/**
 * Returns the content of a given file.
 * 
 * @version 0.147
 * 
 * @callback readTextFile
 * @param {StorageSpace} space                      The selected storage space.
 * @param {string} filePath                         Path of a file to read (within the space).
 * @param {ReadTextFileResultCallback} callback     Returns with the content of the fil.
 * @returns {void}
 */

/**
 * Writes the provided text content to the provided file.
 * 
 * @version 0.147
 * 
 * @callback writeTextFile
 * @param {StorageSpace} space          The selected storage space.
 * @param {string} filePath             Path of a file to write (within the space).
 * @param {string} content              Text content to write (added to the end of file, not overwrite the content)
 * @param {ResultCallback} callback     Returns with the content of the fil.
 * @returns {void}
 */


// ###################################
// ##           Callbacks           ##
// ###################################

/**
 * Reports success or failure.
 * 
 * @callback ResultCallback
 * @param {Result} result
 * @returns {void}
 */

/**
 * @callback GetStoragePathResultCallback
 * @param {GetStoragePathResult} callback
 * @returns {void}
 */

/**
 * @callback ExistResultCallback
 * @param {ExistResult} callback
 * @returns {void}
 */

/**
 * @callback DeleteResultCallback
 * @param {DeleteResult} callback
 * @returns {void}
 */

/**
 * @callback DirResultCallback
 * @param {DirResult} callback
 * @returns {void}
 */

/**
 * @callback ReadTextFileResultCallback
 * @param {ReadTextFileResult} callback
 * @returns {void}
 */


// ###################################
// ##             Types             ##
// ###################################

/**
 * @typedef ExtensionsIOEnums
 * @property {FileType} FileType
 * @property {StorageSpace} StorageSpace
 */

/**
 * FileType is "file"|"directory".
 * 
 * @version 0.147
 * 
 * @typedef {'file'|'directory'} FileType
 */

/**
 * The selected storage space.
 * 
 * Note that the default Overwolf's captured pictures and videos folder is the windows "pictures"/"videos" folder.
 * Of course, the user can change it anytime from the OW client UI.
 * 
 * @version 0.147
 * 
 * @typedef StorageSpace
 * @property {string} pictures  The extension's captured pictures folder, `OverwolfPicturesFolder\AppName\`
 * @property {string} videos    The extension's captured videos folder, `OverwolfVideosFolder\AppName\`
 * @property {string} appData   The extension's folder under Roaming app data, `AppData\Roaming\Overwolf\[Extensions UID]`
 */

/**
 * @version 0.147
 * 
 * @typedef Content
 * @property {FileType} type    FileType is "file" or "directory".
 * @property {string} path
 */

/**
 * @typedef FileContent
 * @property {boolean} success
 * @property {string?} content
 * @property {string?} error        Error reason in case of success = false
 */

/**
 * @typedef Result
 * @property {boolean} success
 * @property {string?} error        Error reason in case of success = false
 */

/**
 * @version 0.147
 * 
 * @typedef ReadTextFileResult
 * @property {boolean} success
 * @property {string?} error        Error reason in case of success = false
 * @property {FileContent} content
 */

/**
 * @version 0.147
 * 
 * @typedef ExistResult
 * @property {boolean} success
 * @property {string?} error        Error reason in case of success = false
 * @property {FileType?} type        FileType is "file" or "directory".
 */

/**
 * @version 0.147
 * 
 * @typedef GetStoragePathResult
 * @property {boolean} success
 * @property {string?} error        Error reason in case of success = false
 * @property {path?} type           Full path of the requested extension storage space
 */

/**
 * @version 0.147
 * 
 * @typedef DirResult
 * @property {boolean} success
 * @property {string?} error                Error reason in case of success = false
 * @property {Array<string>?} files         Array of file names within the directory.
 * @property {Array<string>?} directories   Array of directory names within the directory.
 */

/**
 * @version 0.147
 * 
 * @typedef DeleteResult
 * @property {boolean} success
 * @property {string?} error                        Error reason in case of success = false
 * @property {Array<Content>?} undeleted_content    Array of file and directory paths that could not be deleted.
 */


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