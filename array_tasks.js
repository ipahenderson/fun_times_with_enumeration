var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
	 arr.splice(index, 0, itemToAdd);
	 return arr
 	},

	square: function (arr) {
		return arr.map(function(item){
			return item * item;
		})
	},

	sum: function (arr) {
		var total = arr.reduce(function(value, num){
			return value + num;
		})
		return total;
	},

	findDuplicates: function (arr) {
		// var numCompare = 0;
		var duplicates = [];
		arr.forEach(function(num, index){

			if(arr.indexOf(num, index + 1) > -1){
				if(duplicates.indexOf(num) === -1){
					duplicates.push(num);
				}
			}
		})
		return duplicates;
	},

	removeAndClone: function (arr, valueToRemove) {
		return arr.filter(function(num){
			return num !== valueToRemove;
		})

	},

	// findIndexesOf: function (arr, itemToFind) {
	// 	var indexesArr = arr.filter(function(num, itemToFind) {
	// 		if(num === itemToFind){
	// 			return arr.indexOf(num);
	// 		}
	// 		return indexesArr;
	// 	})
	// },

	findIndexesOf: function (arr, itemToFind) {
		var indexes = [];

		var index = arr.indexOf(itemToFind);
		while (index != -1){
			indexes.push(index);
			index = arr.indexOf(itemToFind, index + 1);
		}
		return indexes
	},





	sumOfAllEvenNumbersSquared: function (arr) {
		var checkArr = [];
		arr.forEach(function(num){
			if (num % 2 == 0){
				checkArr.push(num);
			}
		})
		return this.sum(this.square(checkArr));
	}

}

module.exports = arrayTasks
