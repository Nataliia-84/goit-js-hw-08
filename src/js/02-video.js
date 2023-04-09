import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

console.log(Player)
const iframe=document.querySelector('#vimeo-player')
console.log(iframe)

const KEY_LOCALE="videoplayer-current-time"
const player = new Player(iframe);








player.on('timeupdate', throttle(function(data) {
    
    {
        duration: 61.857
        percent: 0.049
        seconds: 3.034
    }
data.seconds;

console.log(data.seconds)
localStorage.setItem('KEY_LOCALE',JSON.stringify(data.seconds))

}),1000);

let currentTime =Number(localStorage.getItem(JSON.parse('KEY_LOCALE')))
console.log(currentTime)

player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
