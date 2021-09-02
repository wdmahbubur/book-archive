const loadBookData = () => {
    const searchItem = document.getElementById('search-book');
    console.log(searchItem.value)
    fetch(`http://openlibrary.org/search.json?q=${searchItem.value}`)
        .then(res => res.json())
        .then(data => showSearchResult(data));
}

const showSearchResult = data => {
    // console.log(data);
    if (data.docs.length === 0) {
        return alert('No Books Found!');
    }
    const numberOfBooks = document.getElementById('number-of-books');
    numberOfBooks.innerText = `Total ${data.docs.length} Books Found`;
    let count = 0;
    const searchResultShow = document.getElementById('search-result-show');
    searchResultShow.innerHTML = '';
    data.docs.forEach(element => {
        if (count === 30) {
            return;
        } else {
            // console.log(element);
            const col = document.createElement('div');
            col.classList.add('col');
            col.innerHTML = `
            <div class="card h-100 p-2">
                <img src="https://covers.openlibrary.org/b/id/${element.cover_i}-M.jpg" class="card-img-top" alt="">
                
                <div class="card-body px-0 h-100">
                    <h4 class="card-title">${element.title}</h4>
                    <h6 class="card-text">Author: ${element.author_name !== undefined ? element.author_name[0] : "No Author Found"}</h6>
                    <h6 class="card-text">Publisher: ${element.publisher !== undefined ? element.publisher[0] : "No Publisher Found"}</h6>
                    <h6 class="card-text">Publish Year: ${element.first_publish_year}${element.first_publish_year !== undefined ? element.first_publish_year : "No Publish Year Found"}</h6>
                </div >
            </div >
            `;
            searchResultShow.appendChild(col);
            count += 1;
        };
    });
};