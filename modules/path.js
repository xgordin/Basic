const path = require('path')

// Basename
console.log(path.basename(__filename));

// Dir Name
console.log(path.dirname(__filename));

// Path ext name
console.log(path.extname(__filename));

// create path
console.log(path.parse(__filename));

// path join
console.log(path.join(__dirname,'teste'));