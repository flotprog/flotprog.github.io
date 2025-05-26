var widget = document.querySelector('.widgetvideo')
var run = false
var progressbar = document.querySelector(".progress-container")
var buttons = document.querySelector('.buttons')
var openform = document.querySelector('.openform')
var widgetcontainer = document.querySelector('.widgetcontainer')


const video = document.querySelector('#video');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');

if (document.querySelector('.arrow')) {
    var arrow = document.querySelector('.arrow')
    arrow.style.left = `${-arrow.clientWidth}px`
} else {
    var arrow = document.querySelector('.arrowleft')
}

var widthprogressBar = progressBar.offsetWidth


widget.addEventListener('click', function (e) {
    if (run == false) {
        open(this)
        run = true
    }
    console.log(run)


})

var isWidgetVisible = true

function collapse(a) {
    if (isWidgetVisible) {
        widgetcontainer.style.right = `${-widget.clientWidth - 4}px`
        arrow.childNodes[1].style.transform = 'rotate(180deg)'
    } else {
        widgetcontainer.style.right = "2%"
        arrow.childNodes[1].style.transform = 'rotate(0deg)'
    }
    isWidgetVisible = !isWidgetVisible; // Переключаем состояние видимости
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


function open(widgetp, width=widthprogressBar) {
    if (widgetp.dataset.open == 'close') {
        arrow.style.opacity = '0';
        
        setTimeout(() => {
            widgetp.dataset.open = "open"
            /* widgetp.style.width = "312.5px"
            widgetp.style.height = "475px" */
            widgetp.style.transform = "scale(2)"

            buttons.style.transform = "scale(0.7)"
            buttons.style.opacity = 100

            progressBar.style.height = "8px"
            progressBar.style.width = width * 2

            progressContainer.style.height = "8px"

            openform.style.display = 'flex'
            openform.style.opacity = "50%"
            


        }, 500)

        

    } else {
        console.log("i wanna close")
    }
}


function close(widgetp, width=widthprogressBar) {
    if (widgetp.dataset.open == "open") {

        widgetp.dataset.open = "close"
        widgetp.style.transform = "scale(1)"

        buttons.style.transform = "scale(0.7)"
        buttons.style.opacity = 0

        progressbar.style.height = "3px"

        progressBar.style.height = "3px"
        progressBar.style.width = width / 2

        openform.style.display = 'none'
        openform.style.opacity = 0

        setTimeout(() => {
            arrow.style.opacity = '100%';
        }, 1000)

        console.log("close")
    } else {
        console.log("i wanna open")
    }

}

function reset() {
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


function volumeChange(btn) {
    console.log(video.muted)
    if (video.muted) {
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
        const newWidth = event.clientX - progressBar.getBoundingClientRect().left;

        progressBar.style.width = newWidth / 2 + 'px';
        updateVideoTime(event);

        


    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Перемотка видео при клике на прогресс-бар
function updateVideoTime(event) {
    const rect = progressContainer.getBoundingClientRect();
    const clickPosition = event.clientX - rect.left;
    if (widget.dataset.open == "open"){
        const percentage = clickPosition / (progressContainer.offsetWidth * 2);
        video.currentTime = percentage * video.duration;
    } else {
        const percentage = clickPosition / progressContainer.offsetWidth
        video.currentTime = percentage * video.duration;
    }
    
    
}


