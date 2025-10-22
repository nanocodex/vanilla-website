/*
    This script fetches a page and parses it into a DOM object.
    It can be used to load HTML content dynamically and manipulate it as needed.

    Reference: https://javascript.info/fetch
*/

fetch('somePage.html')
    .then(response => {
        // When the page is loaded convert it to text
        return response.text()
    })
    .then(html => {
        // Initialize the DOM parser
        const parser = new DOMParser()

        // Parse the text
        const doc = parser.parseFromString(html, "text/html")

        // You can now even select part of that html as you would in the regular DOM
        // Example:
        // const docArticle = doc.querySelector('article').innerHTML

        console.log(doc)
    })
    .catch(error => {
        console.error('Failed to fetch page: ', error)
    })