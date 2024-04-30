sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        manifest: "json",
      },
      init: function () {
        //call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);

        //set data model
        let oData = {
          recipient: {
            name: "",
          },
        };

        //Set onto View
        let oModel = new JSONModel(oData);
        this.setModel(oModel);
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
