Introduction
-----------
Hello! This codebase is starter theme code for Drupal 8, by the team at DevCollaborative (DevCollaborative.com).
This is a sub-theme of the core base theme, Classy. 


Setting Up Gulp 
--------
Rename all instances of the theme's machine name devcollab_starter in file names and in files themselves with your theme_name. 
You can do a search/replace on the theme folder in order to do this. 
Our usual convention for the theme's machine name is an organization's abbreviation and the year the site's slated to be launched, so for example org2019.


Setting Up Gulp 
--------

Steps detailed here: https://css-tricks.com/gulp-for-beginners/

  1. Initialize Node Package Manager - npm init
  This will generate a package-lock.json file, which *should* be committed in Git.

  2. If you have Gulp installed globally (see CSS Tricks for instructions), then save it locally to this project with: 
  npm install gulp --save-dev

  3. Type 
  npm i 
  to have npm install the dependencies for the project per package.json. You should be ready to compile now!


Gulp Tasks
--------

gulp sass - compiles sass into CSS

gulp clean:css - deletes compiled CSS

gulp watch - watches sass directories for changes and recompiles whenever you save a change


Adding Externally Hosted Custom Fonts 
--------
To add an external CSS file for Google or Adobe Fonts (formerly Typekit):

1. Add a fonts block to the libraries.yml file, like this: 

  fonts:
  version: VERSION
  css:
    theme:
      https://use.typekit.net/zux5iaj.css: { type: external, minified: true } 

2. Add this top line in the libraries block of the .info.yml file:

libraries:
  - your-theme-name/fonts
  - your-theme-name/global-styling
  - your-theme-name/global-scripts

3. Profit! 


Templates
--------
To override template files, copy Classy template files into the theme's "templates" sub-directory.


Adding Regions
--------
To add new regions to the theme for block placement, add the region to the "regions" section of your-theme-name.info.yml, and then add the region to the theme's page.html.twig template. 


Questions?
--------
Email Johanna Bates at johanna@devcollaborative.com with questions. 
 