//Trial 1:
//use slice method in a given array


//Trial 2:
//use splice method in a given array

//Trial 3:
//Filter functions
//create filterIsEven and filterIsPrime functions and implement the filter method in it
//For example if number is an array of elements. Then, number.filter(isEven) and number.filter(isPrime)

// /Trial 4:
// Reject functions
//create rejectNonPrime functions and implement the reject method in it
//For example if number is an array of elements. Then, number.reject(nonPrime)

//Trial 5:
//Lambda functions
//create isEven functions by using lambda implementation

//Trial 6:
//Map functions
//create findSquareOfNumber functions and implement the map method in it
//For example if number is an array of elements. Then, number.map(findSquareOfNumber)

//Trial 7:
//Reduce functions
//create multiply functions and implement the reduce method in it


function filterIsEven(numbers){
    const x = new Array();
    var count = 0;
    if(numbers.length === 0)
        return 'Invalid';
    for(var i=0; i<numbers.length;i++){
        if(numbers[i]<0)
            count++; 
    }
    if(count === numbers.length)
        return 'Invalid';
    for(var i=0; i<numbers.length;i++){
        if(numbers[i]%2===0)
            x.push(numbers[i]);
    }
    return x;
}
  
function isEven(numbers){
    const x = new Array();
    var count = 0;
    if(numbers.length === 0)
        return 'Invalid';
    for(var i=0; i<numbers.length;i++){
        if(numbers[i]<0)
            count++; 
    }
    if(count === numbers.length)
        return 'Invalid';
    for(var i=0; i<numbers.length;i++){
        if(numbers[i]%2===0)
            x.push(numbers[i]);
    }
    return x;
}
  

function filterIsPrime(numbers){
    const y = new Array();
    var count = 0;
    if(numbers.length === 0)
        return 'Invalid';
    for(var i=0; i<numbers.length;i++){
        if(numbers[i]<0)
            count++; 
    }
    if(count === numbers.length)
        return 'Invalid';
    for(var i=0; i<numbers.length;i++){
        var temp = true;
        if(numbers[i] === 1 || numbers[i] === 2)
            y.push(numbers[i]);
        else{
        for(var j=2; j<numbers[i]; j++){
            if(numbers[i]%j===0){
                temp = false;
                break;
            }
        }
        if(temp)
            y.push(numbers[i]);
    }
    }
    return y;
}
  
function rejectNonPrime(numbers){
    const y = new Array();
    var count = 0;
    if(numbers.length === 0)
        return 'Invalid';
    for(var i=0; i<numbers.length;i++){
        if(numbers[i]<0)
            count++; 
    }
    if(count === numbers.length)
        return 'Invalid';
    for(var i=0; i<numbers.length;i++){
        if(numbers[i] === 1 || numbers[i] === 2)
            continue;
        else{
            for(var j=2; j<numbers[i]; j++){
                if(numbers[i]%j===0){
                    y.push(numbers[i]);
                }
            }
        }  
    } 
    return y;
}

function findSquareOfNumbers(numbers){
    const y = new Array();
    var count = 0;
    if(numbers.length === 0)
        return 'Invalid';
    for(var i=0; i<numbers.length;i++){
        if(numbers[i]<0)
            count++; 
    }
    if(count === numbers.length)
        return 'Invalid';
    for(var i=0; i<numbers.length;i++){
        var temp = Math.pow(numbers[i],2);
        y.push(temp);
    } 
    return y;
}

function multiply(numbers){
    var count = 0;
    if(numbers.length === 0)
        return 'Invalid';
    for(var i=0; i<numbers.length;i++){
        if(numbers[i]<0)
            count++; 
    }
    if(count === numbers.length)
        return 'Invalid';
    var temp = 1;
    for(var i=0; i<numbers.length;i++){
        temp = temp * numbers[i];  
    } 
    return temp;
}