/**
 * Created by baptistejamin on 09/05/15.
 */

var fs = require('fs-extra');
var path = require('path');

function renameFilesRecursively(dir, oldString, newString) {
    var files = fs.readdirSync(dir),
      f,
      fileName,
      path,
      newPath,
      file;

    for (f = 0; f < files.length; f += 1) {
        fileName = files[f];
        path = dir + '/' + fileName;
        file = fs.statSync(path);
        newPath = path.replace(oldString, newString);
        fs.renameSync(path, newPath);
        if (file.isDirectory()) {
            renameFilesRecursively(newPath, oldString, newString);
        }
    }
}

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
    try {
        fs.renameSync(path.normalize(folder + '/' + templateName + '.xcworkspace'), path.normalize(folder + '/' + appName + '.xcworkspace'));
    } catch (e) {
    }

    //mv appName/HelloWorld/HelloWorldViewController.m appName/appName/appNameViewController.m
    //mv appName/HelloWorld/HelloWorldViewController.h appName/appName/appNameViewController.h
    try {
        fs.renameSync(path.normalize(folder + '/' + appName + '/' + templateName + 'ViewController.m'),
          path.normalize(folder + '/' + appName + '/' + appName + 'ViewController.m'));
    } catch (e) {
    }
    try {
        fs.renameSync(path.normalize(folder + '/' + appName + '/' + templateName + 'ViewController.h'),
          path.normalize(folder + '/' + appName + '/' + appName + 'ViewController.h'));
    } catch (e) {
    }


    //mv appName/HelloWorld/HelloWorld-Prefix.pch appName/appName/appName-Prefix.pch
    try {
        fs.renameSync(path.normalize(folder + '/' + appName + '/' + templateName + '-Prefix.pch'),
          path.normalize(folder + '/' + appName + '/' + appName + '-Prefix.pch'));
    } catch (e) {
    }
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

    //first rename all folders and files
    renameFilesRecursively(folder, templateName, appName);
    renameFilesRecursively(folder, templateName.toLowerCase(), appName.toLowerCase());

    //then replace occurences in files
    replace({
        regex: templateName,
        replacement: appName,
        paths: [path.normalize(folder)],
        recursive: true,
        silent: true
    });

    replace({
        regex: templateName.toLowerCase(),
        replacement: appName.toLowerCase(),
        paths: [path.normalize(folder)],
        recursive: true,
        silent: true
    });

};