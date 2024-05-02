sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog",
  ],
  function (UIComponent, JSONModel, ResourceModel, HelloDialog) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        manifest: "json",
      },
      init: function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        // set data models
        let oData = {
          recipient: {
            name: "UI5",
          },
        };
        let oModel = new JSONModel(oData);
        this.setModel(oModel);

        // set dialog
        this._helloDialog = new HelloDialog(this.getRootControl());
      },

      exit: function () {
        this._helloDialog.destroy();
        delete this._helloDialog;
      },

      openHelloDialog: function () {
        this._helloDialog.open();
      },
    });
  }
);

// rootView: {
//   viewName: "sap.ui.demo.view.App",
//   type: "XML",
//   async: true,
//   id: "app",
// },

// //Set i18n Model
// let i18nModel = new ResourceModel({
//   bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
//   supportedLocales: [""],
//   fallbackLocale: "",
// });
// this.setModel(i18nModel, "i18n");
