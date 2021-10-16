function contar() {    
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')


    if(ini.value.length == 0 || fim.value.length == 0){

        window.alert('[ERRO] Faltam dados!')

    }else{

        res.innerHTML = 'Contanto... '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){

            window.alert('Impossível contar! Considerando o passo como 1')
            p = 1

        }
        
        if(i < f){

            for(let c = i; c <= f;  c = p + c){
                res.innerHTML += `${c}, `               
            }

        }else{

           for(let c = i; c >= f; c-= p){
               res.innerHTML += `${c}, `
           } 

        }

    }
}