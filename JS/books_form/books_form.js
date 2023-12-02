function add(event) {
    event.preventDefault();

    var author = document.getElementById("author_input")
    var book = document.getElementById("book_input")

    var item = {
        author: author.value,
        book: book.value
    };

    var items = JSON.parse(localStorage.getItem("items")) || [];

    items.push(item);

    localStorage.setItem("items", JSON.stringify(items));

    var result = generate(author.value,  book.value);

    document.getElementsByClassName("books_form__resultContainer")[0].innerHTML += result + "<br>";

}

function generate(author, book) {
    return author + " " + book;
}

function displayItemsFromStorage() {
    var items = JSON.parse(localStorage.getItem("items")) || [];
    var resultContainer = document.getElementsByClassName("books_form__resultContainer")[0];
    resultContainer.innerHTML = "";
  
    items.forEach((item) => {
      var result = generate(item["author"], item["book"]);
      resultContainer.innerHTML += result + "<br>";
    });
  }

//var items = JSON.parse(localStorage.getItem("items")) || [];
// var resultContainer = document.getElementsByClassName("books_form__resultContainer")[0];
// items.forEach(function(item) {
//     var result = generate(item.author, item.book2);
//     resultContainer.innerHTML += result + "<br>";
// });
(function() {
    window.onload = function() {
      displayItemsFromStorage();
    };
  })();