//  імпортую бібліотеки

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// перевіряю чи підтянюлися бібліотеки
console.log(Player)
console.log(throttle)

const iframe=document.querySelector('#vimeo-player')

const KEY_LOCALE="videoplayer-current-time"

const player = new Player(iframe);

// виношу у змінну функцію, для того щоб у player.on її затормозити
const currentTime = function(data) {
    
    {
        duration: 61.857
        percent: 0.049
        seconds: 3.034
    }
data.seconds;

localStorage.setItem('KEY_LOCALE',JSON.stringify(data.seconds))

}

player.on('timeupdate', throttle(currentTime, 1000));

// записую getItem в змінну, привожу до числа для того щоб можна було записати час в фунцію setCurrentTime

let time = Number(localStorage.getItem('KEY_LOCALE'))

player.setCurrentTime(time)
