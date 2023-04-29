let flag = true
for(let i=2;i<=Math.sqrt(num);i++){
  if(num%i==0){
    flag=false
  }
}
console.log(flag)
