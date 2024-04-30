console.log("hey controller");

sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.App", {
      onShowHello: function () {
        //Show a vanilla js
        // alert("Hello in alert!");

        //read message from i18n model
        const oBundle = this.getView().getModel("i18n").getResourceBundle();

        // recipient/name az onInit bala miad!
        const sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");

        let sMsg = oBundle.getText("helloMsg", [sRecipient]);

        // Show the message
        MessageToast.show(sMsg);
      },
    });
  }
);

/**
      // JSONModel, ResourceModel Should be define in function and we have to use override too
      //  */
// onInit: function () {
//   let oData = {
//     recipient: {
//       name: "",
//     },
//   };

//   let oModel = new JSONModel(oData);
//   this.getView().setModel(oModel);

//   // set i18n model on view
//   let i18nModel = new ResourceModel({
//     bundleName: "sap.ui.demo.i18n.i18n",
//     supportedLocales: [""],
//     fallbackLocale: "",
//   });
//   this.getView().setModel(i18nModel, "i18n");
// },
