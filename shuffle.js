import { setTracker } from './main.js';

function activateDifficulty(obj) {
    const difficultyBlock = document.querySelector('.main__difficulty-buttons')

    difficultyBlock.addEventListener('change', (e) => {
      obj.difficulty = e.target.value;
    });
  }

  function activateAncient(obj) {
    const ancientsBlock = document.querySelector('.main__ancients');
    const ancientCards = document.querySelectorAll('.main__ancient-card');

    ancientsBlock.addEventListener('click', (e) => {
      ancientCards.forEach((card) => {
        card.classList.remove('active');

        if (e.target.id === card.id) {
          card.classList.add('active');
        }
      })

      obj.ancient = e.target.id;
      setTracker (obj.ancient);
    });
  }

  function activateShuffleButton(obj) {
    const shuffleButton = document.querySelector('.main__difficulty-shuffle-cards');
  
    shuffleButton.addEventListener('click', (e) => startGame(obj));
  }
  
  export { activateShuffleButton };

const globalState = {
  ancient: 'azathoth',
  difficulty: 'normal',
};

activateAncient(globalState);
activateDifficulty(globalState);