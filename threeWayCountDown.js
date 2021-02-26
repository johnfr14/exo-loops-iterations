for(let i = 101; i >= 1; i -= 2){
  console.log(i)
}

console.log('\n...\n')
let tab = []
let i = 101

while(i >= 1){
  console.log(i)
  tab.push(i)
  i -= 2
}

console.log('\n...\n')

tab.forEach(element => {
  console.log(element)
});