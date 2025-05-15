var widget = document.querySelector('.widgetvideo')
var run = false
var progressbar = document.querySelector(".progress-container")
var buttons = document.querySelector('.buttons')
var openform = document.querySelector('.openform')
var arrow = document.querySelector('.arrow')
const video = document.querySelector('#video');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');





widget.addEventListener('click', function (e) {
    if (run == false) {
        open(this)
        run = true
    }
    console.log(run)


})

function collapse(a){
    widget.style.height = 0
    widget.style.opacity = 0
    a.style.top = "100%"
}


var krestik = document.querySelector('.krestik')

krestik.addEventListener('click', function () {
    if (run == true) {
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
        widgetp.style.width = "312.5px"
        widgetp.style.height = "475px"
        buttons.style.transform = "scale(1.5) translateY(10px)"
        progressbar.style.height = "8px"
        openform.style.display = 'flex'
        openform.style.opacity = "50%"
        
    } else {
        console.log("i wanna close")
    }
}


function close(widgetp) {
    if (widgetp.dataset.open == "open") {
        widgetp.dataset.open = "close"
        widgetp.style.width = "125px"
        widgetp.style.height = "190px"
        buttons.style.transform = "scale(1) translateY(0)"
        progressbar.style.height = "3px"
        openform.style.display = 'none'
        openform.style.opacity = 0
        console.log("close")
    } else {
        console.log("i wanna open")
    }

}

function reset(){
    video.currentTime = 0
}


function pauseVideo(btn) {
    if (btn.dataset.flag == "play") {
        video.pause()
        btn.dataset.flag = "pause"
        btn.style.backgroundImage = 'url(./play.webp)'
        btn.title = "Пуск"
    } else {
        video.play()
        btn.dataset.flag = "play"
        btn.style.backgroundImage = 'url(./pause.webp)'
        btn.title = "Пауза"
    }


}


function volumeChange(btn){
    console.log(video.muted)
    if (video.muted){
        video.muted = false
        btn.style.backgroundImage = "url(./volumeon.webp)"
        btn.title = "Выключить звук"
    } else {
        video.muted = true
        btn.style.backgroundImage = "url(./volumeoff.webp)"
        btn.title = "Включить звук"
    }
    /* video.muted = (video.muted == "false") ? true : false */
     
}



// Обновление прогресс-бара
video.addEventListener('timeupdate', () => {
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.width = percentage + '%';
});


progressContainer.addEventListener('click', (event) => {
    updateVideoTime(event);
});

// Плавная перемотка при удерживании левой кнопки мыши
let isDragging = false;

progressContainer.addEventListener('mousedown', (event) => {
    isDragging = true;
    updateVideoTime(event);
});

progressContainer.addEventListener('mousemove', (event) => {
    if (isDragging) {
        updateVideoTime(event);

        const newWidth = event.clientX - progressBar.getBoundingClientRect().left;

        progressBar.style.width = newWidth + 'px';


    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Перемотка видео при клике на прогресс-бар
function updateVideoTime(event) {
    const rect = progressContainer.getBoundingClientRect();
    const clickPosition = event.clientX - rect.left;
    const percentage = clickPosition / progressContainer.offsetWidth;
    video.currentTime = percentage * video.duration;
}
