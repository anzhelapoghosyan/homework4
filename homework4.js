//1. Use While loop to create a function called 'triangleStars' that prints an upside-down 
//triangle to the console of the given height.
const printThis = function(str, num) {
	if(num === 0) {
		return "";
	}
	return str + printThis(str, num-1);
};

const triangleStars = function(num) {
	let numSpaces = 0;
	while(num > 0) {
		console.log(printThis(' ', numSpaces) + printThis('*', (2*num)-1));
		num--, numSpaces++;
	}
};

triangleStars(5);


//2. Write a function that takes a two dimensional array and returns a single array 
//with all the values in the child arrays.
//Example:  multiToSingle([[1, 2, 3], [4, 5, 6]]);  // will return [1, 2, 3, 4, 5, 6]

const miacru = function(arr) {
	debugger;
	let index1 = 0
	const index2 = 0
    const index3 = 1
    let index4 = 0
	let verjnakan = []
	let indexV = 0

	while (index1<arr[index2].length) {
		verjnakan[indexV] = arr[index2][index1]
		indexV++
		index1++	
	}
	while(index4<arr[index3].length) {
		verjnakan[indexV] = arr[index3][index4]
		indexV++
		index4++
	}
	return verjnakan
};
console.log(miacru([[1,2,3],[4,5,6]]));

//3. Create a function 'findMinMax' that returns the largest number from the given array if the second argument is true.  It returns the smallest number in the given array if the second argument is false.

//Example: findMinMax([4, 2, 66, -44, 8], true); // should return 66
//Example: findMinMax([4, 2, 66, -44, 8], false); // should return -44

const findMin = function(arr) {
	let index = 0;
    let smallest = arr[index];
    while(index < arr.length){
    if(arr[index] < smallest){
      smallest = arr[index];
    }
    index++;
  }
  return smallest;
};

const findMax = function(arr) {
	let index = 0;
    let biggest = arr[index];
    while(index < arr.length){
      if(arr[index] > biggest){
      biggest = arr[index];
    }
    index++;
  }
  return biggest;
};

const findMinMax = function(arr,condition) {
	debugger;
	let answer = 0
	if (condition === true){
		answer = findMax(arr)
	} else if (condition === false) {
		answer = findMin(arr)
	}
	return answer
};
console.log(findMinMax([6,5,2,7,4,1],true));


//4. Create a function 'forEach' that takes an array and a function and then calls the given function once with each value in the given array.
// Example: forEach([4, 3, 2], function(val) {
//   console.log(val);
// }); // doing this should result in this in the console:
// 4
// 3
// 2

const forEach = function(arr, func){
    let index = 0;
    while(index<arr.length){
      func(arr[index]);
      index++
    }
};

forEach([4,5,6,7],function(val){
  console.log(val);
});

//5. Create a function 'sum' that takes an array of numbers and returns their sum.
//Example: sum([4, 3, 2]); // should return 9

const sum = function(arr) {
    let gumar = 0;
    let hamar = 0;
    while(hamar < arr.length){
      gumar = gumar + arr[hamar];
      hamar++;
    }
  return(gumar);
};
console.log(sum([4,3,2]));



//6. Write a function 'reverse' that reverses the given string.  
const reverse = function(str) {   
	const yaxq = function(str, index) {
		if (index < 0) {
			return '';
		}
		return str[index] + yaxq(str, index-1);
	};
	return yaxq(str, str.length-1);
};
console.log(reverse('Poghosyan'));


//7. Create a function called checkerboard using While loop which, given a size argument,
//will draw an n by n checkerboard on the screen.  Example: checkerboard(5)

const row1 = function(n) {
	 if(n===0) {
	 	return '';
	} else {
	 return '* ' + row1(n-1);
  }
 };

  const row2 = function(n) {
	  if(n===0) {
	  	return '';
	  } else {
  return ' *' + row2(n-1);
    }
  }
  const mekEsMekEn = function(a,b) {
	  if(b===0) {
		  return '';
	};
	console.log(row1(a));

	console.log(row2(a));

	return mekEsMekEn(a, b-1);
  };

const checkerboard = function(n) {
  if (n%2 === 0) {
    return mekEsMekEn(n,n/2)
  }
  mekEsMekEn (n,(n-1)/2);
  console.log(row1(n));
};
checkerboard(4)