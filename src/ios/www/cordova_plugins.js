cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-toastyplugin.toastyPlugin",
    "file": "plugins/cordova-plugin-toastyplugin/www/toastyplugin.js",
    "pluginId": "cordova-plugin-toastyplugin",
    "clobbers": [
      "window.plugins.toastyPlugin"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-toastyplugin": "0.0.1",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});