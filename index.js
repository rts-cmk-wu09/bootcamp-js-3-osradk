const main = document.querySelector("main");

let params = new URLSearchParams(document.location.search);
let pageName = params.get("page");

if (pageName != null){
    fetch(pageName)
        .then(page=> page.text())
        .then(text=> main.innerHTML = text)
}
//kilde: https://www.delftstack.com/howto/javascript/load-html-file-javascript/
