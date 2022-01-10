class homeContent {
    constructor(country) {
        this.token = "5be7d56373774432b6f59713eebbfdba"
        this.url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${this.token}`
    }

    loadCards(cards) {
        let cardHTML = ""
        cards.forEach(card => {
            let cardContent = `
            <div class="col">
                <div class="card">
                    <img class="card-img-top"
                        src="${card.urlToImage}"
                        alt="">
                    <div class="card-body">
                        <h4 class="card-title">${card.title}</h4>
                        <p class="card-text">${card.description}</p>
                    </div>
                </div>
            </div>
            `
            cardHTML += cardContent
        });
        return cardHTML
    }

    render(element) {
        fetch(this.url).then(data => data.json()).then(dataJSON => {
            let cards = []
            dataJSON.articles.forEach(article => {
                cards.push(article)
            });

            let content =
                `<h1>Headline News</h1>` +
                `<div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3">` +
                this.loadCards(cards) +
                `</div>`
            element.innerHTML = content
        })
    }
}

export default homeContent