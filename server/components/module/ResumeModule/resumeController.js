var PythonUtility = require("../../utility/PythonUtility");
var fs = require('fs');
var path = require('path')
module.exports.getNavBarDetails = function (req, res) {
    var data = {
        items: [
            { label: 'Home', icon: 'pi pi-fw pi-home' },
            { label: 'Projects', icon: 'pi pi-fw pi-calendar' },
            { label: 'Resume', icon: 'pi pi-fw pi-pencil' },
            { label: 'Documentation', icon: 'pi pi-fw pi-file' },
            { label: 'Settings', icon: 'pi pi-fw pi-cog' }
        ]
    }
    res.send(JSON.stringify({ 'data': data }));
}



module.exports.getResumeData = function (req, res) {
    var data = fs.readFileSync(path.join(base_directory,'resume.txt'))
    res.send(JSON.stringify({ 'data': data.toString() }));
}

module.exports.getSummarizedData = function (req, res) {
    var textToSummarize = req.body["data"];
    return PythonUtility.summarizeData(textToSummarize).then((message) => {
        res.send(JSON.stringify({ 'summarizedText': message }))
    });
}
