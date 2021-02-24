// Env
require('dotenv').config()

// Modules
const fs = require('fs-extra')
const jszip = require('jszip')
const { Command } = require('commander')
const { performance } = require('perf_hooks')
const JSZip = require('jszip')

// Configurations
const program = new Command()

// Execs
program
    .option('-o, --output <path>', 'output path', process.env.PACK_PATH )

// Parse arguments
program.parse(process.argv)

// Get options
const { output } = program.opts()

// Output is required
if(!output) throw "No output path specified. -o, --output <path>, PACK_PATH"

// Zip
const zip = new jszip()

// Performance
const perf = performance.now()

// Root files
const manifest = fs.readFileSync('manifest.json', { encoding: "base64" })
zip.file("manifest.json", manifest, { base64: true })

// Directories
zipDirFiles('lib', zip)
zipDirFiles('assets', zip)

// Create zip
zip.generateAsync({
        type: "nodebuffer",
        compression: "DEFLATE",
        compressionOptions: {
            level: 9
        }
    })
    .then(content => {
        // Write zip
        fs.writeFile(output, content)
            .then(resp => console.log(`Zip generated at ${output} ( ${ ((performance.now() - perf ) / 1000 ).toFixed(4) } seconds )`))
            .catch(err => {
                throw err
            })
    })

/**
 * 
 * @param {String} dir 
 * @param {JSZip} zip 
 * @param {Array} basePath 
 */
function zipDirFiles(dir, zip, basePath = []){
    // Path
    basePath.push(dir)
    const pathString = basePath.join('/')

    // Create folder in zip
    const dirFolder = zip.folder(dir)
    // Read contents
    fs.readdirSync( pathString )
        .forEach(fileName => {
            // Is folder?
            if(fs.statSync(`${ pathString }/${ fileName }`).isDirectory()){
                // Recursive
                return zipDirFiles(fileName, dirFolder, basePath)
            } else {
                // Write file in folder
                const file = fs.readFileSync(`${ pathString }/${ fileName }`, { encoding: "base64" })
                dirFolder.file(fileName, file, { base64: true })
            }
        })

}