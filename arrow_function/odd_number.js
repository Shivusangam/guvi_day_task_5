//print the odd number in array
let odd_number=(arr)=>{
//  for(let i=0;i<arr.length;i++){
//      if(arr[i]%2!=0){
//          console.log(arr[i])
//      }
//  }

//or filter
let x=arr.filter((num)=>{return num%2!=0})
console.log(x)
}
odd_number([1,4,7,19,30])

// output
// 1
// 7
// 19