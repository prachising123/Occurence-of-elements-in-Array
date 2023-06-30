let arr = [1,2,3,4,5,1,3,4,5,3,2,5,4];
let result = {};
for(let i=0; i<arr.length; i++){
    if(arr[i] in result){
        result[arr[i]] =  result[arr[i]] + 1;
    }
    else{
        result[arr[i]] =  1;    
    } 
}
console.log(result);