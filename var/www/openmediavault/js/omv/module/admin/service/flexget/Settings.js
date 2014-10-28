Ext.define("OMV.module.admin.service.flexget.Settings", {
    extend: "OMV.workspace.form.Panel",
    
    // This path tells which RPC module and methods this panel will call to get 
    // and fetch its form values.
    rpcService: "Flexget",
    rpcGetMethod: "getSettings",
    rpcSetMethod: "setSettings",
    // getFormItems is a method which is automatically called in the 
    // instantiation of the panel. This method returns all fields for 
    // the panel.
    getFormItems: function() {
        return [{
            // xtype defines the type of this entry. Some different types
            // is: fieldset, checkbox, textfield and numberfield. 
            xtype: "fieldset",
            title: _("General"),
            fieldDefaults: {
                labelSeparator: ""
            },
            // The items array contains items inside the fieldset xtype.
            items: [{
                xtype: "checkbox",
                // The name option is sent together with is value to RPC
                // and is also used when fetching from the RPC.
                name: "enable",
                fieldLabel: _("Enable"),
                // checked sets the default value of a checkbox.
                checked: false
            },
            {
                xtype: "textarea",
                name: "config",
                fieldLabel: _("Config.yml"),
                height: 500,
                allowBlank: true
            },
            {
                xtype: "text",
                name: "Series",
                fieldLabel: _("Series"),
                height: 200,
		rpcMethod: "getRaidInfo"
            }]
        }];
    }
});
// Register a panel into the GUI.
//
// path: 
//     We want to add the panel in our flexget node. 
//     The node was configured with the path /service and the id flexget.
//     The path is therefore /service/flexget.
//
// className: 
//     The panel which should be registered and added (refers to 
//     the class name).
OMV.WorkspaceManager.registerPanel({
    id: "settings", 
    path: "/service/flexget", 
    text: _("Settings"), 
    position: 10,
    className: "OMV.module.admin.service.flexget.Settings" 
});
