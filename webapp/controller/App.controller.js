sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";
  return Controller.extend("sap.ui.demo.walkthrough.App", {});
});

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
