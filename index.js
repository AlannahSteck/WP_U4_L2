function genKeyboard(){
    const letters = "abcdefghijklmnopqrstuvwxyz"
    const keyboard = document.getElementById("keyboard")

    for (let i = 0; i < 25; i++){
        const div = document.createElement("div")
        div.textContent = letters[i]
        keyboard.appendChild(div)
    }
}