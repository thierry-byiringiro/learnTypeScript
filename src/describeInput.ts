function describeInput(input : number | string) : string {
  if(typeof input == "number"){
    return "you provided a" + typeof input + " " +  input;
  }else{
    return "you provided a" + typeof input + " " +  input;
  }
} 
console.log(describeInput("hello"));
console.log(describeInput(42));