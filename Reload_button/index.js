let reloadIcon = document.querySelector('.reload-btn .reload-icon');
let reloadText = document.querySelector('.reload-btn span');
let line = document.querySelector('.reload-btn .line');
let reloadBtn = document.querySelector('.reload-btn');

reloadBtn.addEventListener('click',()=>{
 reloadIcon.classList.add('rotate'); 
 reloadText.innerHTML = 'Reloading';
 reloadText.style.color = 'lightgrey';
 line.style.display = 'block';
 reloadBtn.style.pointerEvents = 'none';
 setTimeout(()=>{
 reloadIcon.classList.remove('rotate');
 reloadText.innerHTML = 'Reload App';
 reloadText.style.color = 'white';
 line.style.display = 'none';
 reloadBtn.style.pointerEvents = 'auto';
 },3000)
})