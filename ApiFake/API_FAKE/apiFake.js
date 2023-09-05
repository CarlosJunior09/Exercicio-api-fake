// Obtém os elementos da imagem do Corinthians e do div de informações
var imagemCorinthians = document.querySelector(".ct-logo img");
var infoDiv = document.getElementById("info");

// Dados dos jogadores em formato JSON
const jogadores = [
    {
        "nome": "Carlos Miguel",
        "Posição": "Goleiro",
        "Altura": "2,04",
        "Idade": "24",
        "CidadeNatal": "Rio das Ostras, RJ",
        "foto": "<img src='imgs/carlosMiguel.png'>"
    },
    {
        "nome": "Gil",
        "Posição": "Zagueiro",
        "Altura": "1,92",
        "Idade": "36",
        "CidadeNatal": "Campos dos Goytacazes, RJ",
        "foto": "<img src='imgs/gil.png'>"
    },
    {
        "nome": "Fábio Santos",
        "Posição": "Lateral",
        "Altura": "1,79",
        "Idade": "37",
        "CidadeNatal": "São Paulo, SP",
        "foto": "<img src='imgs/fabioSantos.png'>"
    },
    {
        "nome": "Renato Augusto",
        "Posição": "Meia",
        "Altura": "1,86",
        "Idade": "35",
        "CidadeNatal": "Rio de Janeiro, RJ",
        "foto": "<img src='imgs/renatoAugusto.png'>"
    },
    {
        "nome": "Yuri Alberto",
        "Posição": "Atacante",
        "Altura": "1,82",
        "Idade": "22",
        "CidadeNatal": "São José dos Campos, SP",
        "foto": "<img src='imgs/yuriAlberto.png'>"
    }
];

// Variável para controlar o jogador atualmente exibido
var jogadorAtual = null;

// Função para exibir informações do jogador
function exibirInformacoesJogador(jogador) {
    // Oculta a imagem do Corinthians
    imagemCorinthians.style.display = "none";

    // Exibe as informações do jogador
    infoDiv.innerHTML = `
        <h2>${jogador.nome}</h2>
        <p>Posição: ${jogador.Posição}</p>
        <p>Altura: ${jogador.Altura}</p>
        <p>Idade: ${jogador.Idade}</p>
        <p>Cidade Natal: ${jogador.CidadeNatal}</p>
        ${jogador.foto}
    `;

    // Atualiza o jogador atual
    jogadorAtual = jogador;
}

// Função para voltar à tela inicial
function voltarTelaInicial() {
    // Exibe a imagem do Corinthians
    imagemCorinthians.style.display = "block";

    // Limpa o conteúdo das informações
    infoDiv.innerHTML = "";

    // Define o jogador atual como nulo
    jogadorAtual = null;
}

// Adiciona um ouvinte de evento de clique a cada botão de jogador
for (var i = 0; i < jogadores.length; i++) {
    const jogadorButton = document.getElementById("Jogador" + (i + 1));
    
    jogadorButton.addEventListener("click", (function(index) {
        return function() {
            if (jogadorAtual === jogadores[index]) {
                // Se o jogador atual for o mesmo que foi clicado, volte à tela inicial
                voltarTelaInicial();
            } else {
                // Caso contrário, exiba as informações do jogador
                exibirInformacoesJogador(jogadores[index]);
            }
        }
    })(i));
}