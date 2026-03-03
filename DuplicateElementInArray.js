/*	Duplicate In Array */

let arr=[1,2,2,4,5,6,1]

let duplicates=new Set()

for(const ele of arr)
{
    if(arr.indexOf(ele)!=arr.lastIndexOf(ele))
       duplicates.add(ele)
        
        
}
/*... -> spread operator. It “spreads out” elements from an iterable (like a Set or array).*/
console.log([...duplicates]);

let results=arr.filter((ele,index)=>
{
    return  arr.indexOf(ele)!=index
})

console.log(results);

