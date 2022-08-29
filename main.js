import blueCardsData from './data/MythicCards/blue/index.js';
import brownCardsData from './data/MythicCards/brown/index.js';
import greenCardsData from './data/MythicCards/green/index.js';
import ancientsData from './data/ancients.js';
//shuffle the cards making the archive
function shuffle (deck) {
	for (let i = deck.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[deck[i], deck[j]] = [deck[j], deck[i]];
	}
}
//collecting cards easy mode
function getSimpleDeck (data, output) {
	data.forEach(value => {
		if (value.difficulty === 'easy') {
			output.push(value.id);
		}
	});
	data.forEach(value => {
		if (value.difficulty === 'normal') {
			output.push(value.id);
		}
	});
	data.forEach(value => {
		if (value.difficulty === 'hard') {
			output.push(value.id);
		}
	});
}

//collecting decks of cards
//Функция сбора колод по стадиям
function getStageDecks (ancient) {
	ancientsData.forEach(value => {
		if (value.id === ancient) {
//Замешиваем нужное количество кард каждого цвета
		const allGreen = value.firstStage.greenCards + value.secondStage.greenCards + value.thirdStage.greenCards;
		const allBrown = value.firstStage.brownCards + value.secondStage.brownCards + value.thirdStage.brownCards;
		const allBlue = value.firstStage.blueCards + value.secondStage.blueCards + value.thirdStage.blueCards;
		const greenCardsSet = greenCardsId.slice(0, allGreen);
		const brownCardsSet = brownCardsId.slice(0, allBrown);
		const blueCardsSet = blueCardsId.slice(0, allBlue);
		shuffle(greenCardsSet);
		shuffle(brownCardsSet);
		shuffle(blueCardsSet);
//Первая стадия
			if (value.firstStage.greenCards !== 0) {
				for (let i = 0; i < value.firstStage.greenCards; i++) {
					stageOneCards.push(greenCardsSet[i]);
				}
			}
			if (value.firstStage.brownCards !== 0) {
				for (let i = 0; i < value.firstStage.brownCards; i++) {
					stageOneCards.push(brownCardsSet[i]);
				}
			}
			if (value.firstStage.blueCards !== 0) {
				for (let i = 0; i < value.firstStage.blueCards; i++) {
					stageOneCards.push(blueCardsSet[i]);
				}
			}
//Вторая стадия
			if (value.secondStage.greenCards !== 0) {
				for (let i = value.firstStage.greenCards; i < (value.secondStage.greenCards + value.firstStage.greenCards); i++) {
					stageTwoCards.push(greenCardsSet[i]);
				}
			}
			if (value.secondStage.brownCards !== 0) {
				for (let i = value.firstStage.brownCards; i < (value.secondStage.brownCards + value.firstStage.brownCards); i++) {
					stageTwoCards.push(brownCardsSet[i]);
				}
			}
			if (value.secondStage.blueCards !== 0) {
				for (let i = value.firstStage.blueCards; i < (value.secondStage.blueCards + value.firstStage.blueCards); i++) {
					stageTwoCards.push(blueCardsSet[i]);
				}
			}
//Третья стадия	
			if (value.thirdStage.greenCards !== 0) {
				for (let i = (value.secondStage.greenCards + value.firstStage.greenCards); i < (value.secondStage.greenCards + value.firstStage.greenCards + value.thirdStage.greenCards); i++) {
					stageThreeCards.push(greenCardsSet[i]);
				}
			}
			if (value.thirdStage.brownCards !== 0) {
				for (let i = (value.secondStage.brownCards + value.firstStage.brownCards); i < (value.secondStage.brownCards + value.firstStage.brownCards + value.thirdStage.brownCards); i++) {
					stageThreeCards.push(brownCardsSet[i]);
				}
			}
			if (value.thirdStage.blueCards !== 0) {
				for (let i = (value.secondStage.blueCards + value.firstStage.blueCards); i < (value.secondStage.blueCards + value.firstStage.blueCards + value.thirdStage.blueCards); i++) {
					stageThreeCards.push(blueCardsSet[i]);
				}
			}
		}
	});
}
export function setTracker (ancient) {
	ancientsData.forEach(value => {
		if (value.id === ancient) {
			trackGreenFirst.textContent = value.firstStage.greenCards;
			trackBrownFirst.textContent = value.firstStage.brownCards;
			trackBlueFirst.textContent = value.firstStage.blueCards;
			trackGreenSecond.textContent = value.secondStage.greenCards;
			trackBrownSecond.textContent = value.secondStage.brownCards;
			trackBlueSecond.textContent = value.secondStage.blueCards;
			trackGreenThird.textContent = value.thirdStage.greenCards;
			trackBrownThird.textContent = value.thirdStage.brownCards;
			trackBlueThird.textContent = value.thirdStage.blueCards;
		}
	});
}


//Getting DOM-tree elements
const deckShirt = document.querySelector('.game-field__stack');
const trackGreenFirst = document.querySelector('.game-field__circle_green_1');
const trackBrownFirst = document.querySelector('.game-field__circle_brown_1');
const trackBlueFirst = document.querySelector('.game-field__circle_blue_1');
const trackGreenSecond = document.querySelector('.game-field__circle_green_2');
const trackBrownSecond = document.querySelector('.game-field__circle_brown_2');
const trackBlueSecond = document.querySelector('.game-field__circle_blue_2');
const trackGreenThird = document.querySelector('.game-field__circle_green_3');
const trackBrownThird = document.querySelector('.game-field__circle_brown_3');
const trackBlueThird = document.querySelector('.game-field__circle_blue_3');





//Объявляем архивы идентификторов карт
const blueCardsId = [];
const brownCardsId = [];
const greenCardsId = [];
//Заполняем архивы идентификаторов карт согласно сложности
getSimpleDeck (greenCardsData, greenCardsId);
getSimpleDeck (brownCardsData, brownCardsId);
getSimpleDeck (blueCardsData, blueCardsId);



const stageOneCards = [],
	  stageTwoCards = [],
	  stageThreeCards = [];
getStageDecks('azathoth');
let cardsQuantity = stageOneCards.length + stageTwoCards.length + stageThreeCards.length;

setTracker('azathoth');





deckShirt.addEventListener('click', () => {
	if (stageOneCards.length > 0) {
		if (blueCardsData.id.includes(stageOneCards.shift())) {
			
		}
	}
	cardsQuantity--;
	if (cardsQuantity === 0) {
		deckShirt.classList.add('hider');
	}
	console.log(cardsQuantity);
});


