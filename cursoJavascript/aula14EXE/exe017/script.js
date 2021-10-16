<<<<<<< HEAD
function tabuada(){

    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){

        window.alert('Digite um número!!!!!')

    }else{
        
        let n = Number(num.value)
        
        tab.innerHTML = ``

        for(let c = 1; c <= 10; c++){

            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)

        }
        
    }

=======
function tabuada(){

    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){

        window.alert('Digite um número!!!!!')

    }else{
        
        let n = Number(num.value)
        
        tab.innerHTML = ``

        for(let c = 1; c <= 10; c++){

            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)

        }
        
    }

>>>>>>> 5a3b3e7a3c073cf15a23667fe6d552b185cdb00a
}