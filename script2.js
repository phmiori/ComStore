const checkboxes = document.querySelectorAll('.filtros input[type="checkbox"]');
const produtos = document.querySelectorAll('.produto-card');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const checked = Array.from(checkboxes)
      .filter(c => c.checked && c.value !== "todos")
      .map(c => c.value);

    if (checkbox.value === "todos") {
      if (checkbox.checked) {
        checkboxes.forEach(c => c.checked = c.value === "todos");
        produtos.forEach(p => p.style.display = "block");
      }
    } else {
      document.querySelector('input[value="todos"]').checked = false;
      produtos.forEach(p => p.style.display = "none");
      checked.forEach(classe => {
        document.querySelectorAll('.' + classe).forEach(p => p.style.display = "block");
      });
      if (checked.length === 0) {
        document.querySelector('input[value="todos"]').checked = true;
        produtos.forEach(p => p.style.display = "block");
      }
    }
  });
});

// Espera a página carregar
document.addEventListener('DOMContentLoaded', function() {
    const inputPesquisa = document.querySelector('.barra-pesquisa input');
    const botaoPesquisa = document.querySelector('.barra-pesquisa button');
    const produtos = document.querySelectorAll('.produto-card');
  
    // Função que realiza a pesquisa
    function pesquisarProdutos() {
      const termo = inputPesquisa.value.toLowerCase(); // Pega o texto da barra
      produtos.forEach(produto => {
        const titulo = produto.querySelector('h3').textContent.toLowerCase();
        if (titulo.includes(termo)) {
          produto.style.display = 'block'; // Mostra se combinar
        } else {
          produto.style.display = 'none';  // Esconde se não combinar
        }
      });
    }
  
    // Quando clicar no botão, faz a pesquisa
    botaoPesquisa.addEventListener('click', pesquisarProdutos);
  
    // Quando apertar Enter, também faz a pesquisa
    inputPesquisa.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        pesquisarProdutos();
      }
    });
  });
  