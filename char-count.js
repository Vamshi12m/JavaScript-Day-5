var fruit="banana",character="a",count=0;
for(var i=0;i<fruit.length;i++){
    if(character==fruit[i]){
        count+=1;
    }
}
console.log(`${count} \(The character ${character} is appears ${count} times in \"${fruit}\"\)`);