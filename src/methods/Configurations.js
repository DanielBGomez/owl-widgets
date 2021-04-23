// Local modules
import Overwolf from '../docs/overwolf'

// Configs
const STORAGE_SPACE = Overwolf.extensions.io.enums.StorageSpace.appData

/**
 * Persistent Configurations handler
 * 
 * @version 0.1.0
 * @author DanielBGomez <contact@danielbgomez.com>
 */
class Configurations {
    constructor(slug, defaults = {}){
        // Assigns
        this.slug = slug
        this.defaults = defaults
        // Fill instance
        this.values = defaults
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
                    Overwolf.extensions.io.readTextFile( STORAGE_SPACE,  `configs/${this.slug}.json`, ({ success, content, error }) => {
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
     * Saves the current configuration into a persistent file.
     * 
     * @param {object} aditionalValues Aditional values to be added into the config file. If the value already exists, is overriden (except for the slug).
     * @returns {Promise<void>}
     * @throws {String} Error
     */
    save(aditionalValues){
        return new Promise((resolve, reject) => {
            // Merge values with aditional Values if exists
            const values = typeof aditionalValues != 'object' ? this.values : {
                ...this.values,
                ...aditionalValues,
                slug: this.slug 
            }
            // Write file
            Overwolf.extensions.io.writeTextFile( STORAGE_SPACE, `configs/${this.slug}.json`, JSON.stringify( values ), ({ success, error }) => success ? resolve() : reject(error))
        })
    }
    /**
     * Check if the config json file exists.
     * 
     * @returns {Promise<Boolean>}
     * @throws {String} Error
     */
    exists(){
        return new Promise((resolve, reject) => Overwolf.extensions.io.exist( STORAGE_SPACE, `configs/${this.slug}.json`, ({ success, error }) => success ? resolve(true) : resolve(false) ))
    }
    /**
     * Check if the config folder exists or creates it
     * 
     * @returns {Promise<this>}
     * @throws {String} Error
     */
    static checkStorageSpace(){
        return new Promise((resolve, reject) => {
            // Validate folder existance
            Overwolf.extensions.io.exist( STORAGE_SPACE, 'configs', ({ success }) => {
                // Create config folder if doesn't exists
                if(!success) return Overwolf.extensions.io.createDirectory( STORAGE_SPACE, 'configs', ({ success, error }) => success ? resolve() : reject(error) )
                // Resolve
                resolve()
            })
        })
    }
}

// Exports
export default (slug, defaults) => new Configurations(slug, defaults)
export const Class = Configurations
export const checkStorageSpace = Configurations.checkStorageSpace