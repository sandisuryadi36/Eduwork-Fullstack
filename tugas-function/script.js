function playerInput() {
    return {
        playerOne: a,
        playerTwo: b,
    }
}

function validateInput(a, b) {
    return ""
}

function checkAnswer(x, a, b) {
    // cek ada pemenang atau tidak
    // printout hasil
    // tambahkan score jika ada pemenang
    // tambahkan nowRonde jika ada pemenang

}


// main script

const ronde = 5
const minAngka = 1
const maxAngka = 3

alert(`::: GAME TEBAK ANGKA :::
Dalam game ini anda akan menebak angka antara ${minAngka}-${maxAngka}. Player yang mendapatkan score terbanyak selama ${ronde} ronde adalah pemenangnya.
Selamat bermain!!`)

let nowRonde = 1
let playerOneScore = 0
let playerTwoScore = 0
while (nowRonde <= 5) {
    do {
        var input = playerInput()
        var validation = validateInput(input.playerOne, input.playerTwo)
        if (validation != "") {
            alert(validation)
            alert("ulangi memasukkan tebakan!")
        }
    } while (validation != "")
    let x = randomNuber()
    checkAnswer(x, input.playerOne, input.playerTwo)
}
let winner = () => {
    if (playerOneScore > playerTwoScore) {
        return "Player 1"
    } else {
        return "Player 2"
    }
}

alert(`::: GAME OVER :::
Pemenangnya adalah ${winner}
Score:
Player 1 : ${playerOneScore}
Player 2 : ${playerTwoScore}`)