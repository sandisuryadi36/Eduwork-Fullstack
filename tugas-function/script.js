function playerInput() {
    alert(`Ronde ${nowRonde}`)
    let a = prompt("Player 1\nMasukkan tebakan anda: ")
    let b = prompt("Player 2\nMasukkan tebakan anda: ")
    return {
        playerOne: a,
        playerTwo: b,
    }
}

function validateInput(a, b) {
    if (/[a-z]|[A-Z]/.test(a + b)) {    // cek apakah angka atau bukan
        return "Mohon masukkan angka!"
    } else if (!(a > 0 && a <= maxAngka) | !(b > 0 && b <= maxAngka)) {     // cek apakah input sesuai dengan range
        return `Masukkan angka antara ${minAngka} dan ${maxAngka}!`
    } else if (a == b) {                // cek apakah input sama
        return "Tebakan tidah boleh sama!"
    }
    return ""
}

function checkAnswer(x, a, b) {
    // cek ada pemenang atau tidak
    // tambahkan score jika ada pemenang
    // tambahkan nowRonde
    // printout hasil

    if (x == a) {
        playerOneScore++
        nowRonde++
        alert(`
Player 1 WIN!
-------------
angka tebakan adalah: ${x}
tebakan Player 1: ${a}
tebakan Player 2: ${b}`
        )
    } else if (x == b) {
        playerTwoScore++
        nowRonde++
        alert(`
Player 2 WIN!
-------------
angka tebakan adalah: ${x}
tebakan Player 1: ${a}
tebakan Player 2: ${b}`
        )
    } else {
        nowRonde++
        alert(`
Permainan Seri!
Tidak ada yang benar
-------------
angka tebakan adalah: ${x}
tebakan Player 1: ${a}
tebakan Player 2: ${b}`
        )
    }
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
let winner = ""
while (nowRonde <= ronde) {
    do {
        var input = playerInput()
        var validation = validateInput(input.playerOne, input.playerTwo)
        if (validation != "") {         // keluarkan pesan jika ada error
            alert(validation)
            alert("ulangi memasukkan tebakan!")
        }
    } while (validation != "")          // cek apakah ada error atau tidak, jika ada ulangi
    let x = Math.floor(Math.random() * maxAngka) + minAngka
    checkAnswer(x, input.playerOne, input.playerTwo)
}

// print out hasil akhir
if (playerOneScore != playerTwoScore) {
    if (playerOneScore > playerTwoScore) {
        winner = "Player 1"
    } else {
        winner = "Player 2"
    }

    alert(`::: GAME OVER :::
Pemenangnya adalah [${winner}]
Score:
Player 1 : ${playerOneScore}
Player 2 : ${playerTwoScore}`)
} else {
    alert(`::: GAME OVER :::
Permainan seri!
Score:
Player 1 : ${playerOneScore}
Player 2 : ${playerTwoScore}`)
}