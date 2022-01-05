let input = prompt("Input nilai: ");

switch (true) {
    case (input >= 80 && input <= 100): {
        alert("Nilai anda A")
        break
    }
    case (input >= 60 && input < 80): {
        alert("Nilai anda B")
        break
    }
    case (input >= 40 && input < 60): {
        alert("Nilai anda C")
        break
    }
    case (input >= 20 && input < 40): {
        alert("Nilai anda D")
        break
    }
    case (input >= 0 && input < 20): {
        alert("Nilai anda E")
        break
    }
    default: {
        alert("Input tidak valid!")
        break
    }
}