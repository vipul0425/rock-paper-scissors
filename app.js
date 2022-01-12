// global variable
const imgDisplay = document.querySelector('.img-space');
const play = document.querySelector('#sub');


play.addEventListener('click', event=>{
    event.preventDefault();
    imgDisplay.style.display = 'flex';
    let random = Math.floor(Math.random() * 3 + 0);
    document.querySelector('.img-space').style.backgroundImage= `url('${random}.png')`;
    let result = null;
    switch (random) {
        case 0:
          result = 'rock';  
            break;
        case 1:
          result = 'Paper';  
            break;
        case 2:
          result = 'Scissors';  
            break;

    }
    document.querySelector('#name').style.display="block";
    document.querySelector('#name').textContent=result;
    


})