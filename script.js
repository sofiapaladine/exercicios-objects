//questão 1

const aluno = {
  nome: "Mariana",
  idade: 21,
  curso: "Sistemas de Informação"
}

console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno["curso"]);

aluno.idade = 22;
console.log("Idade atualizada: ", aluno.idade);


//questão 2

const produto = {
  nome: "Notebook",
  preco: 3500,
  estoque: 10,
};

produto.categoria = "Informática";
produto.estoque = 8;
delete produto.estoque;
produto.desconto = 0.1;

console.log(produto);

//questão 3

const usuario = {
  nome: "Carlos",
  email: "carlos@gmail.com",
  idade: 30
};

if(Object.hasOwn(usuario, "email")) {
    console.log("O usuário possui o atributo 'email'.");
} else {
    console.log("O usuário não possui o atributo 'email'.");
}

console.log("telefone" in usuario ? "O usuário possui o atributo 'telefone'." : "O usuário não possui o atributo 'telefone'.");
console.log("idade" in usuario ? "O usuário possui o atributo 'idade'." : "O usuário não possui o atributo 'idade'.");

//questão 4

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2024,
  cor: "preto"
};

console.log(Object.keys(carro)); 
console.log(Object.values(carro));
console.log(Object.entries(carro));

for(const [chave, valor] of Object.entries(carro)) {
  console.log(`${chave}: ${valor}`);
}

//questão 5

const Produto2 = {
  nome: "Teclado",
  preco: 250,
  quantidade: 4
};

Produto2.total = Produto2.preco * Produto2.quantidade;
console.log(Produto2);

function calcularTotal(objeto) {
    return objeto.preco * objeto.quantidade;
}

console.log("Total calculado: ", calcularTotal(Produto2));


//questão 6 

const funcionario = {
  nome: "Ana",
  cargo: "Desenvolvedora",
  endereco: {
    cidade: "Nova Friburgo",
    estado: "RJ",
    cep: "28600-000"
  }
};

console.log(funcionario.endereco?.cidade);
console.log(funcionario.endereco?.estado);
console.log(funcionario.endereco?.cep);

funcionario.endereco.cidade = "Rio de Janeiro";

const funcionario2 = {
  nome: "Bruno",
  cargo: "Designer"
};

console.log(funcionario2.nome);
console.log(funcionario2.cargo);
console.log(funcionario2.endereco?.cidade);

//questão 7

const conta = {
    titular: "João",
    saldo: 1500,
    depositar(valor){
        this.saldo += valor;
    },
    consultarSaldo(){
        return this.saldo;
    },
    sacar(valor){
        if(valor > this.saldo){
            console.log("Saldo insuficiente!");
        } else {
            this.saldo -= valor;
        }
    }
};

//questão 8

const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 6.0 },
    { nome: "Carlos", nota: 9.2 },
    { nome: "Daniel", nota: 7.0 }
];

const nomes = alunos.map(aluno => aluno.nome);
console.log("Nomes dos alunos:", nomes);

const aprovados = alunos.filter(aluno => aluno.nota >= 7);
console.log("Alunos aprovados:", aprovados);


const maiorNota = Math.max(...alunos.map(aluno => aluno.nota));
const melhorAluno = alunos.find(aluno => aluno.nota === maiorNota);
console.log("Aluno com a maior nota:", melhorAluno);


const somaNotas = alunos.reduce((acumulador, aluno) => {
    return acumulador + aluno.nota;
}, 0);

const media = somaNotas / alunos.length;
console.log("Média da turma:", media);

const alunosOrdenados = [...alunos].sort((a, b) => b.nota - a.nota);
console.log("Alunos ordenados por nota:", alunosOrdenados);


//questão 9

const dadosPessoais = {
    nome: "Mariana",
    idade: 28
};

const dadosProfissionais = {
    cargo: "Analista",
    salario: 4500
};

const pessoa = Object.assign({}, dadosPessoais, dadosProfissionais);
console.log("Objeto combinado:", pessoa);

pessoa.resumo = `${pessoa.nome}, ${pessoa.idade} anos, trabalha como ${pessoa.cargo} e recebe R$${pessoa.salario}.`;
console.log("Resumo:", pessoa.resumo);

//questão 10

const produtos = [
    { id: 1, nome: "Notebook", categoria: "Informática", preco: 3500, estoque: 4 },
    { id: 2, nome: "Mouse", categoria: "Informática", preco: 120, estoque: 15 },
    { id: 3, nome: "Cadeira", categoria: "Móveis", preco: 900, estoque: 6 },
    { id: 4, nome: "Teclado", categoria: "Informática", preco: 250, estoque: 10 }
];


const nomesProdutos = produtos.map(produto => produto.nome);
console.log("Nomes dos produtos:", nomesProdutos);


const valoresProdutos = produtos.map(produto => ({
    nome: produto.nome,
    valorTotal: produto.preco * produto.estoque
}));

console.log("Valor de cada produto em estoque:", valoresProdutos);


const totalEstoque = produtos.reduce((acumulador, produto) => {
    return acumulador + produto.preco * produto.estoque;
}, 0);

console.log("Valor total do estoque:", totalEstoque);


const maisCaro = produtos.reduce((maior, produto) => {
    return produto.preco > maior.preco ? produto : maior;
});

console.log("Produto mais caro:", maisCaro);

const informatica = produtos.filter(produto => produto.categoria === "Informática");

console.log("Produtos de Informática:", informatica);


function buscarPorId(id) {
    return produtos.find(produto => produto.id === id);
}

console.log("Produto com ID 2:", buscarPorId(2));


const resumoEstoque = {
    quantidadeProdutos: produtos.length,
    valorTotal: totalEstoque
};

console.log("Resumo do estoque:", resumoEstoque);


function calcularValorProduto(produto) {
    return produto.preco * produto.estoque;
}

function calcularValorEstoque(lista) {
    return lista.reduce((total, produto) => {
        return total + calcularValorProduto(produto);
    }, 0);
}

function filtrarPorCategoria(lista, categoria) {
    return lista.filter(produto => produto.categoria === categoria);
}

function encontrarPorId(lista, id) {
    return lista.find(produto => produto.id === id);
}

console.log("Valor do estoque pela função:", calcularValorEstoque(produtos));
console.log("Produtos de Móveis:", filtrarPorCategoria(produtos, "Móveis"));
console.log("Produto ID 3:", encontrarPorId(produtos, 3));

