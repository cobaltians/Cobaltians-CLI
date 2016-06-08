# cobaltians-cli

Cobaltians-CLI is a node.js command line to build Android and iOS Cobalt projects from an existing template.

More information on Cobalt can be found [here](http://cobaltians.com).

## Install

    npm install cobaltians -g

Using the -g flag installs the package globally, so it can be used in any project. Use sudo if needed.

## Create a project from a template

    cobaltians create myApp HelloWorld

This will create a "myApp" folder and ask if you want to create the corresponding iOS and Android projects.

Available samples are for example "HelloWorld" or "Catalog". Read more about them [here](https://github.com/cobaltians/cobalt/wiki/Samples-list).

If you receive errors about libstdc++ ( e.g `GLIBCXX_3.4.20' not found ) , which are commonly experienced on Linux, you can fix this by upgrading to the latest libstdc++-4.9.


``` sh
sudo add-apt-repository ppa:ubuntu-toolchain-r/test
sudo apt-get update
sudo apt-get install libstdc++-4.9-dev
```

You can open your projects with XCode for iOS and Android Studio for Android.

Be sure to have theses softwares installed and up-to-date SDK, JVM and build tools.

### Choosing a template branch

You can use a fourth argument to the command line to select the branch of the template you want to use.

    cobaltians create MyApp Catalog develop
    

## What next ?


In upcomming releases, this command line tool will be able to :

* Add and remove plugins 
* Add and remove platforms 
* Update itself and check for update automatically
* Install Cobalt to an existing iOS or Android project.

