/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "consume/consumingapp2/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("consume.consumingapp2.Component", {
            
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);
                // sap.m.URLHelper.redirect("https://vcpprovider-sc0jeojq.launchpad.cfapps.us10.hana.ondemand.com/8f2af2e7-4c29-4fee-a5a0-eef8d064dd3e.reusereusablecomp.reusereusablecomp-0.0.1/");
               
              
                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);