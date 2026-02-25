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