let num = 13;
let bag = 0;
for(let i = 1;i<=num-1;i++){
	if(num%i == 0){
	bag++;
   }
}
if(bag == 1){
  console.log("Yes");
}
else{
  console.log("No");
}