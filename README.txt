CONTENTS OF THIS FILE ---------------------

 * Introduction * Requirements * Installation * Configuration * Troubleshooting
 * FAQ * Maintainers


INTRODUCTION ------------

LightShip is a minimalist starter theme founded on the tenets of simplicity,
accessibility and infrastructure sustainability. It is created and maintained by
the team at DevCollaborative.com.

LightShip is a subtheme of the Core base theme, Classy. It was designed for D8
but is D9-ready.

Our focus is on long-term sustainability of code, and in baking in semantic and
accessible code wherever we can. Because front-end development tools and
frameworks change so quickly, building a theme with many developer tool
dependencies can make it harder for other developers, or even future you, to
jump back into a front-end codebase down the road.

LightShip does use Sass, with gulp as a taskrunner. The development tools to
support Sass are as light as we could make them, so if you prefer to write
vanilla CSS, fell free to remove gulp and Sass.

The theme has some Sass mixins and structured partials that you can modify,
remove, or rearrange. It's only got four gulp tasks: compile Sass, watch Sass,
delete compiled CSS, and gulp build. Sourcemaps are included in the gulpfile to
help with debugging Sass. Other than that, it's ready for you to write front-end
code.


 * For a full description of the starter theme, visit the project page:
   https://www.drupal.org/project/lightship

 * To submit bug reports and feature suggestions, or track changes:
   https://www.drupal.org/project/issues/lightship


REQUIREMENTS ------------

If you wish to use gulp and Sass to write CSS, the following local development
tools are required:

 * Node: https://nodejs.org/en/download/ * Gulp:
 https://gulpjs.com/docs/en/getting-started/quick-start/

If you have a different local front-end development tool stack that you prefer,
you may replace Node and/or Gulp, or remove them entirely if you wish to write
straight-up CSS without Sass.


INSTALLATION ------------

 * Install as you would normally install a contributed Drupal theme. Visit
   https://www.drupal.org/docs/8/extending-drupal-8/installing-themes for
   further information.


CONFIGURATION -------------

 * Setting Up Your Theme

    - Rename all instances of the theme's machine name lightship in file names
    and in
      files themselves with your theme_name.

      You can do a search/replace on the theme folder in order to do this. Our
      usual convention for the theme's machine name is an organization's
      abbreviation and the year the site's slated to be launched, so for example
      org2019.

 * Setting Up Gulp

    Steps detailed here: https://css-tricks.com/gulp-for-beginners/

    1. Initialize Node Package Manager - npm init

    2. If you have Gulp installed globally (see the CSS Tricks link above for
       instructions), then save it locally to this project with: npm install
       gulp --save-dev

    3. Type npm i to have npm install the dependencies for the project per
       package.json. You should be ready to compile now!

       Gulp Tasks ----------

       gulp sass - compiles sass into CSS

       gulp clean:css - deletes compiled CSS

       gulp watch - watches sass directories for changes and recompiles whenever
       you save a change

       gulp build - simple one time build task

       Adding additional libraries and associated tasks for developer
       convenience may be okay on a particular project, but please check in with
       a team lead before you add them. We are doing our best to reduce
       complexity so that over 2-5 years' time, it's not difficult to reproduce
       this development environment for front-end enhancements or repairs.


FAQ ---

Q: How do I add externally hosted web fonts?

A:
    1. Add a fonts block to the libraries.yml file, like this:

fonts: version: VERSION css:
  theme: https://use.typekit.net/zux5iaj.css: { type: external, minified: true }

    2. Add this top line in the libraries block of the .info.yml file:

libraries:
  - your-theme-name/fonts - your-theme-name/global-styling -
  your-theme-name/global-scripts


Q: How do I customize template files?

A: To override template files, copy Classy template files into the theme's
   "templates" sub-directory.


Q: How about adding regions? Can I add regions?

A: To add new regions to the theme for block placement, add the region to the
   "regions" section of your-theme-name.info.yml, and then add the region to the
   theme's page.html.twig template.


Q: Can I rename or add my own Sass partials?

A: Absolutely, and please do.

   We have partials divided into two folders; (1) base and (2) styles. Ideally
   the base folder should be used for set-it-and-forget-it variables, mix-ins,
   fonts, and fundamental theme elements. Styles is intended to be where your
   the bulk of your CSS customization and base style variants go, where most of
   the CSS magic happens.

   If you have a preferred way to organize and name partials, you do not have to
   use our partials setup; please feel free to do what works for you.

   Don't forget to add or update partials in the custom.scss file manually, so
   that they will compile into CSS properly. You could also add sass-globbing to
   gulp to handle this automatically if you prefer. (Don't forget: if you choose
   to put partials into subfolders, make sure to add the subfolder wildcard path
   to the gulp tasks for sass compiling, watching, and/or globbing.)


Q: Where, oh where, do I put my JavaScript?

A: If you choose to add JavaScript to your theme, it should go into the
   js/custom.js file. If you wish to add modernizr.js, or any other JavaScript
   resource there, remember to add each new JS file to
   your-theme-name.libraries.yml.


MAINTAINERS -----------

Current maintainers: * Johanna Bates - https://www.drupal.org/u/hanpersand *
Steven DuBois - https://www.drupal.org/u/srdtwc * Jeff Hipp -
https://www.drupal.org/u/hipp2bsquare

This project has been sponsored by: * DEVCOLLABORATIVE
   DevCollab builds websites in open source software for nonprofit
   organizations. Our focus is on care and attention to the accessibility and
   sustainability of content, design, and code.
