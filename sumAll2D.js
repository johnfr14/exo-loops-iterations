let tab = [
  [1, 2, 3],
  [4, -5, 7],
  [-3, -6],
  [10, -13],
]
let sum = 0

for(let i = 0; i < tab.length; i++){
  tab[i].forEach((elem) => {
    sum += elem
  })
}

console.log(sum)