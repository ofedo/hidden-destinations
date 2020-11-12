let scene = document.querySelector('a-scene');
let camera = document.querySelector('a-camera');
let rig = document.querySelector('#rig');
let videoElement;
let soundPlaying;

// trigger sound on window click for iOS Safari to play it
let modelToPlaySound;
scene.addEventListener('tap', () => playSound());
// scene.addEventListener('touchend', () => playSound()); // mutes iOS audio, so buggy
scene.addEventListener('touchstart', () => playSound());
scene.addEventListener('click', () => playSound());
function playSound() {
  if (modelToPlaySound && !modelToPlaySound.getAttribute('clicked')) {
    if (soundPlaying) {
      soundPlaying.stopSound();
    }
    soundPlaying = modelToPlaySound.components.sound;
    modelToPlaySound.components.sound.playSound();
    modelToPlaySound.setAttribute('clicked', true);
    modelToPlaySound.click();
  }
}

let route = {
  "points": [{
    "lat": 46.762588685120406,
    "lng": 23.588628547329716
  }, {
    "lat": 46.76254061395472,
    "lng": 23.588565515417866
  }, {
    "lat": 46.762499038857904,
    "lng": 23.588506506819538
  }, {
    "lat": 46.762448369165305,
    "lng": 23.588439451594166
  }, {
    "lat": 46.76240419554827,
    "lng": 23.588380442995838
  }, {
    "lat": 46.762365218797335,
    "lng": 23.58832143439751
  }, {
    "lat": 46.762323643565175,
    "lng": 23.588262425799183
  }, {
    "lat": 46.76229765902881,
    "lng": 23.588220851559452
  }, {
    "lat": 46.76225478451638,
    "lng": 23.588156478543095
  }, {
    "lat": 46.76220151613524,
    "lng": 23.58820609940987
  }, {
    "lat": 46.762149546932164,
    "lng": 23.58823292150002
  }, {
    "lat": 46.76208718382227,
    "lng": 23.588239627022556
  }, {
    "lat": 46.76202741910753,
    "lng": 23.588215487141422
  }, {
    "lat": 46.76198064667586,
    "lng": 23.588172571797184
  }, {
    "lat": 46.76194037038272,
    "lng": 23.58811624540787
  }, {
    "lat": 46.76190399176945,
    "lng": 23.58806394233208
  }, {
    "lat": 46.76186761313163,
    "lng": 23.58801700367432
  }, {
    "lat": 46.76182993523086,
    "lng": 23.587962018389515
  }, {
    "lat": 46.76179615502158,
    "lng": 23.587915079731754
  }, {
    "lat": 46.76175717783066,
    "lng": 23.587862776655964
  }, {
    "lat": 46.761716901370455,
    "lng": 23.58780779137116
  }, {
    "lat": 46.761681821848306,
    "lng": 23.58775414719086
  }, {
    "lat": 46.76165713624496,
    "lng": 23.58769647969704
  }, {
    "lat": 46.7616012687851,
    "lng": 23.587731348414234
  }, {
    "lat": 46.76156878767717,
    "lng": 23.587771581549458
  }, {
    "lat": 46.76154020428598,
    "lng": 23.58780645026665
  }, {
    "lat": 46.76148953369161,
    "lng": 23.58779169811707
  }, {
    "lat": 46.76141807508008,
    "lng": 23.587774263758472
  }, {
    "lat": 46.761353112623716,
    "lng": 23.587755488295368
  }, {
    "lat": 46.761284252334455,
    "lng": 23.58773805393677
  }, {
    "lat": 46.761210194944006,
    "lng": 23.587719278473667
  }, {
    "lat": 46.761130940430924,
    "lng": 23.58769647969704
  }, {
    "lat": 46.76106727688516,
    "lng": 23.587679045338444
  }, {
    "lat": 46.761008810297255,
    "lng": 23.587668316502384
  }, {
    "lat": 46.76097762809112,
    "lng": 23.587736712832264
  }, {
    "lat": 46.760946445866914,
    "lng": 23.58780108584862
  }, {
    "lat": 46.760913964364185,
    "lng": 23.587862776655964
  }, {
    "lat": 46.76088797914792,
    "lng": 23.58791776194077
  }, {
    "lat": 46.760865891704206,
    "lng": 23.58799152268868
  }, {
    "lat": 46.760811322686855,
    "lng": 23.588045166868977
  }, {
    "lat": 46.760773644047376,
    "lng": 23.588082717795185
  }, {
    "lat": 46.7607125786102,
    "lng": 23.58804784907799
  }, {
    "lat": 46.76065800943759,
    "lng": 23.58800091042023
  }, {
    "lat": 46.760608637281436,
    "lng": 23.587956653971485
  }, {
    "lat": 46.76055146946512,
    "lng": 23.587894963164143
  }, {
    "lat": 46.76052028699429,
    "lng": 23.587968723912052
  }, {
    "lat": 46.76049690012931,
    "lng": 23.58805857791405
  }, {
    "lat": 46.76046441835556,
    "lng": 23.588135020870975
  }, {
    "lat": 46.760422841656606,
    "lng": 23.588191347260288
  }, {
    "lat": 46.76034488525956,
    "lng": 23.588176595110706
  }, {
    "lat": 46.760287717163386,
    "lng": 23.588141726393513
  }, {
    "lat": 46.760229249729555,
    "lng": 23.588109539885334
  }, {
    "lat": 46.760168183675376,
    "lng": 23.588081376690678
  }, {
    "lat": 46.76008502978816,
    "lng": 23.588034438032917
  }, {
    "lat": 46.760007072902376,
    "lng": 23.58800091042023
  }, {
    "lat": 46.75993431304051,
    "lng": 23.587968723912052
  }, {
    "lat": 46.75986545093792,
    "lng": 23.58793385519486
  }, {
    "lat": 46.759793990172334,
    "lng": 23.587909715313724
  }, {
    "lat": 46.75972772646865,
    "lng": 23.587894963164143
  }, {
    "lat": 46.75969524423119,
    "lng": 23.58796470059853
  }, {
    "lat": 46.75966276197414,
    "lng": 23.588034438032917
  }, {
    "lat": 46.7596354768631,
    "lng": 23.588100152153782
  }, {
    "lat": 46.75961079032217,
    "lng": 23.58816988958817
  }, {
    "lat": 46.75958870235496,
    "lng": 23.58823292150002
  }, {
    "lat": 46.75956791367162,
    "lng": 23.588298635620884
  }, {
    "lat": 46.75954322709973,
    "lng": 23.588356303114704
  }, {
    "lat": 46.75951204404539,
    "lng": 23.588401900667957
  }, {
    "lat": 46.759462670839085,
    "lng": 23.588346915383152
  }, {
    "lat": 46.759443181403064,
    "lng": 23.588278519053272
  }, {
    "lat": 46.75943668492284,
    "lng": 23.588210122723392
  }, {
    "lat": 46.759437984218955,
    "lng": 23.588135020870975
  }, {
    "lat": 46.75945487506552,
    "lng": 23.588067965645603
  }, {
    "lat": 46.759476963087685,
    "lng": 23.588007615942768
  }, {
    "lat": 46.75950944545675,
    "lng": 23.587951289553455
  }, {
    "lat": 46.759541927806225,
    "lng": 23.587897645373157
  }, {
    "lat": 46.759573110843306,
    "lng": 23.58784936561089
  }, {
    "lat": 46.75961079032233,
    "lng": 23.58779035701256
  }, {
    "lat": 46.75964976906601,
    "lng": 23.587736712832264
  }, {
    "lat": 46.75969004707159,
    "lng": 23.58768709196549
  }, {
    "lat": 46.759726427179714,
    "lng": 23.58763344778519
  }, {
    "lat": 46.75976540583975,
    "lng": 23.58758650912743
  }, {
    "lat": 46.75980828233323,
    "lng": 23.587542252678684
  }, {
    "lat": 46.759809581620395,
    "lng": 23.58749665512543
  }, {
    "lat": 46.759748515090564,
    "lng": 23.587456421990208
  }, {
    "lat": 46.75969654352129,
    "lng": 23.587430941004566
  }, {
    "lat": 46.75965106835705,
    "lng": 23.587389366764835
  }, {
    "lat": 46.759641973319624,
    "lng": 23.58732365264397
  }, {
    "lat": 46.75963937473722,
    "lng": 23.58724989189606
  }, {
    "lat": 46.759641973319624,
    "lng": 23.58718820108872
  }, {
    "lat": 46.7596484697751,
    "lng": 23.587121145863346
  }, {
    "lat": 46.7596627619744,
    "lng": 23.58706079616051
  }, {
    "lat": 46.759671857008385,
    "lng": 23.586991058726124
  }, {
    "lat": 46.759677054169956,
    "lng": 23.58692936791878
  }, {
    "lat": 46.759677054169956,
    "lng": 23.58686767711144
  }, {
    "lat": 46.75967965275055,
    "lng": 23.58680330409508
  }, {
    "lat": 46.759682251331,
    "lng": 23.58672954334717
  }, {
    "lat": 46.7596835506212,
    "lng": 23.586669193644337
  }, {
    "lat": 46.75969264565163,
    "lng": 23.586607502836994
  }, {
    "lat": 46.759716032865704,
    "lng": 23.58655117644768
  }, {
    "lat": 46.759691346361656,
    "lng": 23.58649485005837
  }, {
    "lat": 46.75965886410227,
    "lng": 23.586445229191593
  }, {
    "lat": 46.75963287828067,
    "lng": 23.586390243906788
  }, {
    "lat": 46.75960949103052,
    "lng": 23.586329894203953
  }, {
    "lat": 46.759602994570336,
    "lng": 23.58626820339661
  }, {
    "lat": 46.75964846977516,
    "lng": 23.586269544501118
  }, {
    "lat": 46.75970433925993,
    "lng": 23.5862842966507
  }, {
    "lat": 46.75976020868681,
    "lng": 23.586297707695774
  }, {
    "lat": 46.75982777163727,
    "lng": 23.586308436531834
  }, {
    "lat": 46.7598810423654,
    "lng": 23.58631514205437
  }, {
    "lat": 46.759939510177105,
    "lng": 23.586319165367893
  }, {
    "lat": 46.76000967146741,
    "lng": 23.586319165367893
  }, {
    "lat": 46.760077234105076,
    "lng": 23.58631648315888
  }, {
    "lat": 46.76013570170389,
    "lng": 23.586312459845356
  }, {
    "lat": 46.760198067072665,
    "lng": 23.58630977763634
  }, {
    "lat": 46.76017078223269,
    "lng": 23.586366104025654
  }, {
    "lat": 46.760138300262355,
    "lng": 23.586423771519474
  }, {
    "lat": 46.76010971611226,
    "lng": 23.586474733490757
  }, {
    "lat": 46.760077234105076,
    "lng": 23.58652569546204
  }, {
    "lat": 46.76004345279686,
    "lng": 23.586579339642338
  }, {
    "lat": 46.76000707290279,
    "lng": 23.586632983822636
  }, {
    "lat": 46.75997718939997,
    "lng": 23.586685286898426
  }, {
    "lat": 46.75999018222932,
    "lng": 23.586763070959858
  }, {
    "lat": 46.76000707290279,
    "lng": 23.58681537403565
  }, {
    "lat": 46.760025262852906,
    "lng": 23.58685560717087
  }, {
    "lat": 46.76004864992261,
    "lng": 23.586905228037647
  }, {
    "lat": 46.76007073770135,
    "lng": 23.58695619000893
  }, {
    "lat": 46.76009932187214,
    "lng": 23.587000446457676
  }, {
    "lat": 46.76012660674829,
    "lng": 23.58704470290642
  }, {
    "lat": 46.760172081511165,
    "lng": 23.587048726219944
  }, {
    "lat": 46.760211059848814,
    "lng": 23.58700312866669
  }, {
    "lat": 46.76023964394514,
    "lng": 23.58696691884499
  }, {
    "lat": 46.76027992150969,
    "lng": 23.58691863908272
  }, {
    "lat": 46.76031370266965,
    "lng": 23.586886452574543
  }, {
    "lat": 46.76037606783241,
    "lng": 23.586863653797916
  }, {
    "lat": 46.76044103146687,
    "lng": 23.58685158385735
  }, {
    "lat": 46.76050599502298,
    "lng": 23.586836831707767
  }, {
    "lat": 46.760560564349596,
    "lng": 23.58683012618523
  }, {
    "lat": 46.76062812629643,
    "lng": 23.586832808394245
  }, {
    "lat": 46.76069179036112,
    "lng": 23.58683549060326
  }, {
    "lat": 46.760758052879154,
    "lng": 23.586842196125797
  }, {
    "lat": 46.76082951236608,
    "lng": 23.58684621943932
  }, {
    "lat": 46.760893176192795,
    "lng": 23.586854266066364
  }, {
    "lat": 46.760954241425296,
    "lng": 23.58688242926102
  }, {
    "lat": 46.76102440139422,
    "lng": 23.586917297978214
  }, {
    "lat": 46.7610828679652,
    "lng": 23.58694546117287
  }, {
    "lat": 46.76113873596263,
    "lng": 23.586980329890064
  }, {
    "lat": 46.7611998009168,
    "lng": 23.58701922192078
  }, {
    "lat": 46.761258267297436,
    "lng": 23.58705543174248
  }, {
    "lat": 46.7612985441005,
    "lng": 23.587078230519108
  }, {
    "lat": 46.76135701037399,
    "lng": 23.58707152499657
  }, {
    "lat": 46.761420673577426,
    "lng": 23.587074207205585
  }, {
    "lat": 46.76146874574242,
    "lng": 23.58710773481827
  }, {
    "lat": 46.7615272118312,
    "lng": 23.587141262430958
  }, {
    "lat": 46.76158437861221,
    "lng": 23.587137239117435
  }, {
    "lat": 46.761625954414846,
    "lng": 23.58717076673012
  }, {
    "lat": 46.761651939275204,
    "lng": 23.587210999865345
  }, {
    "lat": 46.761650640032485,
    "lng": 23.587261961836628
  }, {
    "lat": 46.76161685971078,
    "lng": 23.587316947121433
  }, {
    "lat": 46.76159607180995,
    "lng": 23.58737059130173
  }, {
    "lat": 46.761642844575505,
    "lng": 23.587416188854984
  }, {
    "lat": 46.761706507441154,
    "lng": 23.587441669840626
  }, {
    "lat": 46.761753280110845,
    "lng": 23.58748190297585
  }, {
    "lat": 46.76179485578313,
    "lng": 23.587526159424595
  }],
  "markers": [{
    "lat": 46.76229765902881,
    "lng": 23.588220851559452
  }, {
    "lat": 46.76156878767717,
    "lng": 23.587771581549458
  }, {
    "lat": 46.760865891704206,
    "lng": 23.58799152268868
  }, {
    "lat": 46.75956791367162,
    "lng": 23.588298635620884
  }, {
    "lat": 46.759641973319624,
    "lng": 23.58732365264397
  }, {
    "lat": 46.759602994570336,
    "lng": 23.58626820339661
  }, {
    "lat": 46.760025262852906,
    "lng": 23.58685560717087
  }, {
    "lat": 46.761651939275204,
    "lng": 23.587210999865345
  }, {
    "lat": 46.76179485578313,
    "lng": 23.587526159424595
  }]
}

