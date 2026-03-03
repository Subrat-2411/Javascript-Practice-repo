
let arr=[1,2,8,9,3,4]

// for(let i=0;i<arr.length;i++)
// {
//     for(let j=i+1;j<arr.length;j++)
//     {
//         if(arr[i]>arr[j])
//         {
//             let temp=arr[i]

//             arr[i]=arr[j]

//             arr[j]=temp
//         }
//     }
// }



/*Using inbuilt function */
let comparisonNum=(a,b)=>{return a-b}

arr.sort(comparisonNum)

console.log(arr);

