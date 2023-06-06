function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}

const resultado = calcularMedia(2, 7);

console.log(resultado);

function criarProduto(nome, preco) {
  const produto = {
    nome, //ou nome: nome,
    preco,
    estoque: 1,
  };
  return produto;
}

//const notebook = criarProduto("Notebook Intel Core i3 8GB", 2500);
//console.log(notebook);

console.log(criarProduto("Notebook Intel Core i3 8GB", 2500));

function areaRetangular(base, altura) {
  return (area = base * altura);
  //return area;
}
function areaQuadrada(lado) {
  return areaRetangular(lado, lado);
}

//console.log(areaRetangular(3, 5));
//console.log(areaQuadrada(9));

function olaMundo() {
  let texto = "...";
  return texto;
  texto = "Olá Mundo";
  console.log(texto);
}

console.log(olaMundo());
