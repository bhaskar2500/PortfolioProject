var fs = require('fs');
var path = require('path');
const modulePath = path.join(__dirname, 'components', 'module');
const module_loader = 'conf.json';

self = {}
moduleList = {}
var regRoutes = function (moduleName, baseDir, ) {
    routeMiddleWares.push(require(path.join(baseDir,'route.js'))) ;
    
}

var modules = fs.readdirSync(modulePath);
for (var i in modules) {
    var dir = path.join(modulePath, modules[i]);
    var filePath = path.join(dir, module_loader);
    if (fs.existsSync(filePath)) {
        var module = require(filePath);
        module.base_dir = dir;
        moduleList[module.name] = module;
        regRoutes(module.name,dir,module.expose)
    }
}
// regRoutes(moduleList)

module.exports = routeMiddleWares