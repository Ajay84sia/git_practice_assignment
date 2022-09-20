
function prime(number){
  let factor=0;
  for(let i=1; i<=number;i++){
    if(number%i==0){
      factor++;
    }
  }
  if(factor==2){
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