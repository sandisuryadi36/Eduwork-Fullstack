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

let timer
document.getElementById("search-bar").addEventListener("focus", function () {
    if (document.getElementById("live-search-check").checked) {
        document.getElementById("search-bar").addEventListener("keyup", function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                searchNow()
            }, 1000)
        })
    } else {
        document.getElementById("search-bar").removeEventListener("keyup", function(){})
    }
})