class Table {
    constructor(input) {
        this.input = input
    }

    createHeader(_headers) {
        let inHtml = "<thead><tr>"
        _headers.forEach((_col) => {
            inHtml += `<th>${_col}</th>`
        })
        inHtml += "</tr></thead>"
        return inHtml
    }

    createBody(_rows) {
        let inHtml = "<tbody>"
        _rows.forEach((_row) => {
            inHtml += "<tr>"
            _row.forEach((x) => {
                inHtml += `<td>${x}</td>`
            })
            inHtml += "</tr>"
        })
        inHtml += "</tbody>"
        return inHtml
    }

    render(element) {
        let table =
            "<table class='table'>" +
            this.createHeader(this.input.columns) +
            this.createBody(this.input.data) +
            "</table>"
        element.innerHTML = table
    }
}

export default Table