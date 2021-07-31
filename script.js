function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    //let tab = document.getElementById('seltabsub')
    if (num.value.length == 0){
        window.alert('Por favor digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} + ${c} = ${n+c}` 
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    } 
}

function tabuadasub(){
    let num = document.getElementById('txtn')
    let tabsub = document.getElementById('seltabsub')
    if (num.value.length == 0){
      // window.alert('Por favor digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tabsub.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} - ${c} = ${n-c}` 
            item.value = `tabsub${c}`
            tabsub.appendChild(item)
            c++
        }
    } 
}

function tabuadamult(){
    let num = document.getElementById('txtn')
    let tabmult = document.getElementById('seltabmult')
    if (num.value.length == 0){
      //  window.alert('Por favor digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tabmult.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tabmult${c}`
            tabmult.appendChild(item)
            c++
        }
    }
}

function tabuadadiv(){
    let num = document.getElementById('txtn')
    let tabdiv = document.getElementById('seltabdiv')
    if (num.value.length == 0){
   // window.alert('Por favor digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tabdiv.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} ÷ ${c} = ${(n/c).toPrecision(2)}`
            item.value = `tabdiv${c}`
            tabdiv.appendChild(item)
            c++
        }
    }
}