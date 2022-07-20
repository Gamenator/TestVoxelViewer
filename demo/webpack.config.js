
const path = require('path');

module.exports = 
{
    mode: "development",
    entry: './demo/demos.js',
    output: 
    {
        filename: 'demos.js',
        path: path.join(__dirname, '/dist'),
    },
    resolve: 
    {
        modules: [ 'node_modules' ]
    }
};