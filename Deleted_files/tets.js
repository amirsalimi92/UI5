sap.ui.define(["com/xft/tm/task/cbase/controller/Main.controller", "com/xft/ui/model/odata/library", "com/xft/ui/comp/dynamic/library", "com/xft/cm/contract/c01/model/formatter", "com/xft/tm/core/task/library"], function(e, t, a, i, n) {
    "use strict";
    return e.exten +
        d("com.xft.cm.contract.c01.controller.Main", {
                formatter: i,
                onInit: function() {
                    e.prototype.onInit.apply(this, arguments);
                    this._initCMModel();
                    this._bindComponentContent();
                    this._initUI();
                    this.getModel().attachRequestFailed(this.displayError, this)
                },
                onDisplayFrom +
                Error: function() {
                    this.readData()
                },
                _initCMModel: function() {
                    var e = this.getModel();
                    e.setDeferredGroups(["UpdateC01Data", "UpdateC01Check", "batchChecks"]);
                    e.setChangeGroups({
                        C01Data: {
                            groupId: "UpdateC01Data",
                            single: false
                        },
                        C01Check: {
                            groupId: "UpdateC01Check",
                            sin +
                            gle: false
                        }
                    })
                },
                _bindComponentContent: function() {
                        var e = this.getSessionId(),
                            t = this.getCompId(),
                            a = "/C01Set(SessionId='" + window.encodeURIComponent(e) + "',CompId='" + window.encodeURIComponent(t) + "')";
                        this.byId("idComponentMainForm").bindElement({
                                    path: a,
                                    mode: "Two+
                                    Way ",parameters:{expand:"
                                    C01Data,
                                    C01Check,
                                    C01FieldCatSet "}})},onInputChange:function(e){this.updateData()},_initUI:function(){this._getFieldCatalog()},_getFieldCatalog:function(){var e=this.getSessionId(),t=this.getCompId(),a=" / C01Set(SessionId = '"+window+
                                        .encodeURIComponent(e) + "',CompId='" + window.encodeURIComponent(t) + "')/C01FieldCatSet"; this.getModel().read(a, {
                                            filters: [new sap.ui.model.Filter("Hidden", sap.ui.model.FilterOperator.EQ, false), new sap.ui.model.Filter("Tech", sap.ui.model.FilterOperator.EQ, fal +
                                                se), new sap.ui.model.Filter("Field01", sap.ui.model.FilterOperator.NE, "")],
                                            success: function(e) {
                                                this._bindFormContainers(e)
                                            }.bind(this),
                                            error: function() {}
                                        })
                                    },
                                    arrayFind: function(e, t, a) {
                                        if (typeof t === "function" && !a) {
                                            a = t;
                                            t = undefined
                                        }
                                        for (var i in e) {
                                            if (a(e[i], +
                                                    t) === true) {
                                                return e[i]
                                            }
                                        }
                                        return undefined
                                    },
                                    _bindFormContainers: function(e) {
                                        var t = [],
                                            a;
                                        var i = function(e, t) {
                                            return e.Field01 === t
                                        };
                                        var n = false;
                                        for (var o = 0; o < e.results.length; o++) {
                                            n = n || !e.results[o].Readonly;
                                            a = this.arrayFind(t, e.results[o].Field01, i);
                                            if (a) {
                                                co +
                                                    ntinue
                                            }
                                            t.push(e.results[o])
                                        }
                                        t.sort(this.sortArrayByKey("Field01", "asc"));
                                        this.getModel("appProperties").setProperty("/C01FieldCatSet", t);
                                        this.getModel("appProperties").setProperty("/Editable", n)
                                    },
                                    sortArrayByKey: function(e, t) {
                                            t = typeof t !== "undefined" ? t : "a+
                                            sc ";return function a(i,n){if(!i.hasOwnProperty(e)||!n.hasOwnProperty(e)){return 0}var o=typeof i[e]==="
                                            string "?i[e].toUpperCase():i[e];var r=typeof n[e]==="
                                            string "?n[e].toUpperCase():n[e];var s=0;if(o>r){s=1}else if(o<r){s=-1}return t==="
                                            desc "?s*-1:s}},+
                                            factoryFormContainers: function(e, t) {
                                                if (!this._oFormContainer) {
                                                    this._oFormContainer = new sap.ui.layout.form.FormContainer({})
                                                }
                                                var a = this._oFormContainer.clone(this.getView().createId(e));
                                                a.setTitle(t.getObject().Field02);
                                                a.bindAggregation("formElements", {
                                                    p +
                                                    ath: "C01FieldCatSet",
                                                    filters: [new sap.ui.model.Filter("Field01", sap.ui.model.FilterOperator.EQ, t.getObject().Field01), new sap.ui.model.Filter("Tech", sap.ui.model.FilterOperator.EQ, false), new sap.ui.model.Filter("Hidden", sap.ui.model.FilterOperator.EQ, fal +
                                                        se)],
                                                    parameters: {
                                                        operationMode: "Client"
                                                    },
                                                    factory: this.factoryFormElements.bind(this)
                                                });
                                                return a
                                            }, factoryFormElements: function(e, t) {
                                                var i, n = t.getObject(),
                                                    o, r = encodeURIComponent(this.getSessionId()),
                                                    s = encodeURIComponent(this.getCompId()),
                                                    d = t.getProperty("N+
                                                        ame "),l=" / C01Set(SessionId = '"+r+"', CompId = '"+s+"')
                                                        ",p=l+" / C01CSubTypeSet ",u=l+" / C01Data / "+t.getProperty("
                                                        Name ");o=new sap.ui.layout.form.FormElement(e,{label:new sap.m.Label({text:t.getProperty("
                                                        TextL "),required:n.Mandatory}),fields:[]});var c;if(e.split+
                                                        ("-").pop() === "0") {
                                                        c = false;
                                                        this.getModel("appProperties").setProperty("/Editable", c)
                                                    } else {
                                                        c = this.getModel("appProperties").getProperty("/Editable")
                                                    }
                                                if (!n.Readonly && !c) {
                                                    this.getModel("appProperties").setProperty("/Editable", true)
                                                }
                                                if (n.Fieldname === "CSUBTYP+
                                                    E "||n.Fieldname==="
                                                    USER_RESPONSIBLE "||n.Fieldname==="
                                                    ORGU_RESPONSIBLE "||n.Fieldname==="
                                                    C_LANGUAGE "){if(n.Readonly&&!this.getModel("
                                                    appProperties ").getProperty(" / Editable ")){u=u+"
                                                    Descr "}}n.Mandatory=false;i=a.getControlByFieldCatalog(n,{bindingPath:u,vali+
                                                    dationSuccess: this.onInputValidationSuccess.bind(this), change: this.onInputChange.bind(this), parseAsString: false, hideTechnicals: true, UTC: true, displayMode: n.Readonly
                                                }, this);
                                            if (n.Fieldname === "CSUBTYPE") {
                                                if (n.Readonly) {
                                                    var f = new sap.ui.layout.HorizontalLayou +
                                                        t({});
                                                    var m = new sap.m.Text({
                                                        text: {
                                                            path: u + "Descr"
                                                        }
                                                    }).addStyleClass("sapUiTinyMarginBegin");
                                                    f.addContent(i);
                                                    f.addContent(m);
                                                    i = f
                                                } else {
                                                    i = new sap.m.Select({
                                                        selectedKey: {
                                                            path: u
                                                        },
                                                        change: this.onInputChange.bind(this),
                                                        showSecondaryValues: true,
                                                        items: {
                                                            path: p,
                                                            templa +
                                                            te: new sap.ui.core.Item({
                                                                key: "{Csubtype}",
                                                                text: "{Description}"
                                                            })
                                                        }
                                                    })
                                                }
                                            }
                                            var h;
                                            if (typeof i.getEditable === "function" && i.getEditable()) {
                                                h = "/C01CheckSet(SessionId='" + r + "',CompId='" + s + "')/" + d;
                                                if (typeof i.setValueState === "function") {
                                                    i.bindProperty("valueState", {
                                                        p +
                                                        ath: h + "State",
                                                        formatter: this.formatterValueState,
                                                        mode: sap.ui.model.BindingMode.OneWay
                                                    })
                                                }
                                                if (typeof i.setValueStateText === "function") {
                                                    i.bindProperty("valueStateText", {
                                                        path: h + "Message",
                                                        mode: sap.ui.model.BindingMode.OneWay
                                                    })
                                                }
                                            }
                                            o.addField(i);
                                            if (n.Fieldname === "+
                                                CSUBTYPE_DESCR "){o.setVisible(false)}return o},onInputValidationSuccess:function(e){this.updateData()},refresh:function(e){this.getModel().refresh();this.getModel().updateBindings(true);this._initUI()},nestedActionRead:function(e,t,a){this.readData(a)},n+
                                                estedActionUpdate: function(e, t, a) {
                                                    this.updateData(a)
                                                }, updateData: function(e) {
                                                    var a = e;
                                                    var i = this.getModel("i18n").getResourceBundle(),
                                                        o = this.getModel();
                                                    t.submitChanges(o, null, "v2").then(e => {
                                                        if (!e.error) {
                                                            this.readData(a, true);
                                                            this.triggerNestedContentEvent +
                                                                (n.nestedEventKey.App.Message.Read, {})
                                                        } else {
                                                            if (a) {
                                                                a({
                                                                    allowed: false,
                                                                    messages: [i.getText("ODataError")]
                                                                })
                                                            }
                                                        }
                                                    }).catch(e => {
                                                        if (a) {
                                                            a({
                                                                allowed: false,
                                                                messages: [e.messages[0].message]
                                                            })
                                                        }
                                                    })
                                                }, readData: function(e, t) {
                                                    var a = e;
                                                    var i = this.getSessionId(true),
                                                        n = this.getCom +
                                                        pId(true),
                                                        o = "/C01Set(SessionId='" + i + "',CompId='" + n + "')",
                                                        r = "C01Data,C01Check";
                                                    if (!t) {
                                                        r = r + ",C01FieldCatSet"
                                                    }
                                                    this.getModel().read(o, {
                                                        urlParameters: {
                                                            $expand: r
                                                        },
                                                        success: function() {
                                                            if (a) {
                                                                a({
                                                                    allowed: true,
                                                                    messages: []
                                                                })
                                                            }
                                                        },
                                                        error: function(e) {
                                                            if (a) {
                                                                a({
                                                                    allowed: false,
                                                                    +
                                                                    messages: ["Error"]
                                                                })
                                                            }
                                                        }.bind(this)
                                                    })
                                                }, formatterValueState: function(e) {
                                                    var t;
                                                    switch (e) {
                                                        case "sap.ui.core.ValueState.Error":
                                                        case "Error":
                                                            t = "Error";
                                                            break;
                                                        case "sap.ui.core.ValueState.Information":
                                                        case "Information":
                                                            t = "Information";
                                                            break;
                                                        case "sap.ui.core.ValueSta+
                                                        te.Success ":case"
                                                        Success ":t="
                                                        Success ";break;case"
                                                        sap.ui.core.ValueState.Warning ":case"
                                                        Warning ":t="
                                                        Warning ";break;case"
                                                        sap.ui.core.ValueState.None ":case"
                                                        None ":t="
                                                        None ";break;default:t="
                                                        None "}return t}})});