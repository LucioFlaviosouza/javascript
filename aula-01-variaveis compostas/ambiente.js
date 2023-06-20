let num = [4,5,6,7,8]
console.log(num)  

/*
num[3] = 6   // para acrecentar mais um elemento, colocando o valor depois do =
console.log(num)  

num.push(7)  // para colocar o valor especifico na última posição independente de qual for 
console.log(num)

num.length  // para saber a quantidade de elementos ou o comprimento do vetor
console.log(num.length)

num.sort()  // para colocar os números em ordem crescente, após ter adicionados todos os valores (num.push())
console.log(num.sort()) */

let pos = num.indexOf(5)
if (pos == -1) {
    console.log(' o valor não foi encontrado!')
} else {
    console.log(` o valor esta na posição ${pos}`)
}
