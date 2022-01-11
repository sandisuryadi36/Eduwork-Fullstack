import loadContent from "./content/content.js"

const content = document.getElementById("content")

// render home view
const home = new loadContent("id", "general","")
home.render(content)

