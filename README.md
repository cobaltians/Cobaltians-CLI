# cobaltians-cli

Cobaltians-CLI is a node.js command line to build Android and iOS Cobalt projects from an existing template.

More information on Cobalt can be found [here](http://cobaltians.com).

## Cobaltians CLI Installation

    npm install cobaltians -g

Using the -g flag installs the package globally, so it can be used in any project. Use sudo if needed.

## Create project from the command line

3) Create your app from a sample

Choose a name and a base sample to create your first app :

    cobaltians create myApp HelloWorld

This will create a "myApp" folder and ask if you want to create the corresponding iOS and Android projects.

Available samples are for example "HelloWorld" or "Catalog". Read more about them [here](https://github.com/cobaltians/cobalt/wiki/Samples-list).

You can open your projects with XCode for iOS and Android Studio for Android.

Be sure to have theses softwares installed and up-to-date SDK, JVM and build tools.

### Choosing a template branch

You can use a fourth argument to the command line to select the branch of the template you want to use.

    cobaltians create MyApp Catalog 0.4.1
    

## What next ?


In upcomming releases, this command line tool will be able to :

* Add and remove plugins 
* Add and remove platforms 
* Update itself and check for update automatically
* Install Cobalt to an existing iOS or Android project.

