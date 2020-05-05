var fs = require('fs');
var path = require('path');


module.exports.getBase64Images = function (req, res) {
    dirpath = path.join(base_directory, 'uploaded');
    var data = []
    fs.readdirSync(dirpath).forEach(file => {
        data.push({
            "previewImageSrc": path.relative(dirpath,path.join(dirpath,file)),
            "thumbnailImageSrc":  path.join(dirpath,file),
            "alt": "Description for Image 1",
            "title": "Title 1"
        })
    });
    res.send({images:JSON.stringify(data)});
}