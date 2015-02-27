angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Expense', function(){
	var expense = [];
	expense = JSON.parse(localStorage.getItem('expense_data')) || [];
	
	return {
		all : function () {
			return expense;
		},
		
		add: function(name, amount) {
			expense.push({
				name : name,
				amount : amount,
				created_at : new Date()
			});
			
			this.save();
		},	
		
		save:function() {
			localStorage.setItem('expense_data', JSON.stringify(expense));
		}
	}
})
 
 
.factory('CashFlow', function(){

	var cashFlow = [];
	
	cashFlow = JSON.parse(localStorage.getItem('cashFlow')) || [];
	
	
	return {
		all: function(){
			return cashFlow
		},
		add: function(type, amount, description) {
	
			cashFlow.splice(0,0,{
				type : type,
				amount : amount,
				description : description,
				created_at : new Date()
			});
			
			this.save();
		},
		save:function() {
			localStorage.setItem('cashFlow', JSON.stringify(cashFlow));
		}
	};
 
})


.factory('FlowType', function(){

	var type = {
		'salary' : {
		name: 'Salary',
		description: '',
		isIncome: true
	},
		'food' : {
		name: 'Food',
		description: '',
		isIncome: false
		}
	};
 
	 return {
		getByID: function (id) {
			if( type.hasOwnProperty(id) ){
					return type[id];
				} else {
					return null;
				}
		},
		all:function() {
			return type
		}
	};
 
});