console.log("Let's get this party started!");
const formElement = document.querySelector('form');
const input = document.querySelector('#searchForm')
const gifDiv = document.querySelector('#gifStorage');

let searchTerm;

formElement.addEventListener('submit', function (e){
    e.preventDefault();
    searchTerm = input.value.trim();
    console.log(searchTerm);
    getGif(searchTerm);
});

async function getGif (searchTerm){
    try {
        let res = await axios.get("https://api.giphy.com/v1/gifs/search", {
            params: {
                api_key: 'tCctKD3hpR0TE4rMZ6LGuGgcm79cbXNH',  
                q: searchTerm, 
                limit: 1, 
                lang: 'en'
            }
        });
        // console.log(res);
    
       
        let newImg = document.createElement('img');
        newImg.src = res.data.data[0].images.original.url;
        newImg.classList.add('gifs');
        gifDiv.append(newImg);
    
    
        
    } catch (error) {
        console.log(error);
        alert('oops search not found');
    }


}

const gifs = document.querySelector('#gifStorage');
// gifs.addEventListener('click', function (event){
//     if (event.target.classList.contains('gifs')){
//         event.target.remove();
//     }
// });

const removeAll = document.querySelector('#removeAll')

removeAll.addEventListener('click', function(){
    gifs.innerHTML = '';
})