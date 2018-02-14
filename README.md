# Bootstrap 4.0.0 starter theme for SilverStripe 4.x

##### This is [Bootstrap 4](https://v4-alpha.getbootstrap.com/) starter theme for [SilverStripe](http://silverstripe.org/) built by [Darjan Pezer](mailto:darjan@pezer.eu).
###### Version: 2.2

![Bootstrap 4.0 theme for SilverStripe 4](https://raw.githubusercontent.com/dpezer/ss-bs/master/ss-bs.png)

### Requirements
* [SilverStripe](http://silverstripe.org/) 4.0 or above (both framework and cms)
* [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/package/plugin) (Node is used for dev tasks such as compiling sass, bundling and minifying js, etc. Npm is used for package management for node components.)
* [Gulp](http://gulpjs.com/) (install gulp with command `npm install -g gulp`)

### Theme includes
* [Bootstrap](https://v4-alpha.getbootstrap.com/) v4.0.0 (Sass source files)
* [jQuery](https://jquery.com/) 3.3.1
* [Popper.js](https://jquery.com/) 1.12.9

### Installation Instructions

 * Install with composer `composer require dpezer/ss-bs` or ...

 * ... copy the theme into the `themes/` directory of your SilverStripe project.  If you've named it correctly, there should be a directory called `themes/ss-bs/templates`.

 * Add the following to your `mysite/_config/theme.yml` file.
    
    ```yaml
    ---
    Name: mytheme
    ---
    SilverStripe\View\SSViewer:
      themes:
        - 'ss-bs'
        - '$default'
    ```


* Add the following to your `mysite/code/PageController.php` file inside `init()` function:

    ```php
    Requirements::combine_files(
      'scripts.combined.js',
      array(
        'themes/ss-bs/javascript/jquery/jquery-3.3.1.js',
        'themes/ss-bs/javascript/popper/popper.js',
        'themes/ss-bs/javascript/bootstrap/bootstrap.js'
      )
    );
    ```

### Compiling CSS

* Install all required npm plugins with `npm install` command
* Run command `gulp watch` inside `npm` folder
* Put your CSS/SCSS files into `themes/ss-bs/sass/` and import them in `themes/ss-bs/sass/style.scss`
