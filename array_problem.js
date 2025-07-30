// const arr= [1, 2, 3, 4, 5, 6];
// let sum = 0;
// for (let i = 0 ; i < arr.length; i++){
//     sum += arr[i]
// }

// console.log(sum);

// --------------find max---------------------

// let max = arr[0]

// for (let i=1; i < arr.length ; i++){
//  if(arr[i] > max){
//     max = arr[i]
//  }
// }
// console.log(max);

//  ------------reverse array ---------

// const arr= [1, 2, 3, 4, 5, 6];

// const reversed = []
// for (let i = arr.length - 1; i >= 0; i--){
//     reversed.push(arr[i])
// }
// console.log(reversed);

//  -----------duplicate filter----------

// const arr = [1, 2, 2, 3, 4, 4, 5];
// const unique_arr = []

// for (i=0; i<arr.length; i++){
//     if (!unique_arr.includes(arr[i])){
//         unique_arr.push(arr[i])
//     }
// }
// console.log(unique_arr)

// --------- claculate instance of a value-------

// const arr = [1, 2, 2,2,2, 3, 4, 4, 5];

// const target = 2
// let count = 0

// for (i=0; i<arr.length; i++){
//     if(arr[i] === target){
//         count ++
//     }
// }

// console.log(count);

// ---------- double all array element-----

// const arr= [1, 2, 3, 4, 5, 6];

// double_arr=[]
// for (i=0; i<arr.length; i++){
//     let double = arr[i] * 2
//     double_arr.push(double)
// }
// console.log(double_arr);

// ------ two sum with loop-----
// const arr= [2, 7, 11,7, 15];
// const target = 9
// ans=[]

// for (let i =0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i] + arr[j] === target){
//             ans.push([i,j])
//         }
//     }
// }
// console.log(ans);

//----------sort an array --------

const arr = [5, 2, 9, 1, 5];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  
  console.log(arr); 


