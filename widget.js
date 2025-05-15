var widget = document.querySelector('.widgetvideo')
var run = false


widget.addEventListener('click', function (e) {
    if (run == false){
        open(this)
        run = true
    }
    console.log(run)
    

})


var krestik = document.querySelector('.krestik')

krestik.addEventListener('click', function () {
    if (run == true){
        close(widget)
        setTimeout(() => {
            run = false
        }, 1000)
        
    }
    /* run = false */
    console.log(run)
    


})


function open(widgetp) {
    if (widgetp.dataset.open == 'close') {
        widgetp.dataset.open = "open"
        widgetp.style.transform = "scale(2.5)"
        widgetp.style.bottom = "170px"
        widgetp.style.right = "150px"
        console.log("open")
    } else {
        console.log("i wanna close")
    }
}


function close(widgetp) {
    if (widgetp.dataset.open == "open") {
        widgetp.dataset.open = "close"
        widgetp.style.transform = "scale(1)"
        widgetp.style.bottom = "50px"
        widgetp.style.right = "50px"
        console.log("close")
    } else {
        console.log("i wanna open")
    }

}





/*  */


const video = document.getElementById('video');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');

// Обновление прогресс-бара
video.addEventListener('timeupdate', () => {
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.width = percentage + '%';
});

// Перемотка видео при клике на прогресс-бар
progressContainer.addEventListener('click', (event) => {
    const rect = progressContainer.getBoundingClientRect();
    const clickPosition = event.clientX - rect.left;
    const percentage = clickPosition / progressContainer.offsetWidth;
    video.currentTime = percentage * video.duration;
});