//dogonaldo
//doguinho
//doguinho lindo
1.//given and array of ints, return true if 6 appears as either
//the first or last element in the array. The array will be length 1 or more
//FirstLast6 (1,2,6) - true
//FirstLast6 (6,1,2,3) - true
//FirstLast 6 (13,6,1,2,3) - false
function FirstLast6(x) {
    let result = "False";
    if (x[0]==6 || x[x.length-1]==6){

        result = "True";

    }
    return result;
}
console.log(FirstLast6([1,2,6]));
console.log(FirstLast6 ([6,1,2,3]));
console.log(FirstLast6 ([13,6,1,2,3]));