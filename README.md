# cobalt-cli

Cobalt-CLI is a node.js command line to build Android and iOS Cobalt projects from an existing template.

## Cobalt CLI Installation

    npm install cobalt -g

Using the -g flag installs the package globally, so it can be used in any project. Use sudo if needed.

## Create project from the command line

Choose an app name and a base template

    cobalt create MyApp HelloWorld

or
    
    cobalt create MyApp Catalog
    
This will create a MyApp directory and asks if you want to build the corresponding Android and iOS projects.
All subsequent commands need to be run within the project's directory, or any subdirectories within its scope.

    cd myApp

  
## Add Cobalt plugins

    cobalt plugins add "https://github.com/cobaltians/Plugin-Location.git"
    cobalt plugins add ../myOwnPluginPath
    cobalt plugins remove "Plugin-Location"
  

## Add Cobalt to an existing iOS or Android app

    
    cobalt invade ;)

