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

/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/

const track = document.getElementById('carousel-track');
const imagesContainer = document.getElementById('carousel-images');
let currentIndexe = 0;
let isPaused = false;

// Calcula quantas imagens existem
const images = imagesContainer.querySelectorAll('img');
const imageWidth = images[0].clientWidth + 10; // Imagem + margin-right

// Duplicar as imagens dinamicamente no JS para permitir loop contínuo
images.forEach(img => {
  const clone = img.cloneNode(true);
  imagesContainer.appendChild(clone);
});

// Função para mover automaticamente
function autoMove() {
  if (isPaused) return;

  currentIndex++;
  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

  // Quando chega no final das imagens clonadas
  if (currentIndex >= images.length) {
    setTimeout(() => {
      track.style.transition = "none"; // tira a transição para voltar sem animação
      currentIndex = 0;
      track.style.transform = `translateX(0px)`;
    }, 500); // espera a animação acabar
  }
}

// Timer para o movimento automático
let moveInterval = setInterval(autoMove, 2000); // a cada 2s move

// Função para pausar no hover
carousel.addEventListener('mouseenter', () => {
  isPaused = true;
});
carousel.addEventListener('mouseleave', () => {
  isPaused = false;
});

// Função para mover manualmente com os botões
function moveSlideManual(direction) {
  pauseAndResume(); // Pausa o automático ao clicar

  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Função que pausa e retoma depois de clicar
function pauseAndResume() {
  clearInterval(moveInterval);
  moveInterval = setInterval(autoMove, 2000);
}


/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/


