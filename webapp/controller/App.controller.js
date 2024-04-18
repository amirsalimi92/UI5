// Controller

sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, MessageToast, JSONModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.App", {
      /**
       * @override
       */
      onInit: function () {
        let oData = {
          recipient: {
            name: "UI5",
          },
        };

        let oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
      },
      onShowHello: function () {
        //Show a vanilla js
        // alert("Hello in alert!");

        MessageToast.show("Hello Toast!");
      },
    });
  }
);
