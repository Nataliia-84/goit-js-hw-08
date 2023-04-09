import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

console.log(Player)
const iframe=document.querySelector('#vimeo-player')
console.log(iframe)

const KEY_LOCALE="videoplayer-current-time"
const player = new Player(iframe);



const currentTime = function(data) {
    
    {
        duration: 61.857
        percent: 0.049
        seconds: 3.034
    }
data.seconds;

console.log(data.seconds)
localStorage.setItem('KEY_LOCALE',JSON.stringify(data.seconds))

}


player.on('timeupdate', throttle(currentTime, 1000));

console.log(localStorage.getItem(JSON.parse('KEY_LOCALE')))


