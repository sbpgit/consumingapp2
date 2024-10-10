sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("consume.consumingapp2.controller.View1", {
        onInit: function () {
            var appPath = window.location.origin;


            // var oComponent = this.getOwnerComponent();
            
            // Create the component instance explicitly
            // oComponent.createComponent({
            //     name: "reuse.reusablecomp",
            //     usage: "locationDetailComponent",
            //     settings: {
                    // You can pass any settings to the component here if necessary
                // }
            // }).then(function(oComponentInstance) {
                // Use the loaded component instance
            //     this.getView().byId("container").setComponent(oComponentInstance);
            // }.bind(this)).catch(function(oError) {
            //     console.error("Error loading component: ", oError);
            // });
            var oViewModel = new sap.ui.model.json.JSONModel({
                LOCATION_ID: ""
            });
            this.getView().setModel(oViewModel, "local");
        },


      
        initComponent: function (sLocationId) {
            if (!this._locationDetailComponent) {
                var oLocationDetailComponent = this.getOwnerComponent()?.createComponent({
                    usage: "locationDetailComponent",
                    settings: {
                        locationId: sLocationId
                    }
                }); 
                oLocationDetailComponent.then(
                    function (oLocationDetail) {
                        
                        oLocationDetail.setLocationId(sLocationId);
                        this.byId("locationDetailContainer")?.setComponent(oLocationDetail);
                        this._locationDetailComponent = oLocationDetail;
                    }.bind(this)
                );
            } else {
                this._locationDetailComponent.setLocationId(sLocationId);
            }
        },
        
        onGo: function (oControlEvent) {
            let sLocationId = this.getView()?.getModel("local")?.getProperty("/LOCATION_ID");
            // let sLocationId = this.byId("idInp").getValue();
            sLocationId && this.initComponent(sLocationId);
        }
    });
});
