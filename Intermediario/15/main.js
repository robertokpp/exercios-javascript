function contarVogais(palavra){
  let contador = 0;
  for(i = 0; i < palavra.length; i++){
    if ("aeiouAEIOU".includes(palavra[i]) ){
      contador++;
    }
  }
  return contador;
}

console.log(contarVogais("javascript"))