let points = route.points;
let markers = route.markers;

let pointsIndex = 0;
let markersIndex = 0;

let models = [];
let advanceUntilNextMarker = true;
// advanceRoute(points, markers, pointsIndex, markersIndex);
createRoute(points, markers, pointsIndex, markersIndex);

AFRAME.registerComponent('model-material', {
  schema: {
    default: 1.0
  },
  init: function() {
    this.el.addEventListener('model-loaded', this.update.bind(this));
  },
  update: function() {
    var mesh = this.el.getObject3D('mesh');
    var data = this.data;
    if (!mesh) {
      return;
    }
    mesh.traverse((node) => {
      if (node.isMesh) {
        node.material = mesh.material;
      }
    });
  }
});

AFRAME.registerComponent('model-opacity', {
  schema: {
    default: 1.0
  },
  init: function() {
    this.el.addEventListener('model-loaded', this.update.bind(this));
  },
  update: function() {
    var mesh = this.el.getObject3D('mesh');
    var data = this.data;
    if (!mesh) {
      return;
    }
    mesh.traverse(function(node) {
      if (node.isMesh) {
        node.material.opacity = data;
        if (node.material.uniforms) {
          node.material.uniforms.opacity.value = data;
        }
      }
    });
  }
});

AFRAME.registerComponent('refraction-shader', {
  multiple: true,
  init: function() {
    if (!videoElement) {
      window.addEventListener('arjs-video-loaded', (e) => {
        videoElement = e.detail.component;
        this.doShaderMaterial(videoElement)
      });
    } else {
      this.doShaderMaterial(videoElement)
    }
  },

  doShaderMaterial: function(videoElement) {
    const vertexShader = `
uniform float refractionRatio;
varying vec3 vRefract;
void main()
{
vec4 mPosition = modelMatrix * vec4( position, 1.0 );
vec3 nWorld = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
vRefract = normalize( refract( normalize( mPosition.xyz - cameraPosition ), nWorld, refractionRatio ) );
gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`

    const fragmentShader = `
uniform sampler2D videoTexture;
varying vec3 vRefract;
uniform float distance;
uniform float opacity;
uniform vec3 tint;
void main()
{
vec2 p = vec2( vRefract.x * distance + 0.5, vRefract.y * distance + 0.5 );
p = vec2(1.0, 1.0) - p;
vec3 color = texture2D( videoTexture, p ).rgb;
gl_FragColor = vec4( color, opacity ) * vec4( tint, 1.0 );
}
`
    var videoTexture = new THREE.VideoTexture(videoElement);
    videoTexture.minFilter = THREE.LinearFilter;


    this.material = new THREE.ShaderMaterial({
      uniforms: {
        videoTexture: {
          value: videoTexture
        },
        refractionRatio: {
          value: 0.95
        },
        distance: {
          value: 1.0
        },
        opacity: {
          value: 0.8
        },
        tint: {
          value: new THREE.Vector3(0.5, 0.5, 0.5)
        }
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true
    });
    if (this.el.getAttribute('marker')) {
      this.material.uniforms.tint.value = new THREE.Vector3(1.0, 1.0, 1.0);
    }
    this.setToMesh();
    this.el.addEventListener('model-loaded', () => this.setToMesh());
  },

  setToMesh: function() {
    const mesh = this.el.getObject3D('mesh');
    if (mesh) {
      mesh.material = this.material;

      mesh.traverse((node) => {
        if (node.isMesh) {
          node.material = mesh.material;
        }
      });
    }
  }
});

function getMarker(point, points, markers, pointsIndex, markersIndex, doAdvanceRoute = true) {
  let color = 'red';
  let opacity = '1';
  let scale = '1 1 1';
  // let text = 'value: This is an event marker!; width: 10;';

  let model = document.createElement('a-entity');
  model.setAttribute('id', 'marker' + markersIndex);
  model.setAttribute('marker', true);
  model.setAttribute('gltf-model', '#symbol' + markersIndex);
  // model.setAttribute('text', text);
  model.setAttribute('gps-entity-place', `latitude: ${point.lat}; longitude: ${point.lng};`);
  model.setAttribute('position', '0 2 0');
  // model.setAttribute('position', '0 378 0');
  // model.setAttribute('geometry', 'primitive: sphere');
  model.setAttribute('material', `color: ${color}; opacity: ${opacity}; transparent: true;`);
  // model.setAttribute('model-material');
  // model.setAttribute('refraction-shader', 'marker' + markersIndex);
  model.setAttribute('scale', scale);
  model.setAttribute('sound', 'src: #location' + markersIndex + '; rolloffFactor: 0.1; maxDistance: 3;');
  model.setAttribute('animation__rotation', 'property: rotation; from: 0 0 0; to: 0 360 0; dur: 10000; loop: true; easing: linear; pauseEvents: click;');
  model.setAttribute('animation__rotation__click', 'property: rotation; from: 0 0 0; to: 0 360 0; dur: 1000; loop: true; easing: linear; startEvents: click;');
  model.setAttribute('animation__scale__click', 'property: scale; delay: 1000; from: 1 1 1; to: 0 0 0; dur: 10000; easing: easeInSine; startEvents: click;');
  model.setAttribute('animation__opacity__click', 'property: model-opacity; delay: 1000; from: 1; to: 0; dur: 10000; easing: easeInSine; startEvents: click;');

  model.addEventListener('sound-ended', () => {
    alert('SOUND ENDED');
    soundPlaying = null;
    if (pointsIndex < points.length) {
      // alert('SOUND ENDED - ADVANCE');
      models.forEach(m => m.parentNode.removeChild(m));
      models = [];
      if (doAdvanceRoute) {
        advanceRoute(points, markers, pointsIndex, markersIndex);
      }
    } else {
      // alert('SOUND ENDED - THE END');
      window.location = './credits.html';
    }
  });

  registerModel(model, markersIndex);

  return model;
}

function getArrowRotation(points, pointsIndex) {
  var rotation = 0;
  var a = points[pointsIndex - 1];
  var b = points[pointsIndex];
  rotation = Math.atan(
    (a.lat - b.lat) /
    (a.lng - b.lng)
  );
  rotation *= 180 / Math.PI;
  if (a.lng < b.lng) {
    rotation -= 180;
  }
  return rotation;
}

function getWayPoint(point, points, markers, pointsIndex, markersIndex, doAdvanceRoute = true) {
  let color = 'white';
  let opacity = '0.5';
  let scale = '0.5 0.5 0.5';
  let text = 'value: WAYPOINT' + pointsIndex + '; width: 10;';

  let model = document.createElement('a-entity');
  model.setAttribute('id', 'waypoint' + pointsIndex);
  model.setAttribute('gltf-model', '#arrow' + (pointsIndex % 3 + 1));

  model.setAttribute('gps-entity-place', `latitude: ${point.lat}; longitude: ${point.lng};`);

  // model.setAttribute('text', text);
  // model.setAttribute('position', '0 378 0');
  // model.setAttribute('geometry', 'primitive: sphere');

  var rotation = getArrowRotation(points, pointsIndex);
  model.setAttribute('rotation', '0 ' + rotation + ' 0');

  model.setAttribute('material', `color: ${color}; opacity: ${opacity}; transparent: true;`);
  // model.setAttribute('model-material');
  // model.setAttribute('refraction-shader', 'waypoint' + pointsIndex);
  model.setAttribute('scale', scale);
  // model.setAttribute('animation__scale__click', 'property: scale; to: 3 3 3; dur: 2000; easing: easeInOutSine; startEvents: click;');
  // model.setAttribute('animation__opacity__click', 'property: material.opacity; to: 0; dur: 2000; easing: easeInOutSine; startEvents: click;');
  model.setAttribute('animation__rotation__click', 'property: rotation; to: 360 ' + rotation + ' 0; dur: 4000; easing: easeInOutSine; loop: true; startEvents: click;');

  // model.addEventListener('click', () => {
  //   model.setAttribute('clicked', true);
  // });

  registerModel(model, pointsIndex, false);

  return model;

}

function registerModel(model, index, isMarker = true) {
  model.addEventListener('loaded', () => {
    window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'));

    let attrId = (isMarker ? 'marker' : 'waypoint') + index;
    model.setAttribute(attrId);
    AFRAME.registerComponent(attrId, {
      tick: function() {
        var el = this.el;

        let camPos = rig ? rig.object3D.position : camera.object3D.position;
        let elPos = model.object3D.position;
        let distance = camPos.distanceTo(elPos);

        // set the near by marker model to play its sound on window click
        if (distance < 10 && isMarker) {
          modelToPlaySound = model;
        }

        // opacity based on distance
        if (distance && (!isMarker || !el.getAttribute('clicked'))) {
          let opacity = Math.min(1, 6 / distance);
          // el.setAttribute('material', 'opacity: ' + Math.min(1, 20 / distance) + ';');
          const mesh = el.getObject3D('mesh');
          if (mesh) {
            mesh.material.opacity = opacity;

            mesh.traverse((node) => {
              if (node.isMesh) {
                node.material.opacity = opacity;
                if (node.material.uniforms) {
                  node.material.uniforms.opacity.value = opacity * opacity * 2;
                }
              }
            });
          }

        }
      }
    });

  });
}

function advanceRoute(points, markers, pointsIndex, markersIndex) {
  let point = points[pointsIndex++];
  let isMarker = false;
  if (point.lat == markers[markersIndex].lat && point.lng == markers[markersIndex].lng) {
    isMarker = true;
    markersIndex++;
    models.push(getMarker(point, points, markers, pointsIndex, markersIndex));
  } else {
    models.push(getWayPoint(point, points, markers, pointsIndex, markersIndex, !advanceUntilNextMarker));
  }
  if (advanceUntilNextMarker) {
    if (!isMarker) {
      advanceRoute(points, markers, pointsIndex, markersIndex);
    } else {
      models.reverse().forEach(m => scene.appendChild(m));
      // models = [];
    }
  } else {
    models.reverse().forEach(m => scene.appendChild(m));
    // models = [];
  }
}

function createRoute(points, markers, pointsIndex, markersIndex) {
  let models = [];
  points.forEach((point, pointsIndex) => {
    let isMarker = false;
    pointsIndex++;
    if (point.lat == markers[markersIndex].lat && point.lng == markers[markersIndex].lng) {
      isMarker = true;
      markersIndex++;
      models.push(getMarker(point, points, markers, pointsIndex, markersIndex, false));
    } else {
      models.push(getWayPoint(point, points, markers, pointsIndex, markersIndex, false));
    }
  });
  models.reverse().forEach(m => scene.appendChild(m));
}
