# cobalt-cli

future is coming.



## Cobalt CLI Installation

    npm install cobalt -g

Using the -g flag installs the package globally, so it can be used in any project. Use sudo if needed.

## Create project from the command line

    cobalt create MyApp HelloWorld
    
    or 
    
    cobalt create MyApp Catalog
    
This command will ask for your reverse-style package name "com.example.myApp"
    
All subsequent commands need to be run within the project's directory, or any subdirectories within its scope:

    cd myAppName

## Enable platforms

    cobalt platform add "iOS"
    cobalt platform add "Android"
    
  
## Add Cobalt plugins

    cobalt plugins add "https://github.com/cobaltians/Plugin-Location.git"
    cobalt plugins add ../myOwnPluginPath
    cobalt plugins remove "Plugin-Location"
  

## Add Cobalt to an existing iOS or Android app
    
    cobalt ....

