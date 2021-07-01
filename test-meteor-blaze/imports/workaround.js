import { Template } from 'meteor/templating';
import { destroy, init } from '../imports/init';

import './workaround.html';

Template.workaround.onRendered(function () {
  document.getElementById('test').innerHTML = `
    <div class="display-cover">
    <video autoplay></video>
    <canvas class="d-none"></canvas>

    <div class="video-options">
        <select name="" id="" class="custom-select">
            <option value="">Select camera</option>
        </select>
    </div>

    <img class="screenshot-image d-none" alt="">

    <div class="controls">
        <button class="btn btn-danger play" title="Play"><i data-feather="play-circle"></i> Play</button>
        <button class="btn btn-info pause d-none" title="Pause"><i data-feather="pause"></i> Pause</button>
        <button class="btn btn-outline-success screenshot d-none" title="ScreenShot"><i data-feather="image"></i> -</button>
    </div>
  </div>
  `;
  
  init();
})

Template.workaround.onDestroyed(function () {
  destroy();

  document.getElementById('test').innerHTML = '';
});
