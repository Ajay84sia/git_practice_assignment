function prime(num){
  let count=0;
  for(let i=1; i<=num;i++){
    if(num%i==0){
      count++;
    }
  }
  if(count==2){
    return true;
  }
  return false;
}
let answer = prime(13);
if(answer==true){
  console.log("Prime number")
}else{
  console.log("Not a Prime number")
}