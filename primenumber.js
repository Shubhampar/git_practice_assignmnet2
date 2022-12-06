let num = 13;
let bag = 1;
for(let i = 1;i<=num;i++){
	if(num%i == 0){
	bag=0;
   }
}
if(bag == 1){
  console.log("Yes");
}
else{
  console.log("No");
}