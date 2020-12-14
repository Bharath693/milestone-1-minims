const array=[1,2,3,2,1,4,3]
const unique=array.filter((value,index)=>{
    return array.indexOf(value)===index
})
console.log(unique);