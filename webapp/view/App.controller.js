(function() {
	'use strict';

	sap.ui.define(['sap/m/MessageToast','sap/ui/core/mvc/Controller'],
		function (MessageToast, Controller) {
			return Controller.extend("todo.view.App", {
				onInit: function() {
					this.oModel = new sap.ui.model.json.JSONModel({
						contact : {
							name : "John Doe",
							address : {
								door_no : "S2",
								street : "2nd Street, Ravanan Nagar",
								area : "Puzhudhivakkam",
								city : "Chennai",
								country : "India",
								pin : "600091"
							}
						}
					});
					this.getView().setModel(this.oModel);
				},

				clearCompleted: function () {
					MessageToast.show("Bismillah");
				}
			});
		});
})();
