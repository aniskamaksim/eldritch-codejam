import blueCardsData from './data/mythicCards/blue/index.js';
import brownCardsData from './data/mythicCards/brown/index.js';
import greenCardsData from './data/mythicCards/green/index.js';
import ancientsData from './data/ancients.js';


//collecting decks of cards
//������� ����� ����� �� �������

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
	settings.ancient = ancient;
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





//��������� ������ �������������� ����
const blueCardsId = [];
const brownCardsId = [];
const greenCardsId = [];
//��������� ������ ��������������� ���� �������� ���������
getSimpleDeck (greenCardsData, greenCardsId);
getSimpleDeck (brownCardsData, brownCardsId);
getSimpleDeck (blueCardsData, blueCardsId);



const stageOneCards = [],
	  stageTwoCards = [],
	  stageThreeCards = [];










//������� ������ ������ - ������������ �����
function shuffle (deck) {
	for (let i = deck.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[deck[i], deck[j]] = [deck[j], deck[i]];
	}
}
//������� ����� ����� ������ ��� ����� ������ ���������
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
//������� ����� ������ ��� ������ ���������
function getEasyDeck (data, output) {
	data.forEach(value => {
		if (value.difficulty !== 'hard') {
			output.push(value.id);
		}
	});
	shuffle(output);
}
//������� ����� ������ ��� ������� ���������
function getNormalDeck (data, output) {
	data.forEach(value => {
		output.push(value.id);
	});
	shuffle(output);
}
//������� ����� ������ ��� ������� ���������
function getHardDeck (data, output) {
	data.forEach(value => {
		if (value.difficulty !== 'easy') {
			output.push(value.id);
		}
	});
	shuffle(output);
}
//������� ����� ����� ������ ��� ����� ������� ���������
function getHellDeck (data, output) {
	data.forEach(value => {
		if (value.difficulty === 'hard') {
			output.push(value.id);
		}
	});
	data.forEach(value => {
		if (value.difficulty === 'normal') {
			output.push(value.id);
		}
	});
}
//����� ������� ������������ ���������
function currentDifficult(data, output) {
	if (settings.difficulty === 'simple') getSimpleDeck(data, output);
	if (settings.difficulty === 'easy') getEasyDeck(data, output);
	if (settings.difficulty === 'normal') getNormalDeck(data, output);
	if (settings.difficulty === 'hard') getHardDeck(data, output);
	if (settings.difficulty === 'hell') getHellDeck(data, output);
}
//������� ����� ����� �� �������
function getStageDecks (ancient) {
	ancientsData.forEach(value => {
		if (value.id === ancient) {
//���������� ������ ���������� ���� ������� �����
		const allGreen = value.firstStage.greenCards + value.secondStage.greenCards + value.thirdStage.greenCards;
		const allBrown = value.firstStage.brownCards + value.secondStage.brownCards + value.thirdStage.brownCards;
		const allBlue = value.firstStage.blueCards + value.secondStage.blueCards + value.thirdStage.blueCards;
		const greenCardsSet = greenCardsId.slice(0, allGreen);
		const brownCardsSet = brownCardsId.slice(0, allBrown);
		const blueCardsSet = blueCardsId.slice(0, allBlue);
		shuffle(greenCardsSet);
		shuffle(brownCardsSet);
		shuffle(blueCardsSet);
//������ ������
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
//������ ������
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
//������ ������	
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
/*������� ���������� �������
function setTracker (ancient) {
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
}*/
//������� ������������ ���� �� ���� � ��������� �������
function getCardsOn () {
//��������� �������� ������� � ��������� ������ �� �����
let currentCardUrl;
//������ ������
if (stageOneCards.length > 0) {
	let currentCard = stageOneCards.shift()
	console.log(currentCard);
	greenCardsData.forEach(value => {
		if (value.id === currentCard) {
			currentCardUrl = value.cardFace;
			trackGreenFirst.textContent -= 1;
		}
	});
	brownCardsData.forEach(value => {
		if (value.id === currentCard) {
			currentCardUrl = value.cardFace;
			trackBrownFirst.textContent -= 1;
		}
	});
	blueCardsData.forEach(value => {
		if (value.id === currentCard) {
			currentCardUrl = value.cardFace;
			trackBlueFirst.textContent -= 1;
		}
	});
//���� ������ ������ ����������� - ���������� ������
} else if (stageTwoCards.length > 0) {
	let currentCard = stageTwoCards.shift()
	console.log(currentCard);
	greenCardsData.forEach(value => {
		if (value.id === currentCard) {
			currentCardUrl = value.cardFace;
			trackGreenSecond.textContent -= 1;
		}
	});
	brownCardsData.forEach(value => {
		if (value.id === currentCard) {
			currentCardUrl = value.cardFace;
			trackBrownSecond.textContent -= 1;
		}
	});
	blueCardsData.forEach(value => {
		if (value.id === currentCard) {
			currentCardUrl = value.cardFace;
			trackBlueSecond.textContent -= 1;
		}
	});
//���� ������ ������ ����������� - ���������� ������
} else if (stageThreeCards.length > 0) {
	let currentCard = stageThreeCards.shift()
	console.log(currentCard);
	greenCardsData.forEach(value => {
		if (value.id === currentCard) {
			currentCardUrl = value.cardFace;
			trackGreenThird.textContent -= 1;
		}
	});
	brownCardsData.forEach(value => {
		if (value.id === currentCard) {
			currentCardUrl = value.cardFace;
			trackBrownThird.textContent -= 1;
		}
	});
	blueCardsData.forEach(value => {
		if (value.id === currentCard) {
			currentCardUrl = value.cardFace;
			trackBlueThird.textContent -= 1;
		}
	});
} 
// ���� ����� ����������� - ���� ��������
cardsQuantity--;
if (cardsQuantity === 0) {
	deckShirt.classList.add('hider');
}
//����������� ������� ���������� �����
const card = document.createElement('img');
card.src = currentCardUrl;
card.classList.add('deck-stack');
openCard.append(card);
}
//������� ������� �����
function cleanTable() {
	blueCardsId.splice(0);
	brownCardsId.splice(0);
	greenCardsId.splice(0);
	stageOneCards.splice(0);
	stageTwoCards.splice(0);
	stageThreeCards.splice(0);
	cardsQuantity = 0;
	openCard.innerHTML = '';
	deckShirt.classList.remove('hider');
}
//������� ������ ��������
function chooseAncient() {
	ancientRadios.forEach(node => {
		if (node.checked === true) {
			settings.ancient = node.value;
		}
		if (settings.ancient && settings.difficulty) {
			startButton.classList.remove('hider');
			playTable.classList.add('hider');
			restart.classList.add('hider');
		}
		cleanTable();
	});
}
//������� ������ ���������
function chooseDifficult() {
	difficultRadios.forEach(node => {
		if (node.checked === true) {
			settings.difficulty = node.value;
		}
		if (settings.ancient && settings.difficulty) {
			startButton.classList.remove('hider');
			playTable.classList.add('hider');
			restart.classList.add('hider');
		}
		cleanTable();
	});
}
//������� ������� �����
function letsPlay() {
	//�������� ������ � ���������� ����
	startButton.classList.add('hider');
	playTable.classList.remove('hider');
	restart.classList.remove('hider');
	
	//��������� ������ id ���� �������� ���������
	currentDifficult(greenCardsData, greenCardsId);
	currentDifficult(brownCardsData, brownCardsId);
	currentDifficult(blueCardsData, blueCardsId);

	//�������� ������ ���� ��� ��������
	getStageDecks(settings.ancient);

	//������������� ��������� �������� ��� ��������
	cardsQuantity = stageOneCards.length + stageTwoCards.length + stageThreeCards.length;

	//��������� ������ �������
	setTracker(settings.ancient);

	//������ ������ �� �������
	shuffle(stageOneCards);
	shuffle(stageTwoCards);
	shuffle(stageThreeCards);

	//��������� �����, ������������ ������
	deckShirt.addEventListener('click', getCardsOn);
}
//������� �����������
function restartTable() {
	cleanTable();
	letsPlay();
}


const openCard = document.querySelector('.open-card');
const ancientRadios = document.querySelectorAll('.ancient-radio');
const startButton = document.querySelector('.knead-container');
const playTable = document.querySelector('.main__game-field');
const difficultRadios = document.querySelectorAll('.difficult-radio');
const restart = document.querySelector('.restart');


//���������
const settings = {
	ancient: undefined,
	difficulty: undefined
};


//������� ���� � ������
let cardsQuantity;

//��������� �� ����� ��������
ancientRadios.forEach(value => {
	value.addEventListener('change', chooseAncient)

});

//��������� �� ����� ���������
difficultRadios.forEach(value => {
	value.addEventListener('change', chooseDifficult)
});

//��������� �� ������ ����� - ������ �����
startButton.addEventListener('click', letsPlay);

//��������� �� ������ �������� ������
restart.addEventListener('click', restartTable);

