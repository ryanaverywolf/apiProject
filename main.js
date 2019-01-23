var ghibliTitleList = document.querySelector("ul");

fetch("https://ghibliapi.herokuapp.com/films")

.then(function(response) { 
    return response.json(); 
})
.then(function(json) {
    let title = json;
console.log(title);
    for(t of title) {
        let listItem = document.createElement("li");
        listItem.innerHTML = "<p>"+ t.title + "</p>";
        ghibliTitleList.appendChild(listItem);
    }
});

var ghibliReleaseDate = document.querySelector("ul");

fetch("https://ghibliapi.herokuapp.com/films")

.then(function(response) { 
    return response.json(); 
})
.then(function(json) {
    let release_date = json;
console.log(release_date);
    for(d of release_date) {
        let listItem = document.createElement("li");
        listItem.innerHTML = "<p>"+ d.release_date + "</p>";
        ghibliReleaseDate.appendChild(listItem);
    }
});