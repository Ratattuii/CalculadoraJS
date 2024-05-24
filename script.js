// A função 'mostrarNoDisplay' recebe um valor como argumento.
// Este valor é então anexado ao valor atual do elemento HTML com o id 'display'.
function mostrarNoDisplay(value) {
    document.getElementById('display').value += value;
}

// A função 'clearDisplay' limpa o valor do elemento HTML com o id 'display'.
// Ela define o valor do elemento 'display' como uma string vazia.
function clearDisplay() {
    document.getElementById('display').value = '';
}

// A função 'calculate' tenta avaliar a expressão atual no elemento 'display'.
// Se a expressão puder ser avaliada corretamente, o resultado é exibido no elemento 'display'.
// Se ocorrer um erro durante a avaliação (por exemplo, se a expressão for inválida), 
// a função captura o erro e exibe a string 'Erro' no elemento 'display'.
function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}