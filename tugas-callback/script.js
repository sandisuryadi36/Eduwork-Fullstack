import Table from "./table.js"

function createTable(data) {
    let table = new Table({
        columns: ["ID", "Name", "Username", "Email", "Address", "Company"],
        data: data
    })
    const app = document.getElementById("app")
    table.render(app)
}

let url = "https://jsonplaceholder.typicode.com/users"

let loadData = () => {
    fetch(url).then(data => data.json()).then(Users => {
        let userData = []
        Users.forEach(user => {
            userData.push([
                user.id,
                user.name,
                user.username,
                user.email,
                user.address.street + ", " + user.address.suite + ", " + user.address.city,
                user.company.name
            ])
        });

        createTable(userData)
    })
}

document.getElementById("btn-load").addEventListener("click", function () {
    document.getElementById("app").innerHTML = `<p>Loading...</p>`
    loadData()
})