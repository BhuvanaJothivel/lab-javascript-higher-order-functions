//Trial 1:
//Do slice method in array
describe("Array Slice", () =>{
  it("should create a function named slice", function() {
    expect(typeof slice).toBe("function");
  });

  it("it should return Invalid - if the index value given is negative value ", function() {
    const foods = [pizza, burger, fingerShips, donuts, springRoll];
    expect(foods.slice(-3,-5)).toEqual('Invalid')
  });

  it("it should return an array after slicing the original array ", function() {
    const foods = [pizza, burger, fingerShips, donuts, springRoll];
    expect(foods.slice(1,4)).toEqual([burger, fingerShips, donuts])
  });

  it("it should return an original array - if the index for slice is given as 0 and length of array", function() {
    const foods = [pizza, burger, fingerShips, donuts, springRoll];
    expect(foods.slice(0,5)).toEqual([pizza, burger, fingerShips, donuts, springRoll])
  });

});

//Trial 2:
//Do splice method in array
describe("Array Splice", () =>{
  it("should create a function named splice", function() {
    expect(typeof splice).toBe("function");
  });

  it("it should return Invalid - if the index value given is negative value ", function() {
    const foods = [pizza,burger,fingerShips,donuts,springRoll];
    expect(foods.splice(-3,-5,'rice','egg')).toEqual('Invalid')
  });

  it("it should return an array after splicing the original array ", function() {
    const foods = [pizza, burger, fingerShips, donuts, springRoll];
    expect(foods.splice(2,0,'noodles', 'icecream')).toEqual([pizza,burger,noodles,icecream,fingerShips,donuts,springRoll])
  });

  it("it should return an array with empty elements - if the elements want to be added in the existing array is given as empty", function() {
    const foods = [pizza, burger, fingerShips, donuts, springRoll];
    expect(foods.splice(2,0,'', '')).toEqual([pizza,burger,,,fingerShips,donuts,springRoll])
  });

  it("it should return Invalid - if the elements want to be added in the existing array is given as null", function() {
    const foods = [pizza, burger, fingerShips, donuts, springRoll];
    expect(foods.splice(2,0,null, null)).toEqual('Invalid')
  });

});

//Trial 3:
//Filter functions
//where it takes parameter as a function not any values or variables
describe("Filter", () =>{
  it("should create a function named filterIsEven", function() {
    expect(typeof filterIsEven).toBe("function");
  });

  it("it should return Invalid - if the given array is empty", function() {
    expect(filterIsEven([])).toEqual('Invalid')
  });

  it("it should return Invalid - if the given array contains only negative values", function() {
    expect(filterIsEven([-2, -4, -7, -11, -13, -2, -3])).toEqual('Invalid')
  });

  it("it should return Invalid Data in an array - if any elements in an array contains string ", function() {
    expect(filterIsEven([2, 4, 9, '7', 11, '13', 3])).toEqual('Invalid Data in an array')
  });

  it("it should return all even numbers ", function() {
    expect(filterIsEven([2, 4, 9, 7, 11, 13, 3])).toEqual([2, 4])
  });

  it("should create a function named filterIsPrime", function() {
    expect(typeof filterIsPrime).toBe("function");
  });

  it("it should return Invalid - if the given array is empty", function() {
    expect(filterIsPrime([])).toEqual('Invalid')
  });

  it("it should return Invalid - if the given array contains only negative values", function() {
    expect(filterIsPrime([-2, -4, -7, -11, -13, -2, -3])).toEqual('Invalid')
  });

  it("it should return Invalid Data in an array - if any elements in an array contains string ", function() {
    expect(filterIsPrime([2, 4, 9, '7', 11, '13', 3])).toEqual('Invalid Data in an array')
  });

  it("it should return all prime numbers ", function() {
    expect(filterIsPrime([2, 4, 9, 7, 11, 13, 3])).toEqual([2, 7, 11, 13, 3])
  });

});

// /Trial 4:
// Reject functions
// Definition is as same as filter but functionality is opposite of the filter
describe("Reject", () =>{
  it("should create a function named rejectNonPrime", function() {
    expect(typeof rejectNonPrime).toBe("function");
  });

  it("it should return Invalid - if the given array is empty", function() {
    expect(rejectNonPrime([])).toEqual('Invalid')
  });

  it("it should return Invalid - if the given array contains only negative values", function() {
    expect(rejectNonPrime([-2, -4, -7, -11, -13, -2, -3])).toEqual('Invalid')
  });

  it("it should return Invalid Data in an array - if any elements in an array contains string ", function() {
    expect(rejectNonPrime([2, 4, 9, '7', 11, '13', 3])).toEqual('Invalid Data in an array')
  });

  it("it should return all non prime numbers ", function() {
    expect(rejectNonPrime([2, 4, 9, 7, 11, 13, 3])).toEqual([4, 9])
  });

});

//Trial 5:
//Lambda functions
describe("Lambda", function() {
  it("should create a function named isEven", function() {
    expect(typeof isEven).toBe("function");
  });

  it("it should return Invalid - if the given array is empty", function() {
    expect(isEven([])).toEqual('Invalid')
  });

  it("it should return Invalid - if the given array contains only negative values", function() {
    expect(isEven([-2, -4, -7, -11, -13, -2, -3])).toEqual('Invalid')
  });

  it("it should return Invalid Data in an array - if any elements in an array contains string ", function() {
    expect(isEven([2, 4, 9, '7', 11, '13', 3])).toEqual('Invalid Data in an array')
  });

  it("it should return all even numbers ", function() {
    expect(isEven([2, 4, 9, 7, 11, 13, 3])).toEqual([2, 4])
  });

});

//Trial 6:
//Map functions

describe("Map", function() {
  it("Defines findSquareOfNumbers", function() {
    expect(typeof findSquareOfNumbers).toBe("function");
  });

  it("it should return Invalid - if the given array is empty", function() {
    expect(findSquareOfNumbers([])).toEqual('Invalid')
  });

  it("it should return Invalid - if the given array contains only negative values", function() {
    expect(findSquareOfNumbers([-2, -4, -7, -11, -13, -2, -3])).toEqual('Invalid')
  });

  it("it should return Invalid Data in an array - if any elements in an array contains string ", function() {
    expect(findSquareOfNumbers([2, 4, 9, '7', 11, '13', 3])).toEqual('Invalid Data in an array')
  });

  it("it should return all even numbers ", function() {
    expect(findSquareOfNumbers([2, 4, 9, 7, 11, 13, 3])).toEqual([4, 16, 81, 49, 121, 169, 9])
  });
});

//Trial 7:
//Reduce functions

describe("Reduce", function() {
  it("Defines multiply", function() {
    expect(typeof multiply).toBe("function");
  });

  it("it should return Invalid - if the given array is empty", function() {
    expect(multiply([])).toEqual('Invalid')
  });

  it("it should return Invalid - if the given array contains only negative values", function() {
    expect(multiply([-2, -4, -7, -11, -13, -2, -3])).toEqual('Invalid')
  });

  it("it should return Invalid Data in an array - if any elements in an array contains string ", function() {
    expect(multiply([2, 4, 9, '7', 11, '13', 3])).toEqual('Invalid Data in an array')
  });

  it("it should return all even numbers ", function() {
    expect(multiply([2, 4, 5])).toEqual(40)
  });
});
