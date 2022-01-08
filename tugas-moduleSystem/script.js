import Table from "./table.js"

const table = new Table({
    columns: ["Nama", "Umur", "Pekerjaan"],
    data: [
        ["Budi", 25, "PNS"],
        ["Tono", 30, "Pengusaha"],
        ["Handoko", 28, "Karyawan Swasta"],
    ]
})
const app = document.getElementById("app")
table.render(app)