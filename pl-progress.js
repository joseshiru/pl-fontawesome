(function($) {
    "use strict";

    $.fn.ploading.addOns.fontawesome = function(options) {
        var addOnTask = {};
        var addOnAction = {};
        var $pluginElement = options.pluginElement;
        var pluginSettings = options.pluginSettings;

        addOnTask.defineActions = function() {
            addOnAction.defineMarkup = function() {
                pluginSettings.containerHTML = '<div>';
                pluginSettings.containerClass = 'p-loading-container pl-fontawesome';
                pluginSettings.spinnerClass = '';
                pluginSettings.spinnerHTML = '<i last-icon=""></i>';
            };

            addOnAction.addNewPluginActions = function() {

                options.pluginPublicAction.addIcon = function() {
                    var iconIsEmpty = pluginSettings.icon || pluginSettings.icon === '' ? false : true;
                    var noNewIcon;
                    var $spinner = $pluginElement.find('i');

                    if (iconIsEmpty) {
                        return;
                    }

                    noNewIcon = $spinner.attr('last-icon') === pluginSettings.icon;

                    if (noNewIcon) {
                        return;
                    }

                    $spinner.addClass(pluginSettings.icon);
                }; 

                
            };

            addOnAction.updateOptions = function () {
                options.pluginSettings = pluginSettings;
            };
        };

        addOnTask.initialize = function() {
            addOnTask.defineActions();
            addOnAction.defineMarkup();
            addOnAction.addNewPluginActions();
            addOnAction.updateOptions();
        };

        addOnTask.initialize();

        return options;
    };

})(jQuery);