const title = document.getElementById("title"); 

const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://127.0.0.1:8000/');
xhr.addEventListener("load", function() {
    let result = JSON.parse(this.responseText).r
    title.innerText = result.name + ' 레벨 : ' + result.summonerLevel;
});
xhr.send();