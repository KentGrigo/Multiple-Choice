class Credit {
    getAuthorText() {
        var authorText = ""
        if (typeof(metadata) === 'undefined' || metadata === null
            || metadata.authors === undefined || metadata.authors === null
            || metadata.authors.length === 0) {
            authorText = "unknown"
        } else {
            const authors = metadata.authors.slice()
            if (authors.length === 1) {
                authorText = authors[0]
            } else if (authors.length === 2) {
                authorText = authors[0] + " and " + authors[1]
            } else {
                const lastAuthor = authors.pop();
                authorText = authors.join(", ") + ", and " + lastAuthor;
            }
        }
        return authorText
    }

    updateHtml() {
        const authorText = this.getAuthorText()
        document.getElementById('authors').innerHTML = authorText
    }
}
