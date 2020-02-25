# offcanvas menus

> This plugin made with 
>    * Vanilla JavaScript
>    * Css Framwork tailwindCSS (not important)
>    * Sass Preprocessor
>    * Pug template engine
>    * Gulp as task runner
---

###  Required
* nodejs

>
>    visite [Nodejs](http://nodejs.org/) site to install
>

* Gulp in global

```
$ npm install gulp-cli -g

```


### Installation


```
$ cd 'to the folder cloned' 

$ npm i 
or
$ yarn

```



### Developpement Serve

```
$ gulp

```


### Serve the Fully Built & Optimized Site

```
$ gulp build

```
---
Structure on source file
------
> source
>    - assets
>        1. images
>            - close.svg
>            - loader.svg
>        2. styles
>            - main.sass
>            - sass
>               - offcanvas.sass (***minimum style to make the offcanvasMenus work correctly***)
>        3. scripts
>            - app.js
>            - plugins
>               - offcanvasMenu.js
>    - template
>       - index.pug    
>       - offcanvas.pug

How to user
------

### Add link to the files
Add the offcanvas plugin js to the html file

Add the offcanvas plugin css to the html file

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- styles of the offcanvas -->
    <link rel="stylesheet" href="assets/styles/main.css">
    
    <!-- javascript plugin of the offcanvasMenus  -->
    <!-- the offcanvasMenus module is imported in the app.js file -->
    <script src="assets/scripts/app.js" type="module" defer></script>
</head>
<body>
    
</body>
</html>

```
---
### Add link to the files
Minimal html structure

```HTML
<button class="burger"> open sidebar </button>
<aside class='sidenav'>
    <!-- the root element of the offcanvasMenus -->
    
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div>
           ...
          
        </div>
</aside>

```
---

### Init the plugin

Add script tag on html and call the class

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    ...
</head>
<body>
    ...

    <!-- call and init the class -->
    <script>
        // wait until the dom ready
        window.onload = function () {
            // first param class of the btn to open the sidenav
            // seconde param the element to be shown
            new OffCanvaNav('.burger', '.sidenav')
        }
    </script>
</body>
</html>
````
---

##### Version
1.0

##### License
MIT