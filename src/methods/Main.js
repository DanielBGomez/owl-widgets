// Modules
import { createStore } from 'redux'

// Local modules
import Configurations, { checkStorageSpace } from './Configurations'

// Docs
import Overwolf from '../docs/overwolf'

// Reducers
import Stores from '../stores'

// Consts
import WIDGETS from '../configs/widgets' 

/**
 * Main module class.
 * 
 * This class is shared with all the windows/modules.
 * 
 * @version 0.1.0
 * @author DanielBGomez <contact@danielbgomez.com>
 */
 class Main {
    constructor(){
        // Defaults
        this.windows = {}
        this.widgets = []
        this.widgetsActions = {}
        this.store = createStore( Stores )

        // Modal props
        this.modalProps = {}

        // Config files
        this.configs = {
            widgets: Configurations('widgets', WIDGETS)
        }
    }
    /**
     * Register a window
     * 
     * @param {String} slug     View Slug/Name
     * @param {String} id       View ID
     * @returns {Main} Self reference
     */
    registerWindow(slug, id){
        // Ignore if already exists
        if(this.windows[slug]) return

        // Store
        this.windows[slug] = id

        // Return instance
        return this
    }
    /**
     * Syncronize all config files with the persistent data
     */
    syncAllConfigs(){
        return new Promise((resolve, reject) => {
            // Check storage
            checkStorageSpace()
                .then(() => {
                    Promise.all( Object.keys(this.configs).map( key => this.configs[key].sync() ) )
                        .then(() => {
                            // Update widgets
                            this.widgets = this.configs.widgets.values
                            // Resolve
                            resolve(this)
                        })
                        .catch(reject)
                })
                .catch(reject)
        })
    }
    /**
     * @param {object} props
     */
    openModal(props = {}){
        // Update modal props
        this.modalProps = props
        // Restore modal window        
        Overwolf.windows.restore( this.windows.Modal )
    }
    alert = (props = {}) => this.openModal({ ...props, type: 'alert' })
    choice = (props = {}) => this.openModal({ ...props, type: 'choice' })
}

// Exports
export default () => new Main()
export const Class = Main