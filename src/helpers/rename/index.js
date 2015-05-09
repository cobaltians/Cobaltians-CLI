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
        regex: "com." + templateName,
        replacement: "com." + appName,
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
    } catch (e) {
    }

    try {
        fs.renameSync(path + '/' + templateName + 'Tests', path + '/' + appName + 'Tests');
    } catch (e) {
    }

    try {
        //mv appName/myAppTests/HelloWorldTests.m appName/myAppTests/myAppTests.m
        fs.renameSync(path + '/' + appName + 'Tests' + '/' + templateName + 'Tests.m',
            path + '/' + appName + 'Tests' + '/' + appName + 'Tests.m');
    } catch (e) {
    }
};

module.exports.androidProject = function (path, templateName, appName) {

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
        regex: "com.cobaltians." + templateName.toLowerCase(),
        replacement: "com." + appName.toLowerCase(),
        paths: [path],
        recursive: true,
        silent: true
    });

    fs.renameSync(path + '/' + templateName, path + '/' + appName);

    fs.renameSync(path + '/' + appName + '/src/main/java/com/cobaltians/' + templateName.toLowerCase(),
        path + '/' + appName + '/src/main/java/com/' + appName.toLowerCase());

    fs.renameSync(path + '/' + appName + '/src/main/java/com/' + appName + '/' + templateName + 'Application.java',
        path + '/' + appName + '/src/main/java/com/' + appName + 'Application.java');

    replace({
        regex: templateName + 'Application.java',
        replacement: appName + 'Application.java',
        paths: [path],
        recursive: true,
        silent: true
    });
};