function vetoriza(n) {
    n = n+1
    let meuArray = [ ]
    for (let indice = 0; indice < n; indice++) {
        meuArray.push([])
        for (let indice2 = 0; indice2 < n; indice2++) {
            meuArray[indice].push(indice*indice2)
        }
    }
    return meuArray
}
console.table(vetoriza(12))