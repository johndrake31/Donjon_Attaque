const TURN_INSTRC = document.getElementById("turn-instructions");
const ATTACK_BTNS = document.getElementById('attack-btn');
const DEFENSE_BTNS = document.getElementById("defense-btn");

alert('VOUS AVEZ RENCONTRÉ LE DONJON MASTER!!!! Préparez - vous à vous battre!');

let playerHealth = 100;
let bossHealth = 150;

let attack = true;
let bossAttack = false;
const BOSS_ATTAQUE = 6;
let choiceTable = ['bois', 'fer', 'magique'];
let attackTable = [2, 5, 10];
let defenseTable = [1, 3, 5];


let htmlMsg = TURN_INSTRC.innerHTML = "choisir une attaque!!!";
let attackDisplay = ATTACK_BTNS.style.display = '';

ATTACK_BTNS.addEventListener('click', e => {
    let btn = e.target;
    console.log(btn.innerHTML);


})





//chose a defense


//calc boss attack
//