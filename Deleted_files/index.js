// sap.ui.define(["sap/m/Text"], function (Text) {
//   "use strict";
//   new Text({
//     text: "Hello World",
//   }).placeAt("content");

//   console.log("Hey");
// });

// Without Component
// sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
//   "use strict";
//   XMLView.create({
//     viewName: "sap.ui.demo.view.App",
//   }).then(function (oView) {
//     oView.placeAt("content");
//   });
// });

// With component
sap.ui.define(
  ["sap/ui/core/ComponentContainer"],
  function (ComponentContainer) {
    "use strict";

    new ComponentContainer({
      name: "sap.ui.demo.walkthrough",
      settings: {
        id: "walkthrough",
      },
      async: true,
    }).placeAt("content");
  }
);
