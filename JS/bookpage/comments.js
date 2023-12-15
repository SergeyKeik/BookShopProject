  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  

  const elementToHide = document.getElementsByClassName('preloader')[0];
  const contentElement = document.getElementsByClassName('content')[0];
  
  fetch('https://jsonplaceholder.typicode.com/comments' + '?id=' + getRandomInt(1, 500).toString())
  .then(response => response.json())
  .then(data => {
    console.log(data)
    
    setTimeout(function() {
        elementToHide.style.display = 'none';
    }, 1000) 
    const name = JSON.stringify(data[0].name, null, 2)
    const email = JSON.stringify(data[0].email, null, 2)
    var comment = JSON.stringify(data[0].body, null, 2)
    comment = comment.replace(/\\n/g, '')
    console.log(comment.replace(/\\n/g, '<br>'))
    contentElement.innerHTML = '<pre>' + "Name: " + name + '<br>' + "Email: " + email + '<br>' + "Comment: " + comment + '</pre>'

  }).catch(error => {
    contentElement.innerHTML = '<p>Произошла ошибка...</p>';
});