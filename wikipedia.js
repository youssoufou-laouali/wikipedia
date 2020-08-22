const n = 10
const input = document.getElementById('input')
const submit = document.getElementById('submit')
var border = document.querySelectorAll('.border')
var title = document.querySelectorAll('.title')
var description = document.querySelectorAll('.description')
var a = document.querySelectorAll('.a')
var mot = 'javascript'

function generer() {
    fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${mot}`, {
            headers: {
                "Content-Type": "text/plain;charset=UTF-8"
            }
        })
        .then(reponse => reponse.json())
        .then(reponse => {
            for (let i = 0; i < n; i++) {
                border[i].style.display = 'block'
                title[i].textContent = reponse.query.search[i].title
                description[i].innerHTML = reponse.query.search[i].snippet
                a[i].setAttribute("href", "https://en.wikipedia.org/wiki/" + reponse.query.search[i].title)
            }
        })
}



input.addEventListener('keyup', function(e) {
    mot = e.target.value;
    generer();

})

submit.addEventListener('click', function(event) {
    event.preventDefault()
    mot = input.value
})