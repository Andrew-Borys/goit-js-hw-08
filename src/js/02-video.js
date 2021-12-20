import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  throttle(() => {
    player.getCurrentTime().then(function (seconds) {
      // seconds = the current playback position
      // console.log(seconds);

      localStorage.setItem('playerCurrentPosition', JSON.stringify(seconds));
    });
  }, 1000),
);

const savedTime = localStorage.getItem('playerCurrentPosition');
const playerStartTime = JSON.parse(savedTime);

// console.log(playerStartTime);

player.setCurrentTime(playerStartTime);
