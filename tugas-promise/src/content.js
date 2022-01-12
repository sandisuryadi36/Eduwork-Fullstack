class loadContent {
    constructor(lang, category, q) {
        this.token = "5be7d56373774432b6f59713eebbfdba"
        if (q != "") {
            this.url = `https://newsapi.org/v2/everything?q=${q}&language=${lang}&apiKey=${this.token}`
            this.header = `Shearch result for "${q}"`
        } else {
            this.url = `https://newsapi.org/v2/top-headlines?language=${lang}&category=${category}&apiKey=${this.token}`
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
                result = this.loadCards(cards)
            } else if (dataJSON.status == "ok") {
                result = `<p>No result found</p>`
            } else if (dataJSON.status == "error") {
                result = `<p>${dataJSON.message}</p>`
            }

            let content =
                `<h1 class="my-3">${this.header}</h1>` +
                `<div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3">` +
                result +
                `</div>`
            element.innerHTML = content
        })
            .catch(err => {
                element.innerHTML = err.message
            })
    }
}

export default loadContent