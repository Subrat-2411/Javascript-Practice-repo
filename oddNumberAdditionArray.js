
let arr=[1,2,3,4,5,6,7,8,9]


let sum=0;

// for(const ele of arr)
// {
//     if(ele%2!=0)
//     sum+=ele
// }

// console.log("Addition of Odd Numbers :"+sum);

/*Using forEach() */

arr.forEach(element => {
    
    if(element%2!=0)
        sum+=element
});

console.log("Addition of Odd Numbers :"+sum);


/*Using filter() and reduce() */

let oddSum=arr.filter((ele)=>ele%2!=0).reduce((acc,current)=>{return acc+current},0)

console.log("Addition of Odd Numbers :"+sum);


