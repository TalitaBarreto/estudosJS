const controles = document.getElementById('controles')
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn')
controles.addEventListener('change', hadleChange)

const hadleStyle = {
    element: btn,
    texto(value){
        this.element.innerText = value;
    },
    color(value){
        this.element.style.color = value;
    },
    backgroundColor(value){
        this.element.style.backgroundColor = value;
    },
    height(value){
        this.element.style.height = value+"px";
    },
    width(value){
        this.element.style.width = value+"px";
    },
    borderRadius(value){
        this.element.style.borderRadius = value+"px";
    },
    border(value){
        this.element.style.border = value;
    },
    fontFamily(value){
        this.element.style.fontFamily = value;
    },
    fontSize(value){
        this.element.style.fontSize = value + "rem";
    },
}

function hadleChange(e){
    const name = e.target.name;
    const value = e.target.value;

    hadleStyle[name](value);
    saveValue(name, value);
    
    showCss();
}

function saveValue(name, value){
    localStorage[name] = value
}

function setValues(){
    const properties = Object.keys(localStorage);

    properties.forEach(propertie => {
        hadleStyle[propertie](localStorage[propertie]);
        controles.elements[propertie].value = localStorage[propertie];
    });

    showCss();
}

setValues();

function showCss(){
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join('; </span><span>');
}