/**
 * Created by baptistejamin on 09/05/15.
 */

var fs = require('fs');

module.exports.iosProject = function (path, templateName, appName) {

    var replace = require("replace");

    //First, let's replace occurences in files
    replace({
        regex: templateName,
        replacement: appName,
        paths: [path],
        recursive: true,
        silent: true
    });

    replace({
        regex: "com.cobaltians",
        replacement: "com",
        paths: [path],
        recursive: true,
        silent: true
    });

    //mv HelloWorld myApp
    fs.renameSync(path + '/' + templateName + '/', path + '/' + appName + '/');

    //mv HelloWorld.xcodeproj myApp.xcodeproj
    fs.renameSync(path + '/' + templateName + '.xcodeproj', path + '/' + appName + '.xcodeproj');


    //mv appName/HelloWorld/HelloWorld-Prefix.pch appName/appName/appName-Prefix.pch
    fs.renameSync(path + '/' + appName + '/' + templateName + '-Prefix.pch', path + '/' + appName + '/' + appName + '-Prefix.pch');

    //mv appName/HelloWorldTests appName/myAppTests
    //fs.renameSync(path + '/' + templateName + 'Tests', path + '/' + appName + 'Tests');

    try {
        //Catalog - Info.plist
        fs.renameSync(path + '/' + appName + '/' + templateName + "-Info.plist", path + '/' + appName + '/' + appName + "-Info.plist");
        fs.renameSync(path + '/' + templateName + 'Tests', path + '/' + appName + 'Tests');

        //mv appName/myAppTests/HelloWorldTests.m appName/myAppTests/myAppTests.m
        fs.renameSync(path + '/' + appName + 'Tests' + '/' + templateName + 'Tests.m',
            path + '/' + appName + 'Tests' + '/' + appName + 'Tests.m');
    } catch (e) {
    }
};