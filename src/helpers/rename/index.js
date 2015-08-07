/**
 * Created by baptistejamin on 09/05/15.
 */

var fs = require('fs-extra');
var path = require('path');

module.exports.iosProject = function (folder, templateName, appName) {

    var replace = require("replace");

    //First, let's replace occurences in files
    replace({
        regex: templateName,
        replacement: appName,
        paths: [path.normalize(folder)],
        recursive: true,
        silent: true
    });

    replace({
        regex: "com." + templateName,
        replacement: "com." + appName,
        paths: [path.normalize(folder)],
        recursive: true,
        silent: true
    });

    //mv HelloWorld myApp
    fs.renameSync(path.normalize(folder + '/' + templateName + '/'), path.normalize(folder + '/' + appName + '/'));

    //mv HelloWorld.xcodeproj myApp.xcodeproj
    fs.renameSync(path.normalize(folder + '/' + templateName + '.xcodeproj'), path.normalize(folder + '/' + appName + '.xcodeproj'));

    //mv HelloWorld.xcworkspace myApp.xcworkspace
    fs.renameSync(path.normalize(folder + '/' + templateName + '.xcworkspace'), path.normalize(folder + '/' + appName + '.xcworkspace'));

    //mv appName/HelloWorld/HelloWorld-Prefix.pch appName/appName/appName-Prefix.pch
    fs.renameSync(path.normalize(folder + '/' + appName + '/' + templateName + '-Prefix.pch'),
        path.normalize(folder + '/' + appName + '/' + appName + '-Prefix.pch'));

    //mv appName/HelloWorldTests appName/myAppTests
    //fs.renameSync(folder + '/' + templateName + 'Tests', folder + '/' + appName + 'Tests');

    try {
        //Catalog - Info.plist
        fs.renameSync(path.normalize(folder + '/' + appName + '/' + templateName + "-Info.plist"),
            path.normalize(folder + '/' + appName + '/' + appName + "-Info.plist"));
    } catch (e) {
    }

    try {
        fs.renameSync(path.normalize(folder + '/' + templateName + 'Tests'), path.normalize(folder + '/' + appName + 'Tests'));
    } catch (e) {
    }

    try {
        //mv appName/myAppTests/HelloWorldTests.m appName/myAppTests/myAppTests.m
        fs.renameSync(path.normalize(folder + '/' + appName + 'Tests' + '/' + templateName + 'Tests.m'),
            path.normalize(folder + '/' + appName + 'Tests' + '/' + appName + 'Tests.m'));
    } catch (e) {
    }

};

module.exports.androidProject = function (folder, templateName, appName) {

    var replace = require("replace");

    //First, let's replace occurences in files
    replace({
        regex: templateName,
        replacement: appName,
        paths: [path.normalize(folder)],
        recursive: true,
        silent: true
    });

    replace({
        regex: "com.cobaltians." + templateName.toLowerCase(),
        replacement: "com." + appName.toLowerCase(),
        paths: [path.normalize(folder)],
        recursive: true,
        silent: true
    });

    fs.renameSync(path.normalize(folder + '/' + templateName), path.normalize(folder + '/' + appName));

    fs.renameSync(path.normalize(folder + '/' + appName + '/src/main/java/com/cobaltians/' + templateName.toLowerCase()),
        path.normalize(folder + '/' + appName + '/src/main/java/com/' + appName.toLowerCase()));

    fs.renameSync(folder + '/' + appName + '/src/main/java/com/' + appName + '/' + templateName + 'Application.java',
        folder + '/' + appName + '/src/main/java/com/' + appName + 'Application.java');

    replace({
        regex: templateName + 'Application.java',
        replacement: appName + 'Application.java',
        paths: [path.normalize(folder)],
        recursive: true,
        silent: true
    });

};