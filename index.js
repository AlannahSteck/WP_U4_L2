var alpha = "abcdef*ghijkl*mnopqr*stuvwx*yz";
var letters = []; 
var random_phrase = ""
var game_status = true
var tries = 7

function genKeyboard(){
    
    const keyboard = document.getElementById("keyboard");
    let pointer = 0;

    for (let i = 0; i < 6; i++){
        const row = document.createElement("div");
        row.className = "keyboardRow";
        while(alpha[pointer] != "*" && pointer < 30){
            const key = document.createElement("div");
            key.className = "keyboardKey";
            key.id = alpha[pointer];
            key.textContent = alpha[pointer].toUpperCase();
            key.onclick = function(){keyPress(key)};
            row.appendChild(key);
            pointer++;
        }
        keyboard.append(row);
        pointer++
    }
}

function genPhrase(){
    const phrases = [`I'm afraid you've ratted your last tatouille`, 
        "my apolocheese", 
        "Sniff sniff sniff hello sniff sniff hi hi sniff",
        "Crazy? I was crazy once",
        "Excuse me, Do you have time to talk about our lord and saviour cheesus", 
        "Rat clenches Fist of Rage", 
        "SNFNFSN SNNNFFFFF SNIFF SNIFF SNIFF SNFNFNFNF",
        `We're not on squeaking terms rn`,
        "Rats are not a mice thing to have in your house.",
        "Live, Laugh, cheese"];

    

    const n = Math.floor(Math.random() * phrases.length);

    random_phrase = phrases[n].toLowerCase();
    const phrasetext = document.getElementById("phraseText");
    console.log(random_phrase);
    phrasetext.textContent = random_phrase;
    let hidden_phrase = "";

    for (i = 0; i < random_phrase.length; i++){

        if (alpha.includes(random_phrase[i])){
            if(!letters.includes(random_phrase[i])){
                letters.push(random_phrase[i]);
            }
            hidden_phrase = hidden_phrase + "_";

        }

        else{
             hidden_phrase = hidden_phrase + random_phrase[i]
        }
    }
    phrasetext.textContent = hidden_phrase;

    console.log(letters);
}

function keyPress(key){
    if(game_status){
    const phrasetext = document.getElementById("phraseText");
    const letter = key.id;

    if(letters.includes(letter)){
        letters.splice(letters.indexOf(letter),1)
        console.log(letters)
        
        for(let i = 0; i < random_phrase.length; i++){
            if(random_phrase[i] == letter){
                phrasetext.textContent = (phrasetext.textContent.slice(0,i) + letter + phrasetext.textContent.slice(i+1))
            }
        }
        key.className = "clickedKey"
        key.onclick = null
        if (letters.length == 0){
            gameWin()
        }
    }

    else{
        key.className = "clickedKey"
        key.onclick = null
        tries = tries - 1
        if(tries == 0){
            gameLose()
        }
        else{
            try_status = document.getElementById("triesAndWinStatus")
            try_status.textContent = `Tries : ${tries}`
            document.querySelector("video").src = `Resources/index/rat_${tries}.mp4`
        }
        }
    }
}

function gameWin(){
    win_status = document.getElementById("triesAndWinStatus")
    win_status.textContent = "Cheese :D (You Win)"
    game_status = false
    document.querySelector("video").src = `Resources/index/rat_win.mp4`
}

function gameLose(){
    win_status = document.getElementById("triesAndWinStatus")
    win_status.textContent = "No Cheese (You Lose)"
    game_status = false
    document.querySelector("video").src = `Resources/index/rat_lose.mp4`
}

function reset(){
    window.location.reload();
}