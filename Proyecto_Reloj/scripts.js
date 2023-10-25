const deg =6;

const hora=document.querySelector('.hora');
const minuto=document.querySelector('.minuto');
const segundo=document.querySelector('.segundo');

/*funcion de interval muestra el crecimiento y decrecimiento de una funcion */
setInterval(()=>{
    let tiempo =new Date();

    let hr=tiempo.getHours()*30;
    let min= tiempo.getMinutes()*deg;
    let seg= tiempo.getSeconds()*deg;

    hora.style.transform =`rotate(${(hr)+(min/12)}deg)`;
    minuto.style.transform =`rotate(${(min)}deg)`;
    segundo.style.transform =`rotate(${(seg)}deg)`;
    
})
function Calcular(){
    /*creacion de objetos */
    let tiempo= new Date();
    let hora= tiempo.getHours();
    let minuto= tiempo.getMinutes();
    let segundo= tiempo.getSeconds();
    let ampm ='AM';
    if(hora>=12){
       ampm='PM';
    }
    if(hora > 12){
       hora-=12;
    }
/*muestra digitos que al ser menores de 10 muestra al lado izquierdo el numero 0*/
    hora= hora <10 ? "0"+ hora : hora;
    minuto= minuto <10 ? "0"+ minuto : minuto;
    segundo= segundo <10 ? "0"+ segundo : segundo;
    /* creacion de variables*/
 let pantallareloj= hora+":"+minuto+":"+segundo+":"+ampm;
 /*Devuelve o establece uns sintacis en html describiendo un elemento */
 let relojdigital=document.querySelector(".digital");
 relojdigital.innerHTML=pantallareloj;

}

setInterval(Calcular,1000);