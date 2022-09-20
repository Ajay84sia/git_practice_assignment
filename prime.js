function prime(num){
  let count=0;
  for(let i=1; i<=num;i++){
    if(num%i){
      console.log(true);
    }else{
      console.log(false);
    }
    
  }
}
prime(13);