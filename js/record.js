const startButton = document.getElementById("startButton");
startButton.addEventListener("click", function() {
  initUserMedia(true);
}, false);
scene.addEventListener('loaded', function(e) {
  startButton.style.display = "inline-block";
});

const stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", function() {
  if (recorder && recorder.state == "recording") {
    recorder.stop();
  }
}, false);

let recorder;
let data = [];
const recordingTimeMS = 2400000; // 40 minutes max

const canvas = document.querySelector('canvas');

let video = document.querySelector('video');
if (!video) {
  window.addEventListener('arjs-video-loaded', (e) => {
    video = e.detail.component;
    setVideoToSceneBackground();
  });
} else {
  setVideoToSceneBackground();
}

function setVideoToSceneBackground() {
  texture = new THREE.VideoTexture(video);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.format = THREE.RGBFormat;
  scene.object3D.background = texture;

  video.addEventListener('canplay', e => resizeContainer(e));
}

function resizeContainer(e) {
  let videoWidth = video.videoWidth;
  let videoHeight = video.videoHeight;
  let videoAspect = videoWidth / videoHeight;
  let width = scene.offsetWidth;
  let height = scene.offsetHeight;
  if (videoAspect > 1) {
    width = height * videoAspect;
  } else {
    height = width / videoAspect;
  }
  // setTimeout(() => {
    // scene.canvas.setAttribute('width', width);
    // scene.canvas.setAttribute('height', height);
    // scene.canvas.width = width;
    // scene.canvas.height = height;
    scene.renderer.setSize(width, height);
    scene.camera.aspect = videoAspect;
    scene.camera.updateProjectionMatrix();
    console.log(width);
  // }, 3000);
}

function initUserMedia(startRecord = false) {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
      // video: true,
      audio: true
    }).then((stream) => {
      if (startRecord) {
        startRecording(stream, recordingTimeMS);
      }
    }).catch(error => {
      alert(error);
    });
  } else {
    alert('Sorry, your browser or device is not supported. Please try opening the page in Safari for iOS/Mac or in Chrome for Android/Windows.');
  }
}

function wait(delayInMS) {
  return new Promise(resolve => setTimeout(resolve, delayInMS));
}

function startRecording(stream, lengthInMS) {
  startButton.style.display = "none";
  stopButton.style.display = "inline-block";

  data = [];
  canvas.captureStream = canvas.captureStream || canvas.mozCaptureStream;
  var canvasStream = canvas.captureStream();
  canvasStream.addTrack(stream.getAudioTracks()[0]);

  var options = {
    // audioBitsPerSecond : 128000,
    // videoBitsPerSecond : 2500000
    // mimeType: 'video/webm;codecs=H264'
  }

  try {
    recorder = new MediaRecorder(canvasStream, options);
    recorder.ondataavailable = event => data.push(event.data);
    recorder.onstop = (e) => onStopRecorder();
    recorder.start();
    console.log(recorder.state + " for max " + (lengthInMS / 1000) + " seconds...");

    wait(lengthInMS).then(() => {
      if (recorder.state == "recording") {
        // showProcessing();
        // stop(webCamWindow.srcObject);
        recorder.stop();
      }
    });

  } catch (error) {
    alert('Sorry, your browser does not support recording.\n' + error);
    startButton.style.display = "inline-block";
    stopButton.style.display = "none";
  }
}

function onStopRecorder() {
  if (data.length) {
    let blob = new Blob(data, {
      type: "video/webm"
    });
    saveData(blob, 'hidden-destination.webm');

    console.log("Successfully recorded " + blob.size + " bytes of " +
      blob.type + " media.");
  } else {
    console.log("No recorded chucks returned!");
  }

  startButton.style.display = "inline-block";
  stopButton.style.display = "none";
}

function saveData(blob, filename) {
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";

  const url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
}
