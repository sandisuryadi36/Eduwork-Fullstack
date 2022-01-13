import loadContent from "./content.js"

const content = document.getElementById("content")
let lang = "id"
let category = "general"
let searchQuery = ""
let page = 1

// render home view
goHome()

function goHome() {
    const home = new loadContent(lang, category, searchQuery, page)
    home.render(content)
}

// view vontent
function viewContent(lang, category, searchQuery, page) {
    const view = new loadContent(lang, category, searchQuery, page)
    view.render(content)
}

// search script
function searchNow() {
    searchQuery = document.getElementById("search-bar").value
    page = 1
    viewContent(lang, category, searchQuery, page)
}

function timeOutInput() {
    clearTimeout(timer);
    timer = setTimeout(function () {
        searchNow()
    }, 500)
}

// document.getElementById("search-btn").addEventListener("click", searchNow)

let timer
document.getElementById("search-bar").addEventListener("focus", function () {
    if (document.getElementById("live-search-check").checked) {
        document.getElementById("search-bar").addEventListener("input", timeOutInput)
    } else {
        document.getElementById("search-bar").removeEventListener("input", timeOutInput)
    }
})

// pagination script
function prevPage(x) {
    page = x
    viewContent(lang, category, searchQuery, page)
}
function nextPage(x) {
    page = x
    viewContent(lang, category, searchQuery, page)
}

function viewCategory(categoryInput) {
    category = categoryInput
    document.getElementById("search-bar").value=""
    searchQuery = ""
    page = 1
    viewContent(lang, category, searchQuery, page)
}

window.searchNow= searchNow
window.prevPage = prevPage
window.nextPage = nextPage
window.viewCategory = viewCategory