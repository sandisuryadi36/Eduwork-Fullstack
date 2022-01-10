import homeContent from "./content/home.js"

const home = new homeContent("id")
const content = document.getElementById("content")
home.render(content)