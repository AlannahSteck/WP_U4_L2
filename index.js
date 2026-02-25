function genKeyboard(){
    const letters = "abcdef*ghijkl*mnopqr*stuvwx*yz"
    const keyboard = document.getElementById("keyboard")
    let pointer = 0;

    for (let i = 0; i < 6; i++){
        const row = document.createElement("div");
        row.className = "keyboardRow";
        while(letters[pointer] != "*" && pointer < 30){
            const key = document.createElement("div");
            key.className = "keyboardKey";
            key.id = letters[pointer];
            key.textContent = letters[pointer].toUpperCase();
            row.appendChild(key);
            pointer++;
        }
        keyboard.append(row);
        pointer++
    }
}

function genPhrase(){
    const phrases = [`I'm afraid you're ratted your last tatouille`, 
        "my apolocheese", 
        "Sniff sniff sniff hello sniff sniff hi hi sniff",
        "Crazy? I was crazy once",
        "Excuse me, Do you have time to talk about our lord and saviour cheesus", 
        "Rat clenches Fist of Rage", 
        "SNFNFSN SNNNFFFFF SNIFF SNIFF SNIFF SNFNFNFNF",
        `We're not on squeaking terms rn`,
        "Rats are not a mice thing to have in your house.",
        "Live, Laugh, cheese"]

        const n = Math.floor(Math.random() * phrases.length)

    const random_phrase = phrases[n];
    const phrasetext = document.getElementById("phraseText");
    console.log(random_phrase)
    phrasetext.textContent = random_phrase;




}