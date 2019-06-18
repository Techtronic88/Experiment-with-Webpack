const path = require("path")

// the entry object has dynamic names like
// [ hash ]
// [ chunkhash ]
// [ name ]
// [ id ]
// [ query ]
// [ contenthash ]

module.exports = {
    mode: "development",
    entry: {
        myfile: "./src/engine.js"
    },
    output: {    
        path: path.resolve(__dirname, "build"), 
        filename: "js/[name].js",
        publicPath: "/assets/",
        libraryTarget:"var",
        library: "myfirstlibrary"

    }
} 