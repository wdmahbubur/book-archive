const loadBookData = () => {
    const searchItem = document.getElementById('search-book');
    console.log(searchItem.value)
    fetch(`http://openlibrary.org/search.json?q=${searchItem.value}`)
        .then(res => res.json())
        .then(data => showSearchResult(data));
}

const showSearchResult = data => {
    console.log(data);
    const numberOfBooks = document.getElementById('number-of-books');
    numberOfBooks.innerText = `Total ${data.numFound} Books Found`;
}