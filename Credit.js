class Credit {
    formatListAsText(authors) {
        if (authors.length === 1) {
            return authors[0]
        } else if (authors.length === 2) {
            return authors[0] + " and " + authors[1]
        } else {
            const lastAuthor = authors.pop()
            return authors.join(", ") + ", and " + lastAuthor
        }
    }

    getAuthorText() {
        if (typeof(metadata) === 'undefined' || metadata === null
            || metadata.authors === undefined || metadata.authors === null
            || metadata.authors.length === 0) {
            return "unknown"
        } else {
            const authors = metadata.authors.slice()
            return this.formatListAsText(authors)
        }
    }

    updateHtml() {
        const authorText = this.getAuthorText()
        document.getElementById('authors').innerHTML = authorText
    }
}
