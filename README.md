# cobalt-cli

future is coming.



## Cobalt CLI Installation

First, you will need to install node and npm. On OSX:

    $ brew install node

This assumes you already have Homebrew installed. If not, install it first.

    $ /usr/bin/ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"

Next, install the Cobalt npm package.

    $ npm install handlebars -g

Using the -g flag installs the package globally, so it can be used in any project. Use sudo if needed.

## Create project from the command line

    cobalt create "MyAppName" "templateName"
    
  /*  will ask for "com.example.myApp" */
    
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

