angular.module('starter.controllers', [])

.controller('ExpenseCtrl', function($scope, Expense) {
	$scope.expense = Expense.all();
	$scope.total = 0;
	
	 $scope.friends =
          [{name:'John', phone:'555-1212', age:10},
           {name:'Mary', phone:'555-9876', age:19},
           {name:'Mike', phone:'555-4321', age:21},
           {name:'Adam', phone:'555-5678', age:35},
           {name:'Julie', phone:'555-8765', age:29}];

	for(var i in $scope.expense) {
		$scope.total = $scope.total + $scope.expense[i].amount;
	}	
	console.log($scope.total);
})

.controller('ExpenseCtrlNew', function($scope, Expense, $state) {
	$scope.expense = {};
	
	$scope.addExpense = function() {
		Expense.add( $scope.expense.name,$scope.expense.amount);
		$state.go('tab.expense');
	};
})

.controller('CashFlowCtrl', function($scope, CashFlow, FlowType) {
	$scope.lists = CashFlow.all();
	
	$scope.isIncome = function(item) {
		var type = FlowType.getByID(item.type);
		if(type==null) {
			return false;
		}else if(type.isIncome){
			return true;
		}else{
			return false;
		}
	}
})

.controller('CashFlowCtrlNew', function($scope, CashFlow, FlowType, $state) {
	$scope.new = {};
	$scope.new.init = function(){
		$scope.new.name = '';
		$scope.new.amount = '';
		$scope.new.category = '';
	}
	
	$scope.new.submit = function() {
		CashFlow.add( $scope.new.category,$scope.new.amount, $scope.new.name);
		$state.go('tab.cashflow');
	};
	
	$scope.categories = FlowType.all();
	console.log($scope.categories);
	$scope.new.init();
});


