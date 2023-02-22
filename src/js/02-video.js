import Player from '@vimeo/player';
import trottle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  width: 640,
  height: 360,
});

const onPlay = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', trottle(onPlay, 1000));

const curentTimeValue = localStorage.getItem('videoplayer-current-time');

if (curentTimeValue) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
