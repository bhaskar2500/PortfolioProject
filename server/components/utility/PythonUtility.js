var { PythonShell } = require('python-shell')
var path = require('path')
var pythonPath = process.env.PYTHON_PATH;
var scriptPath = path.join(base_directory, 'PythonScripts', 'summarize.py')


module.exports.summarizeData = function (data) {

    const options = {
        pythonPath: pythonPath,
        mode: 'text',
        pythonOptions: ['-u'],
        args: [data]
    }

    var pyshell = new PythonShell(scriptPath, options);
    return new Promise(function (resolve, reject) {

        return pyshell.on('message', function (message) {
            if (message != "") {
                resolve(message)
            }
            else {
                reject(message)
            }
        })
    })
}

