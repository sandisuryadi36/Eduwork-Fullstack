class loadContent {
    constructor(lang, category, q, page) {
        // this.token = "5be7d56373774432b6f59713eebbfdba"
        this.token = "48fc76a73f9342b690e5a4bed5e4d1c7"
        this.page = page
        if (q != "") {
            if (category != "general") {
                this.url = `https://newsapi.org/v2/top-headlines?q=${q}&language=${lang}&category=${category}&page=${page}&apiKey=${this.token}`
                this.header = `Shearch result for "${q}" in ${category.charAt(0).toUpperCase() + category.slice(1)}`
            } else {
                this.url = `https://newsapi.org/v2/everything?q=${q}&language=${lang}&page=${page}&apiKey=${this.token}`
                this.header = `Shearch result for "${q}"`
            }
        } else {
            this.url = `https://newsapi.org/v2/top-headlines?language=${lang}&category=${category}&page=${page}&apiKey=${this.token}`
            if (category == "general") {
                this.header = "Headline News"
            } else {
                this.header = category.charAt(0).toUpperCase() + category.slice(1)
            }
        }
    }

    loadCards(cards) {
        let cardHTML = ""
        cards.forEach(card => {
            let d = new Date(card.publishedAt)
            let cardContent = `
            <div class="col">
                <div class="card">
                    <img class="card-img-top"
                        src="${card.urlToImage}"
                        alt="">
                    <div class="card-body">
                        <p class="card-text"><small class="text-muted">Source: ${card.source.name}</small></p>
                        <h4 class="card-title"><a href="${card.url}" target="_blank">${card.title}</a></h4>
                        <p class="card-text">${card.description}</p>
                        <p class="card-text"><small class="text-muted">Published at: ${d.toDateString()}</small></p>
                    </div>
                </div>
            </div>
            `
            cardHTML += cardContent
        });
        return cardHTML
    }

    render(element) {
        element.innerHTML = `
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        `
        fetch(this.url).then(data => data.json()).then(dataJSON => {
            let result = ""
            if (dataJSON.totalResults != 0 && dataJSON.status == "ok") {
                let cards = []
                dataJSON.articles.forEach(article => {
                    cards.push(article)
                })

                function pageView(page) {
                    let view = ""
                    if (page != 1) {
                        view += `
                        <li class="page-item" onclick="prevPage(${page-1})">
                            <a class="page-link" href="#">Previous</a>
                        </li>
                        `
                    } else {
                        view += `
                        <li class="page-item disabled">
                                <a class="page-link">Previous</a>
                            </li>
                        `
                    }

                    let s
                    if (page - 2 <= 1) {
                        s = 1
                    } else s = page - 2
                    for (let i = s; i < page; i++){
                        view += `
                        <li class="page-item" onclick="prevPage(${i})"><a class="page-link" href="#">${i}</a></li>`
                    }

                    view += `<li class="page-item active"><a class="page-link">${page}</a></li>`

                    for (let i = page; i < page + 2; i++){
                        if ((dataJSON.totalResults - (i * 20)) > 0) {
                            view += `<li class="page-item"><a class="page-link" href="#" onclick="nextPage(${i+1})">${i+1}</a></li>`
                        }
                    }
                    if ((dataJSON.totalResults - (page*20)) > 0) {
                        view += `
                            <li class="page-item" onclick="nextPage(${page+1})">
                                <a class="page-link" href="#">Next</a>
                            </li>
                            `
                    } else {
                        view += `
                        <li class="page-item disabled">
                                <a class="page-link">Next</a>
                            </li>
                        `
                    }
                    return view
                }

                function pagination(page) {
                    let view = `
                    <nav aria-label="Page navigation" class="container" id="pagination">
                        <ul class="pagination pagination-sm justify-content-end">
                            ${pageView(page)}
                        </ul>
                    </nav>
                    `
                    return view
                }

                result = pagination(this.page)
                result += `<div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3">`
                result += this.loadCards(cards)
                result += `</div>`
                result += pagination(this.page)

            } else if (dataJSON.status == "ok") {
                result = `<p>No result found</p>`
            } else if (dataJSON.status == "error") {
                result = `<p>${dataJSON.message}</p>`
            }

            let content =
                `<h1 class="my-3">${this.header}</h1>` +
                result
            element.innerHTML = content
        })
            .catch(err => {
                element.innerHTML = err.message
            })
    }
}

export default loadContent