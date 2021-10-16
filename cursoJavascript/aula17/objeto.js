<<<<<<< HEAD
let amigo = {
    nome:'José',
    sexo:'M',
    peso:85.5,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}


amigo.engordar(6)
=======
let amigo = {
    nome:'José',
    sexo:'M',
    peso:85.5,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}


amigo.engordar(6)
>>>>>>> 5a3b3e7a3c073cf15a23667fe6d552b185cdb00a
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)