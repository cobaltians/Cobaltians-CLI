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
    
  
## Add Cobalt plugins

    cobalt plugins add "https://github.com/cobaltians/Plugin-Location.git"
    cobalt plugins add ../myOwnPluginPath
    cobalt plugins remove "Plugin-Location"
  
  
  
  
  
## Add Cobalt to an existing iOS or Android app
    

