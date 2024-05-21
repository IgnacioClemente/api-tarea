const nombre = document.getElementById('name');
const resultado = document.getElementById('resultado')

function Resultado(resu){
  const a = nombre.innerHTML = "Hola" + " " + resu;
  return a;
}

buton.addEventListener('click',()=>{
  resultado.innerHTML = Resultado(nombre.value)
});

