let sum =0// this is a sum intialization with zero
function demo(){ // this is a function and function name 
    for(let i=0;i<arguments.length;i++) //for loop statment 
    sum=sum+arguments[i]// we can also write like ==> sum+=arguments[i]  it is adding the sum
    console.log(sum)// this is printing values

}
demo(1,22,344)//functon call and parameters passing through function name 