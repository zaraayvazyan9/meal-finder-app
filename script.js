// Menu function
function burgermenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
document.addEventListener("submit", burgermenu);

// Search function
// const API_Key = "8e4669c252cd8c46bd10e12b16db058a";


function handleSubmit(e) {
  let text = document.getElementById("searchText").value;
  let imgElem = document.getElementById("imgElement");
  let query =
    'https://api.edamam.com/search?q=${text}&app_id=225b43f6&app_key=8ca7eadc17dbccc23e301761ab625c3e&from=0&to=3';

  // do a search
  fetch(query)
    .then((response) => response.json())
    .then((data) {
      console.log(data);
      let url = data.hits[0].recipe.image;
      console.log(url);
      imgElem.src = url;
    });

  //put the image in the div
  
  imgElem.src =
    "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg";
}
document.getElementById("searchButton").addEventListener("click", handleSubmit);
