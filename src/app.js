//Function 1:
//use slice method in a given array
//If array contains certain elements, and if slice method contains index value as negative then return 'Invalid'
//If slice method contains valid index value, it should return output according to the index value given in slice method
//syntax for slice is slice(index1, index2)
var foods = ["pizza", "burger", "fingerchips", "donuts", "springroll"];
let tempfoods = foods.slice(1, 4);
console.log(tempfoods);


//Function 2:
//use splice method in a given array
//If array contains certain elements, and if splice method contains index value as negative then return 'Invalid'
//If splice method contains valid index value, it should return output according to the index value given in splice method
//If splice method contains empty string values or null, it should return 'Invalid'
//syntax for slice is slice(index1, index2, 'string1','string2')

foods.splice(2, 0, "icecream", "fingerchips");
console.log(foods);

//Function 3:
//Filter functions
//create filterIsEven and filterIsPrime functions and implement the filter method in it
//For example if number is an array of elements. Then, number.filter(isEven) and number.filter(isPrime)
//This method also checks whether array contains nothing, or it contains only negative values or it contains any strings and returns 'Invalid'
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
let evennum = numberArray.filter(ele => ele%2==0) 
console.log(evennum);

//Function 4:
//Reject functions
//create rejectNonPrime functions and implement the reject method in it
//For example if number is an array of elements. Then, number.reject(nonPrime)
//This method also checks whether array contains nothing, or it contains only negative values or it contains any strings and returns 'Invalid'
function isPrime(numberArray) {
    prime = numberArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++)
         {
            if (number % i === 0) 
            return false;
        }
        return true;
    });

    console.log(prime);
}


isPrime(numberArray);

//Function 5:
//Lambda functions
//create isEven functions by using lambda implementation
//This method also checks whether array contains nothing, or it contains only negative values or it contains any strings and returns 'Invalid'


//Function 6:
//Map functions
//create findSquareOfNumber functions and implement the map method in it
//For example if number is an array of elements. Then, number.map(findSquareOfNumber)
//This method also checks whether array contains nothing, or it contains only negative values or it contains any strings and returns 'Invalid'
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray)
{
    var map = myArray.map(element => element * element);
    return map;
}
console.log(findSquareOfNumbers(myArray))

//Function 7:
//Reduce functions
//create multiply functions and implement the reduce method in it
//This method also checks whether array contains nothing, or it contains only negative values or it contains any strings and returns 'Invalid'

function multiply(map)
{
let Reduce = map.reduce((i, element) => i + element );
    console.log(Reduce);
}
multiply(findSquareOfNumbers(myArray));
