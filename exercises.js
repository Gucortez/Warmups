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

2.//Given an array of ints, return true if the array is length 1 or more, 
//and the first element and the last element are equal. 
//SameFirstLast({1, 2, 3}) -> false
//SameFirstLast({1, 2, 3, 1}) -> true
//SameFirstLast({1, 2, 1}) -> true

function SameFirstLast(y) {
    let result = "False";
    if (y[0]==y[y.length-1]){

    result = "True";
    }
    return result;
}

console.log (SameFirstLast([1,2,3]));
console.log (SameFirstLast([1,2,3,1]));
console.log (SameFirstLast([1,2,1]));

3.//Return an int array length n containing the 
//first n digits of pi.
//MakePi(3) -> {3, 1, 4}

let n = 5;
let pi= Math.PI;
let answer = [];
let piString = pi.toString();
for(let i =0; i<n+1;i++)
{
    if(piString[i] == ".")
        continue;    
    answer.push(piString[i]);
}

console.log(answer);

4.//Given 2 arrays of ints, a and b, return true if they have the same first 
//element or they have the same last element. Both arrays will be length 1 or more. 
//CommonEnd({1, 2, 3}, {7, 3}) -> true
//CommonEnd({1, 2, 3}, {7, 3, 2}) -> false
//CommonEnd({1, 2, 3}, {1, 3}) -> true

function commomEnd (a,b){
    let result = "False";
    if (a[0]==b[0] || a[a.length-1]==b[b.length-1]){
        result = "True";
    }
    return result;
}
console.log (commomEnd([1, 2, 3], [7, 3]));
console.log (commomEnd([1, 2, 3], [7, 3,2]));
console.log (commomEnd([1, 2, 3], [1, 3]));

5.//Given an array of ints, return the sum of all the elements. 
//Sum({1, 2, 3}) -> 6
//Sum({5, 11, 2}) -> 18
//Sum({7, 0, 0}) -> 7

function sum (s){
let result = 0;
s.forEach(item => {
    result +=item;
});
console.log(result);
return result;
}
sum([1, 2, 3]);
sum([5, 11, 2]);
sum([7, 0, 0]);

6.//Given an array of ints, return an array with the 
//elements "rotated left" so {1, 2, 3} yields {2, 3, 1}. 
//RotateLeft({1, 2, 3}) -> {2, 3, 1}
//RotateLeft({5, 11, 9}) -> {11, 9, 5}
//RotateLeft({7, 0, 0}) -> {0, 0, 7}

function rotate (l){
    let first = l.shift();
    l.push(first);
    return l;
}
console.log(rotate([1,2,3]));
console.log(rotate([5,11,9]));
console.log(rotate([7,0,0]));

7.//Given an array of ints length 3, 
//return a new array with the 
//elements in reverse order, so for example 
//{1, 2, 3} becomes {3, 2, 1}. 

function reverse (z){
    z.reverse();
    return z;
}
console.log(reverse([1,2,3]));

10.//Given an int array , return true if it contains 
//an even number (HINT: Use Mod (%)). 
//HasEven({2, 5}) -> true
//HasEven({4, 3}) -> true
//HasEven({7, 5}) -> false

function HasEven (e){
    let result = 0;
    for (i = 0 ; i < e.length ; i++){
        if (e[0] % 2 == 0 || e[1] % 2 == 0){
        result = "True";  
        }
        else if (e[0] % 2 != 0 || e[1] % 2 != 0){
        result = "False";
        }
    } 
        return result;
}
console.log (HasEven([2, 5]));
console.log (HasEven([4, 3]));
console.log (HasEven([7, 5]));