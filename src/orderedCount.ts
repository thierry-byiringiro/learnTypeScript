function orderedCount(text: string): [string, number][] {
  text.split("");

  let obj : {[key:string] : number} = {};
  for(let i = 0;i<text.length;i++){
      const char= text[i]!;
      if(obj[char]){
        obj[char]++
      }else{
        obj[char] = 1;
      }
  }
  return Object.entries(obj);
}
console.log(orderedCount("abracadabra"))