const button = document.getElementById("btn");
const p = document.querySelector("p");
const heading = document.querySelector("h4");

button.addEventListener('click',()=>{
    async function getQuotes() {
        const fetchUrl = await fetch("http://api.quotable.io/random");
        let data = await fetchUrl.json();
        console.log(data);
        p.textContent = data.content;
        heading.textContent = data.author;
    }
    getQuotes();
})
