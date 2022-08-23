var array = []
const audio = document.getElementById("tauz")
function easterEgg(event){

    let codigo = event.keyCode
    let letra = String.fromCharCode(codigo)
    
    array.push(letra)
    console.table(array)

    if(array[0]=="t" && array[1]=="a" && array[2]=="u" && array[3]=="z"){

        tauz.currentTime = 5
        tauz.play();

      for(let i=0; i<=5; i++){

        array[i] = 0;

      }

    }
}

