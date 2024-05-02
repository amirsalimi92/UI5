sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
  ],
  function (Controller, JSONModel, formatter) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
      formatter: formatter,
      onInit: function () {
        let oViewModel = new JSONModel({
          currency: "EURO",
        });
        this.getView().setModel(oViewModel, "view");
      },
    });
  }
);
