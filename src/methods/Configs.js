// Local modules
import Overwolf from '../docs/overwolf'

// Configs
const STORAGE_SPACE = Overwolf.extensions.io.enums.StorageSpace.appData

/**
 * Widget Persistent Configurations handler
 * 
 * @version 0.1.0
 * @author DanielBGomez <contact@danielbgomez.com>
 */
class WidgetConfigurations {
    constructor(uuid, defaults = {}){
        // Assigns
        this.uuid = uuid
        this.defaults = defaults
        // Fill instance
        this.values = defaults
        //
        this._checkStorageSpace()
    }
    /**
     * Sync with persistent data
     * 
     * @returns {Promise<object>}
     */
    sync(){
        return new Promise(async (resolve, reject) => {
            try {
                if(await this.exists()){
                    // Read file
                    Overwolf.extensions.io.readTextFile( STORAGE_SPACE,  `configs/widget_${this.uuid}.json`, ({ success, content, error }) => {
                        // Exit if failed
                        if(!success) return reject(error) 
                        // Parse values
                        const values = JSON.parse( content )
                        // Assign values
                        this.values = values
                        // Resolve values
                        resolve(values)
                    })
                } else {
                    // Return defaults
                    resolve(this.defaults)
                }
            } catch(err) {
                reject(err)
            }
        })
    }
    /**
     * Saves the current widget configuration into a persistent file.
     * 
     * @param {object} aditionalValues Aditional values to be added into the config file. If the value already exists, is overriden (except for the uuid).
     * @returns {Promise<void>}
     * @throws {String} Error
     */
    save(aditionalValues){
        return new Promise((resolve, reject) => {
            // Merge values with aditional Values if exists
            const values = typeof aditionalValues != 'object' ? this.values : {
                ...this.values,
                ...aditionalValues,
                uuid: this.uuid 
            }
            // Write file
            Overwolf.extensions.io.writeTextFile( STORAGE_SPACE, `configs/widget_${this.uuid}.json`, JSON.stringify( values ), ({ success, error }) => success ? resolve() : reject(error))
        })
    }

    
        //         try {
        //             // Exists folder?
        //             await new Promise((resolve, reject) => Overwolf.extensions.io.exist( STORAGE_SPACE, 'configs', ({ success, type }) => {
        //                 // Create config folder if doesn't exists
        //                 if(!success) Overwolf.extensions.io.createDirectory( STORAGE_SPACE, 'configs', ({ success, error }) => success ? resolve() : reject(error) )
        //             } ))
            
        //             // Create file
        //             await new Promise((resolve, reject) => Overwolf.extensions.io.writeTextFile( STORAGE_SPACE, 'configs/widgets.json', JSON.stringify( WIDGETS ), ({ success, error }) => success ? resolve() : reject(error)) )
    
        //             resolve()
        //         } catch(error) {
        //             reject(error)
        //         }
        //     }
    /**
     * Check if the config json file exists for the current widget by its uuid.
     * 
     * @returns {Promise<Boolean>}
     * @throws {String} Error
     */
    exists(){
        return new Promise((resolve, reject) => Overwolf.extensions.io.exist( STORAGE_SPACE, `configs/widget_${this.uuid}.json`, ({ success, error }) => success ? resolve(true) : ( error ? reject(error) : resolve(false) ) ))
    }
    /**
     * Check whether the config folder for the config files exists or creates it
     * 
     * @returns {Promise<void>}
     * @throws {String} Error
     */
    _checkStorageSpace(){
        return new Promise((resolve, reject) => {
            // Validate folder existance
            Overwolf.extensions.io.exist( STORAGE_SPACE, 'configs', ({ success }) => {
                // Create config folder if doesn't exists
                if(!success) Overwolf.extensions.io.createDirectory( STORAGE_SPACE, 'configs', ({ success, error }) => success ? resolve() : reject(error) )
            })
        })
    }
}

// Exports
export default (uuid, defaults) => new WidgetConfigurations(uuid, defaults)
export const Class = WidgetConfigurations