## Documentation

### Quick start

We provide compiled CSS and JS (pl-fontawesome.*), as well as compiled and minified CSS and JS (pl-fontawesome.min.*).

Start including the pl-fontawesome.js after the p-loading script:

```
 <!-- jQuery -->
<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.1.min.js"></script>

<!-- P-Loading JS -->
<script type="text/javascript" src="dist/js/p-loading.min.js"></script>

<!-- Pl-fontawesome JS -->
<script type="text/javascript" src="dist/js/pl-fontawesome.min.js"></script>
```

Then include the CSS file after the P-loading CSS file:

```
<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

<link rel="stylesheet" type="text/css" href="dist/css/p-loading.min.css" />

<link rel="stylesheet" type="text/css" href="dist/css/pl-fontawesome.min.css" />
```

Or by just installing it through NPM (works in Meteor as well):
``` npm install pl-fontawesome```

Important: the Fontawesome resources are not included as many people use different ways how to implement it (CDN, etc). For this case we'll include the files by using a CDN.

##### New Settings

Property              | Description       | Default value
-------------         | -------------     | -------------
icon         | The CSS classes names of the Fontawesome icon to display  | ""
fontColor         | Desired color to use (rgba/rgb/hex)  | "#ffffff"


### Actions
This add-on is not adding any new action P-Loading.

##### Show loading mask with a rotating spinner
Use this for show the loading mask in the selected jQuery element.
This will create all the markup and show the loading mask. 
```
$('#test').ploading({action: 'show', icon: 'fa fa-spin fa-spinner', useAddOns: ['plfontawesome']});
```

##### Update the icon.
Use this for update the icon displayed the loading mask.
By just  updating the icon property to new icon we want, is all we need to do. 
```
$('#test').ploading({action: 'show', icon: 'fa fa-spin fa-bomb', useAddOns: ['plfontawesome']});
```

*Note: for avoid the constant definition of the useAddOns property, you can set it in the public settings of p-loading. `$.fn.ploading.defaults`*
