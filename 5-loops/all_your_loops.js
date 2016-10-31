// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;
for (var i = 0, i < 5; i++ ); {
  checkz = checkz + 1;
}



// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2
var i = 0;
while (i < 3) {
  checkz = checkz - 2;
}

// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//
var numbers = [1, 2, 3, 4, 5, 6, 7];  //an array called numbers
var total = 0;                        //var total is currently equal to 0
for (var i = 0; i < numbers.length; i++) {    //var i starts at 0, while is less than the number of numbers in the array,
                                              //the loop will continue with i incrementing by one each time until it reaches
                                              //the point where the number of numbers in the array is equal to or more than i
                                              //and then it will stop.
  total += numbers[i];        //total is equal to all the numbers i went through added together.     
}
console.log(total);  //Console logs the total
