let btn = document.querySelector('.button')
let sun = document.querySelector('.sun')
let sky = document.querySelector('.sky')

btn.addEventListener('click', function()
{
    if(btn.innerHTML == 'включить луну') {
    sky.style.backgroundImage='URL(https://catherineasquithgallery.com/uploads/posts/2021-02/1613289602_178-p-sinii-fon-zvezdnoe-nebo-249.jpg)'
    sun.style.backgroundColor='#c5c28d'
    btn.innerHTML = 'Включить солнце'
} else {
    sky.style.backgroundImage = 'linear-gradient(to bottom, #65a9f0, #ebb2b1)',
    btn.innerHTML = 'включить луну',
    sun.style.backgroundColor ='#f5e555';
    }
})



