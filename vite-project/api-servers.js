// const BASE_URL = 'https://newsapi.org/v2/everything/'
// const API_KEY = '3ce63eea477043d7a470d2b21dc5ab4b'

// const options = {
//     headers: {
//         'Authorization': API_KEY
//     },

// }


// export class NewsApiService {
//     constructor() {
//         this.page = 1;
//          this.searchQery = '';
//     }

//     searchArticles = ()=>{
//     return fetch(`${BASE_URL}?q=${this.searchQery}&pagesSize=20&page=${this.page}`, options)
//         .then(response => response.json())
//        .then(res => res.articles)
// }

// }
// 11
const input = document.getElementById('name')
function urNames() {   
}
input.addEventListener('input',() => {
    const urNames = document.getElementById('urNames')
    urNames.textContent = input.value

})
// 2
document.getElementById('form')
const form = document.getElementById('e-form');
        const form = document.getElementById('form');

        form.addEventListener('submit', function(event) {
            setTimeout(( form), 1500);
        });