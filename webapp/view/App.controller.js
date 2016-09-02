(function() {
	'use strict';

	sap.ui.controller('todo.view.App', {

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

		addTodo: function() {
			var aTodos = this.oModel.getObject('/todos');
			aTodos.unshift({
				title: this.oModel.getProperty('/newTodo'),
				completed: false
			});
			this.oModel.setProperty('/newTodo', '');
			this.oModel.refresh();
		},

		toggleCompleted: function(oEvent) {
			var iCompletedCount = 0;
			var aTodos = this.oModel.getObject('/todos');
			var i = aTodos.length;
			while (i--) {
				var oTodo = aTodos[i];
				if (oTodo.completed) {
					iCompletedCount++;
				}
			}
			this.setCompletedCount(iCompletedCount);
			this.oModel.refresh();
		},

		clearCompleted: function(oEvent) {
			var aTodos = this.oModel.getObject('/todos');
			var i = aTodos.length;
			while (i--) {
				var oTodo = aTodos[i];
				if (oTodo.completed) {
					aTodos.splice(i, 1);
				}
			}
			this.setCompletedCount(0);
			this.oModel.refresh();
		},

		setCompletedCount: function(iCount) {
			this.oModel.setProperty('/completedCount', iCount);
			this.oModel.setProperty('/someCompleted', iCount > 0);
			this.oModel.refresh();
		}

	});

})();
