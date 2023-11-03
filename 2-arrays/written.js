/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * Create an array called school programs one and give it the values of architecture,english and math.
 * Underneath create another array called school programs two and give it the values of engineering and construction.
 * console.log the school programs using the .concat method.
 */

var schoolProgramsOne = ['architecture', 'english', 'math'];
var schoolProgramsTwo = ['engineering', 'construction'];
console.log(schoolProgramsOne.concat(schoolProgramsTwo));


/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * Initialise the variable 'cars' to a 2-Dimensional array containing the values below.
 *          column[0]   column[1]      column[2]
 * Row 1    Honda       Blue           2021
 * Row 2    Toyota      Red            2022
 * Row 3    Mitsubishi  Green          2019
 * Row 4    Porsche     Yellow         2023
 *  
 * Then based on the values stored in the schedule 2D array, console log out the following sentence (use backticks):
 * I am driving a _Yellow_ _Porsche_ made in _2023_ . 
 */

var cars = [
    ["Honda","blue",2021],
    ["Toyota","red",2022],
    ["Mitsubishi","green",2019],
    ["Porsche","yellow",2023]
]
console.table(cars)
console.log(`I am driving a ${cars[3][1]} ${cars[3][0]} made in ${cars[3][2]}.`)