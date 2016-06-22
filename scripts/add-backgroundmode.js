var fs    = require('fs');     // nodejs.org/api/fs.html
var plist = require('plist');  // www.npmjs.com/package/plist

var FILEPATH = 'platforms/ios/HelloCordova/HelloCordova-Info.plist';

module.exports = function (context) {

    var xml = fs.readFileSync(FILEPATH, 'utf8');
    var obj = plist.parse(xml);

    obj.UIBackgroundModes = '<array><string>location</string></array>';

    xml = plist.build(obj);
    fs.writeFileSync(FILEPATH, xml, { encoding: 'utf8' });

};
