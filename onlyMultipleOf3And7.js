for(let i = 1; i <= 1000; i++){
  i % 3 === 0 ? console.log(`${i} est bien un multiple de 3\n3 x ${i / 3}\n`) : ''
  i % 7 === 0 ? console.log(`${i} est bien un multiple de 7\n7 x ${i / 7}\n`) : ''
}