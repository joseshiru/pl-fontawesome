( function( $ ) {
    "use strict";

    $.fn.ploading.addOns.plfontawesome = function( api ) {
        var addOnTask = {};
        var addOnAction = {};
        var pluginName = 'plfontawesome';
        var $pluginElement = api.$pluginElement;
        var pluginSettings = api.pluginSettings;
        var pluginPrivateActions = api.pluginPrivateAction;

        addOnTask.defineActions = function() {
            addOnAction.defineMarkup = function() {
                pluginSettings.containerHTML = "<div>";
                pluginSettings.containerClass = "p-loading-container pl-progress-spinner-container";
                pluginSettings.spinnerClass = "pl-fontawesome-spinner";
                pluginSettings.spinnerHTML = '<i last-icon></i>'
            };

            addOnAction.addIcon = function() {
                if ( !api.pluginSettings.icon ) {
                    return;
                }
                
                var $spinner = $pluginElement.find( ".pl-fontawesome-spinner");
                var lastIcon = $spinner.attr('last-icon');
                var isTheSameIcon = lastIcon && lastIcon ===  api.pluginSettings.icon;                    

                if ( isTheSameIcon ) {
                    return;
                } else if ( lastIcon ) {
                    $spinner.removeClass( lastIcon );
                }

                $spinner.addClass( api.pluginSettings.icon );
                $spinner.attr('last-icon', api.pluginSettings.icon);                
            };

            addOnAction.addColor = function() {
                if ( !api.pluginSettings.fontColor ) {
                    return;
                }
                
                var $spinner = $pluginElement.find( ".pl-fontawesome-spinner");
                var lastColor = $spinner.attr('last-color');
                var isTheSameColor = lastColor && lastColor ===  api.pluginSettings.fontColor;                    

                if ( isTheSameColor ) {
                    return;
                }

                $spinner.css( 'color', api.pluginSettings.fontColor );
                $spinner.attr('last-color', api.pluginSettings.fontColor);                
            };

            addOnAction.runAddOn = function() {
                addOnAction.addIcon();
                addOnAction.addColor();
            };

            addOnAction.handleEvents = function () {
                pluginPrivateActions.events.off('pl:spinner:show.' + pluginName + '.runAddOn').on('pl:spinner:show.' + pluginName + '.runAddOn', addOnAction.runAddOn)
            };

            addOnAction.updateApi = function() {
                api.pluginSettings = pluginSettings;
            };
        };

        addOnTask.initialize = function() {
            addOnTask.defineActions();
            addOnAction.defineMarkup();
            addOnAction.handleEvents();
            addOnAction.updateApi();
        };

        addOnTask.initialize();

        return api;
    };

} )( jQuery );
