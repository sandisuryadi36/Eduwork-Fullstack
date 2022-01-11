import loadContent from "./content.js"

const content = document.getElementById("content")
let lang = "id"
let category = "general"
let searchQuery = ""

// render home view
function goHome() {
    const home = new loadContent(lang, category, searchQuery)
    home.render(content)
}
goHome()

// search script
function searchNow() {
    searchQuery = document.getElementById("search-bar").value
    const search = new loadContent(lang, category, searchQuery)
    search.render(content)
}

document.getElementById("search-btn").addEventListener("click", searchNow)

document.getElementById("search-bar").addEventListener("focus", function () {
    console.log(document.getElementById("live-search-check").checked)
    if (document.getElementById("live-search-check").checked) {
        document.getElementById("search-bar").addEventListener("keyup", searchNow)
    } else {
        document.getElementById("search-bar").removeEventListener("keyup", searchNow)
    }
})