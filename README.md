# cobaltians-cli

Cobaltians-CLI is a node.js command line to build Android and iOS Cobalt projects from an existing template.

More information on Cobalt can be found [here](http://cobaltians.com).

## Cobaltians CLI Installation

    npm install cobaltians -g

Using the -g flag installs the package globally, so it can be used in any project. Use sudo if needed.

## Create project from the command line

Choose an app name and a base template

    cobaltians create MyApp HelloWorld

or
    
    cobaltians create MyApp Catalog
    
This will create a MyApp directory and asks if you want to build the corresponding Android and iOS projects inside.

You can open your projects with XCode for iOS and Android Studio for Android.

Be sure to have theses softwares installed and up-to-date SDK, JVM and build tools.

## What next ?


In upcomming releases, this command line tool will be able to :

* Add and remove plugins 
* Add and remove platforms 
* Update itself and check for update automatically
* Install Cobalt to an existing iOS or Android project.

