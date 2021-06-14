sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/ObjectAttribute"
], function(Controller, ObjectAttribute) {
    'use strict';
    return Controller.extend( "product.controller.productList",{
        onInit:function(){

        },
        productListFactory: function(sId, oContext) {
            var oUIControl = this.byId("productSimple").clone(sId);
            return oUIControl;
        },
        onItemSelected:function(oEvent){
            oSelectedItem = oEvent.getSource();
            var oContext = oSelectedItem.getBindingContext("products");
            var sPath = oContext.getPath();
        }


    });
    
});