var arr = [1,3,2,4];

var stack=[];
var ans = [];
var t = -1;
for(var i = arr.length-1;i>=0;i--){
    if(stack.length==0){
       ans.push(-1);
    }
   
    else if(stack.length>0&&stack[t]>arr[i]){
        ans.push(stack[t]);
    }
    else if(stack.length>0 && stack[t]<=arr[i]){
       while(stack.length>0&&stack[t]<=arr[i]){            
           stack.pop();
           t--;
       }
       if(stack.length==0){
           ans.push(-1);
       }else{
           ans.push(stack[t]);
           
       }
    }else{
        ans.push(stack[t])
    }
    // console.log(stack.length)
    stack.push(arr[i]);
    t++;
    console.log(stack,t)
}
console.log(ans)
// console.log(t)
