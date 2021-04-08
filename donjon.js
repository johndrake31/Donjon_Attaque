const TURN_INSTRC = document.getElementById("turn-instructions");
const ATTACK_BTNS = document.getElementById('attack-btn');
const DEFENSE_BTNS = document.getElementById("defense-btn");
const bossH = document.getElementById('bossHealth')
const playerH = document.getElementById('playerHealth');

alert('VOUS AVEZ RENCONTRÉ LE DONJON MASTER!!!! Préparez - vous à vous battre!');


//Game Logic
const BOSS_ATTAQUE = 6;
let choiceTable = ['bois', 'fer', 'magique'];
let attackTable = [2, 5, 10];
let defenseTable = [1, 3, 5];
let playerHealth = 100;
let bossHealth = 150;
let attack = true;

let playerAtkCount = 0;
let playerDefCount = 0;
let finalAttack = 0;

//display options
TURN_INSTRC.innerHTML = "choisir une Attaque!!!";
bossH.innerHTML = `Boss Health: ${bossHealth}`;
playerH.innerHTML = `Player Health: ${playerHealth}`;


ATTACK_BTNS.addEventListener('click', e => {
    let btn = e.target;
    attackOption = btn.innerHTML;
    bossHealth -= attackTable[+btn.value];
    bossH.innerHTML = `Boss Health: ${bossHealth}`;
    TURN_INSTRC.innerHTML = "choisir une Defense!!!";
    ATTACK_BTNS.style.display = "none";
    DEFENSE_BTNS.style.display = "";
})


DEFENSE_BTNS.addEventListener('click', e => {
    let btn = e.target;
    console.log(btn.value);
    bossHealth
    TURN_INSTRC.innerHTML = "choisir une Attaque!!!";
    ATTACK_BTNS.style.display = "";
    DEFENSE_BTNS.style.display = "none";
    alert(`Boss Attack!!! ${BOSS_ATTAQUE - playerDefCount}`);
})


//chose a defense


//calc boss attack
//