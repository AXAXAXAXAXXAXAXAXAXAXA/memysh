let call_me = document.querySelector('.call_me')
let overlay = document.querySelector('.overlay')
let send = document.querySelector('.send')
let model = document.querySelector('.model')
call_me.addEventListener('click', function(){
    model.style.display = 'flex'
    document.body.style.overflow = 'hidden'
})
overlay.addEventListener('click', function(){
    model.style.display = 'none'
    document.body.style.overflow = "";
})  
send.addEventListener('click', function(){
        model.style.display = 'none'
document.body.style.overflow = "";
})
