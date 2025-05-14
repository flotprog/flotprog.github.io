var widget = document.querySelector('.widgetvideo')

widget.addEventListener('click', function(e){
    console.log(this.dataset.open)
    if (this.dataset.open == 'close'){
        this.dataset.open = "open"
        this.style.transform = "scale(2.5)"
        this.style.bottom = "170px"
        this.style.right = "150px"
    } else {
        widget.dataset.open = "close"
        widget.style.transform = "scale(1)"
        widget.style.bottom = "50px"
        widget.style.right = "50px"
    }

})


var krestik = document.querySelector('.krestik')

krestik.addEventListener('click', function(){
    console.log(widget)
    
        widget.style.transform = "scale(1)"
        widget.style.bottom = "50px"
        widget.style.right = "50px"

    
})