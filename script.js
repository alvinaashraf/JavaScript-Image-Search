const access_key='Cxv-ZS4hUK5lHmb1oVbMXANyAhKzkVFCORrPsM0m2bY';


const form=document.querySelector('form');


const searchinput=document.getElementById('search-input');

 const searchresults=document.querySelector('.search-results');


 const show_more=document.getElementById('show_more');

let inputData='';
let page=1;
async function searchImages(){
	inputData=searchinput.value;
const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${access_key}`;

const response=await fetch(url);
const data=await response.json();
console.log(data);
if(page === 1){
	searchresults.innerHTML=``;
}

const results=data.results;

results.map((result)=>{
	const searchresultwrapper=document.createElement('div');
searchresultwrapper.classList.add('search-result');
const image=document.createElement('img');
image.src=result.urls.small;
image.alt=result.alt_description;
const image_link=document.createElement('a');
image_link.href=result.links.html;
image_link.target="_blank";
image_link.textContent=result.alt_description;
searchresultwrapper.appendChild(image);
searchresultwrapper.appendChild(image_link);
searchresults.appendChild(searchresultwrapper);

});

page++;



if(page > 1){
show_more.style.display="block";
}


console.log(results)
}








form.addEventListener('submit', (e)=>{
e.preventDefault();
console.log('ddddjdjjdjdjd');
page=1;
searchImages();

});



show_more.addEventListener('click', ()=>{
searchImages();


});