var seconds = parseInt(document.querySelector('#seconds').value = 0)
var minutes = parseInt(document.querySelector('#minutes').value = 0)

var decreament = document.querySelector('.decreament')
var intervalID = null

// Events
document.querySelector('.increament').addEventListener('click', getIncreamentValue)
document.querySelector('.decreament').addEventListener('click', getDecreamentValue)
document.querySelector('.btn-play').addEventListener('click', function() {
    intervalID = setInterval(startTimer, 1000)
    setInterval(() => {
        if(seconds == -1 && minutes == 0) {
            clearInterval(intervalID)
        }
    }, 1000);

})
document.querySelector('.btn-pause').addEventListener('click', function() {
    clearInterval(intervalID)
})

// Functions
function getIncreamentValue() {
    seconds = seconds + 1
    decreament.disabled = false

    if(seconds > 10) {
        seconds = seconds + (5 - 1)
    }

    if(seconds < 10) {
        document.querySelector('#seconds').textContent = '0' + seconds
    }else {
        document.querySelector('#seconds').textContent = seconds
    }

    if(seconds > 59) {
        var defaultSecond = seconds = seconds - seconds
        minutes = minutes + 1
        seconds = seconds + 1
        
        document.querySelector('#minutes').textContent = minutes
        document.querySelector('#seconds').textContent = String(defaultSecond).padStart(2, 0)
    }
}

function getDecreamentValue() {
    seconds = seconds - 1


    if(seconds == 0) {
        decreament.disabled =true
    }


    if(minutes == 0) {
        document.querySelector('#seconds').textContent =  String(seconds).padStart(2, 0)
    }
    else {
        document.querySelector('#seconds').textContent =  String(seconds).padStart(2, 0)
        if(seconds == 0) {
            seconds = 59
            document.querySelector('#seconds').textContent =  String(seconds).padStart(2, 0)

            if(seconds <= 59) {
                minutes = minutes -1
                document.querySelector('#minutes').textContent = minutes
            }
        }
    }
}

var startTimer = function() {
    if(minutes == 0) {
        document.querySelector('#seconds').textContent = String(seconds--).padStart(2, 0)
    }else {
        document.querySelector('#seconds').textContent = String(seconds--).padStart(2, 0)

        if(seconds == 0) { 
            seconds = 59
            document.querySelector('#seconds').textContent = String(seconds--).padStart(2, 0)
            
            if(seconds <= 59) {
                minutes = minutes -1
                document.querySelector('#minutes').textContent = minutes
            }
        }
    }
    
    if(seconds == -1) {
        var audio = new Audio('sound/high-pitch-alarm.mp3')
        audio.play()
    }
}

