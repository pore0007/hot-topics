/*** references to  HTML elements ***/
const container = document.querySelectorAll('.main-content'); // event target object
const links = document.querySelector('.nav a');

let url = '/partials/home.html';

function loadContent(url)
{
  fetch(url)
  .then(function (rsp)
        {
    return rsp.text();
        })
    
  .then(function (data) 
  {
    container.innerHTML = data;
  });
}

loadContent(url);
function selectContent(event)
{
    event.preventDefault();
    let clicked = event.target.href;
    loadContent(clicked);
}

for (let i = 0; i < links.length; i++)
{
    links[i].addEventListener("click", selectContent);
}