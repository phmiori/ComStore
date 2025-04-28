const cardsWrapper = document.querySelector('.cards-wrapper');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const cardWidth = 240; // largura + margem

nextButton.addEventListener('click', () => {
  if (currentIndex < cardsWrapper.children.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

function updateSlider() {
  const translateX = -currentIndex * cardWidth;
  cardsWrapper.style.transform = `translateX(${translateX}px)`;
};

// Não precisa de nenhum código JS extra para o dropdown. O CSS já cuida disso!

const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

// Adicionando eventos para mostrar/esconder a lista
dropdown.addEventListener('mouseenter', () => {
  dropdownContent.style.display = 'block'; // Exibe o dropdown
});

dropdown.addEventListener('mouseleave', () => {
  dropdownContent.style.display = 'none'; // Esconde o dropdown
});

// Também mantemos a lista visível enquanto o mouse estiver sobre ela
dropdownContent.addEventListener('mouseenter', () => {
  dropdownContent.style.display = 'block'; // Continua visível enquanto o mouse estiver sobre a lista
});

dropdownContent.addEventListener('mouseleave', () => {
  dropdownContent.style.display = 'none'; // Esconde a lista quando o mouse sai da lista
});
