document.addEventListener('DOMContentLoaded', function() {
  var scene = document.querySelector('a-scene');
  var splash = document.querySelector('#splash');
  scene.addEventListener('loaded', function(e) {
    splash.style.display = 'none';

    // let screenshotButton = document.querySelector('#screenshotButton');
    // screenshotButton.style.display = 'inline-block';
    // screenshotButton.addEventListener('click', () => {
    //   scene.components.screenshot.capture('perspective');
    // });
  });
});

let scene = document.querySelector('a-scene');
let camera = document.querySelector('a-camera');
let rig = document.querySelector('#rig');

let videoElement;
let modelPlayingSound;

// trigger sound on window click for iOS Safari to play it
let modelToPlaySound;
scene.addEventListener('tap', (e) => playSound(e));
// scene.addEventListener('touchend', () => playSound()); // mutes iOS audio, so buggy
scene.addEventListener('touchstart', (e) => playSound(e));
scene.addEventListener('click', (e) => playSound(e));

function playSound(e) {
  if (modelToPlaySound && !modelToPlaySound.getAttribute('clicked')) {
    if (modelToPlaySound.components.sound.loaded) {
      playIt();
    } else {
      modelToPlaySound.addEventListener('sound-loaded', () => playSound());
    }

  }
}

function playIt() {
  if (modelPlayingSound) {
    modelPlayingSound.components.sound.stopSound();
    modelPlayingSound.emit('sound-ended')
  }
  modelPlayingSound = modelToPlaySound;

  modelToPlaySound.components.sound.playSound();
  modelToPlaySound.setAttribute('clicked', true);
  modelToPlaySound.click();
}


let route = {
  "points": [{
    "lat": 46.76259242543152,
    "lng": 23.58863199601605
  }, {
    "lat": 46.762536204597595,
    "lng": 23.58856079553438
  }, {
    "lat": 46.76249557433592,
    "lng": 23.5884993485512
  }, {
    "lat": 46.76245258186616,
    "lng": 23.588444729074258
  }, {
    "lat": 46.76241195166037,
    "lng": 23.5883940109476
  }, {
    "lat": 46.76237037642465,
    "lng": 23.588329637951706
  }, {
    "lat": 46.76232600218209,
    "lng": 23.58826760556484
  }, {
    "lat": 46.76228678910449,
    "lng": 23.5882090846353
  }, {
    "lat": 46.76225520829702,
    "lng": 23.58815283907401
  }, {
    "lat": 46.76221552274619,
    "lng": 23.588193316033394
  }, {
    "lat": 46.762164970981715,
    "lng": 23.588221113420186
  }, {
    "lat": 46.7621139465886,
    "lng": 23.588241595754734
  }, {
    "lat": 46.762044496693186,
    "lng": 23.588228428513357
  }, {
    "lat": 46.76199052140556,
    "lng": 23.588184047795696
  }, {
    "lat": 46.76195834284151,
    "lng": 23.588139538377266
  }, {
    "lat": 46.761927161224584,
    "lng": 23.58808979554725
  }, {
    "lat": 46.76188275094807,
    "lng": 23.58803322529285
  }, {
    "lat": 46.76184967950841,
    "lng": 23.587980556470587
  }, {
    "lat": 46.76181282836904,
    "lng": 23.587931789039533
  }, {
    "lat": 46.76177833949085,
    "lng": 23.58788789833726
  }, {
    "lat": 46.76174101587683,
    "lng": 23.587835717183783
  }, {
    "lat": 46.761704039064064,
    "lng": 23.587780842999226
  }, {
    "lat": 46.76167569193804,
    "lng": 23.587735001621812
  }, {
    "lat": 46.76165254184737,
    "lng": 23.587692086277574
  }, {
    "lat": 46.76160435172972,
    "lng": 23.587720859063328
  }, {
    "lat": 46.76157128000023,
    "lng": 23.587754996267112
  }, {
    "lat": 46.76153348377537,
    "lng": 23.58780668973134
  }, {
    "lat": 46.76151491905858,
    "lng": 23.587795520921944
  }, {
    "lat": 46.761487989434706,
    "lng": 23.587750654851405
  }, {
    "lat": 46.76145680750588,
    "lng": 23.58770091208278
  }, {
    "lat": 46.76141664893821,
    "lng": 23.58764434182838
  }, {
    "lat": 46.7613731831387,
    "lng": 23.587595574376863
  }, {
    "lat": 46.76134200114343,
    "lng": 23.5875565604443
  }, {
    "lat": 46.76131696103246,
    "lng": 23.587604352496854
  }, {
    "lat": 46.76128436163574,
    "lng": 23.587644341787453
  }, {
    "lat": 46.76124845500974,
    "lng": 23.587677991342915
  }, {
    "lat": 46.7611993195901,
    "lng": 23.587691158543365
  }, {
    "lat": 46.76114073502779,
    "lng": 23.587696035251682
  }, {
    "lat": 46.76108687503538,
    "lng": 23.58768433107805
  }, {
    "lat": 46.76101411659207,
    "lng": 23.587660922710327
  }, {
    "lat": 46.76097962716296,
    "lng": 23.58772334503108
  }, {
    "lat": 46.760957421718025,
    "lng": 23.587774063157738
  }, {
    "lat": 46.76093238142831,
    "lng": 23.587822830547864
  }, {
    "lat": 46.760904506369144,
    "lng": 23.58787354865406
  }, {
    "lat": 46.76088466306027,
    "lng": 23.587922316044185
  }, {
    "lat": 46.76086056772289,
    "lng": 23.587964256050853
  }, {
    "lat": 46.76082785443704,
    "lng": 23.588016140167856
  }, {
    "lat": 46.76079053020418,
    "lng": 23.588059055512094
  }, {
    "lat": 46.760751316048655,
    "lng": 23.588100020160727
  }, {
    "lat": 46.760719661218985,
    "lng": 23.58813805875572
  }, {
    "lat": 46.76068139200119,
    "lng": 23.5881702452639
  }, {
    "lat": 46.76064501253787,
    "lng": 23.588211697622246
  }, {
    "lat": 46.76060570454865,
    "lng": 23.588182904445162
  }, {
    "lat": 46.76057765212315,
    "lng": 23.588129754848758
  }, {
    "lat": 46.76051953936114,
    "lng": 23.588168768801786
  }, {
    "lat": 46.76045857515036,
    "lng": 23.588186745110306
  }, {
    "lat": 46.76038298111296,
    "lng": 23.588202350716074
  }, {
    "lat": 46.760331010155696,
    "lng": 23.58816772582304
  }, {
    "lat": 46.760276676756476,
    "lng": 23.588137002341682
  }, {
    "lat": 46.76022281582098,
    "lng": 23.588105791171074
  }, {
    "lat": 46.76016423019688,
    "lng": 23.588074092352144
  }, {
    "lat": 46.760112731508414,
    "lng": 23.58804483187714
  }, {
    "lat": 46.76006076029048,
    "lng": 23.588018009786992
  }, {
    "lat": 46.760016348475475,
    "lng": 23.587999478168513
  }, {
    "lat": 46.75995100940557,
    "lng": 23.587975997197105
  }, {
    "lat": 46.75988722634512,
    "lng": 23.587944298378176
  }, {
    "lat": 46.75982344320915,
    "lng": 23.587916988578314
  }, {
    "lat": 46.75975871507151,
    "lng": 23.58789358021059
  }, {
    "lat": 46.759699183936284,
    "lng": 23.58792820508316
  }, {
    "lat": 46.759675088068754,
    "lng": 23.58798623830299
  }, {
    "lat": 46.75965382701421,
    "lng": 23.58804329620571
  }, {
    "lat": 46.75963020349148,
    "lng": 23.588104743188893
  }, {
    "lat": 46.75961319457882,
    "lng": 23.588153998309195
  }, {
    "lat": 46.75959382331835,
    "lng": 23.58820666713146
  }, {
    "lat": 46.75958626372669,
    "lng": 23.588238853639638
  }, {
    "lat": 46.75957634190972,
    "lng": 23.588276404565846
  }, {
    "lat": 46.75956075039441,
    "lng": 23.588319319930548
  }, {
    "lat": 46.7595040540307,
    "lng": 23.58832224600465
  }, {
    "lat": 46.75943885294437,
    "lng": 23.58830956649345
  }, {
    "lat": 46.75938073895406,
    "lng": 23.588291034834043
  }, {
    "lat": 46.759389715914075,
    "lng": 23.588227149506935
  }, {
    "lat": 46.759395857995784,
    "lng": 23.588172529927675
  }, {
    "lat": 46.75940955969429,
    "lng": 23.588122787138587
  }, {
    "lat": 46.75942184393171,
    "lng": 23.58807987179435
  }, {
    "lat": 46.759444522574505,
    "lng": 23.588035981092077
  }, {
    "lat": 46.75947098093277,
    "lng": 23.587992578079053
  }, {
    "lat": 46.75949507689162,
    "lng": 23.587950638113313
  }, {
    "lat": 46.75953161653823,
    "lng": 23.58789419467615
  }, {
    "lat": 46.759571776510924,
    "lng": 23.58782884632222
  }, {
    "lat": 46.75961099152495,
    "lng": 23.58777422678389
  }, {
    "lat": 46.75965304133423,
    "lng": 23.587719119587003
  }, {
    "lat": 46.75969178380561,
    "lng": 23.587662549342834
  }, {
    "lat": 46.7597371408147,
    "lng": 23.587618658650793
  }, {
    "lat": 46.75978060789439,
    "lng": 23.58756208837593
  }, {
    "lat": 46.75982407493904,
    "lng": 23.587516734687764
  }, {
    "lat": 46.759766433807435,
    "lng": 23.587475769998203
  }, {
    "lat": 46.75971729707589,
    "lng": 23.587446509543664
  }, {
    "lat": 46.75967524731675,
    "lng": 23.587415786062305
  }, {
    "lat": 46.759614771279544,
    "lng": 23.587378722825346
  }, {
    "lat": 46.75956327202625,
    "lng": 23.587346536317167
  }, {
    "lat": 46.75950893785284,
    "lng": 23.587311911444598
  }, {
    "lat": 46.759462163314055,
    "lng": 23.587283626348093
  }, {
    "lat": 46.7594035768232,
    "lng": 23.587273872808677
  }, {
    "lat": 46.759396017284274,
    "lng": 23.587172436514432
  }, {
    "lat": 46.759375228288654,
    "lng": 23.58707587694897
  }, {
    "lat": 46.75931475199402,
    "lng": 23.5870076025414
  }, {
    "lat": 46.75924860586246,
    "lng": 23.58704661649443
  }, {
    "lat": 46.75915600118944,
    "lng": 23.587036863077795
  }, {
    "lat": 46.759129542795534,
    "lng": 23.586942254269328
  }, {
    "lat": 46.75910875393502,
    "lng": 23.58685154685207
  }, {
    "lat": 46.759079460426115,
    "lng": 23.586764740826023
  }, {
    "lat": 46.75905961652445,
    "lng": 23.58667695948287
  }, {
    "lat": 46.75913521241859,
    "lng": 23.586632093504416
  }, {
    "lat": 46.75920324871983,
    "lng": 23.58659307955139
  }, {
    "lat": 46.759213643132874,
    "lng": 23.586502372113667
  }, {
    "lat": 46.75922025772224,
    "lng": 23.58640483725156
  }, {
    "lat": 46.75930057802258,
    "lng": 23.586355094421545
  }, {
    "lat": 46.7593790084169,
    "lng": 23.58633168615614
  }, {
    "lat": 46.75944987916549,
    "lng": 23.58633071077764
  }, {
    "lat": 46.75954437335197,
    "lng": 23.58633461216885
  }, {
    "lat": 46.759559492545996,
    "lng": 23.58638923168672
  }, {
    "lat": 46.75964737200408,
    "lng": 23.586433122245747
  }, {
    "lat": 46.759753333086245,
    "lng": 23.586437968753263,
    "alt": 436.73223876953125
  }, {
    "lat": 46.7598109740733,
    "lng": 23.586384324572965,
    "alt": 436.73223876953125
  }, {
    "lat": 46.75990074288931,
    "lng": 23.58636871892627,
    "alt": 436.73223876953125
  }, {
    "lat": 46.75986881767023,
    "lng": 23.586469541308432,
    "alt": 443.1771240234375
  }, {
    "lat": 46.75985750534435,
    "lng": 23.586546183264534,
    "alt": 447.15576171875
  }, {
    "lat": 46.759878293757424,
    "lng": 23.58665152101138,
    "alt": 447.15576171875
  }, {
    "lat": 46.75991325645236,
    "lng": 23.58675393256134,
    "alt": 447.15576171875
  }, {
    "lat": 46.75995199873662,
    "lng": 23.586836837196177,
    "alt": 447.15576171875
  }, {
    "lat": 46.75999357579894,
    "lng": 23.5869177911968,
    "alt": 447.15576171875
  }, {
    "lat": 46.76003420810608,
    "lng": 23.586982164131303,
    "alt": 447.15576171875
  }, {
    "lat": 46.76007106046203,
    "lng": 23.5870494632013,
    "alt": 447.15576171875
  }, {
    "lat": 46.7601164171915,
    "lng": 23.58711188546066,
    "alt": 447.15576171875
  }, {
    "lat": 46.76018539705351,
    "lng": 23.587028980703042,
    "alt": 447.15576171875
  }, {
    "lat": 46.760242092858874,
    "lng": 23.58695973099883,
    "alt": 447.15576171875
  }, {
    "lat": 46.76029973348164,
    "lng": 23.586911938925812,
    "alt": 447.15576171875
  }, {
    "lat": 46.7603677682728,
    "lng": 23.58687585100596,
    "alt": 447.15576171875
  }, {
    "lat": 46.760435802898726,
    "lng": 23.586859270083085,
    "alt": 447.15576171875
  }, {
    "lat": 46.76050336500197,
    "lng": 23.586840738464605,
    "alt": 447.15576171875
  }, {
    "lat": 46.76058381606393,
    "lng": 23.586832744628612,
    "alt": 433.6954345703125
  }, {
    "lat": 46.76063956642043,
    "lng": 23.586834695426536,
    "alt": 433.6954345703125
  }, {
    "lat": 46.76070287607597,
    "lng": 23.586842010560634,
    "alt": 433.6954345703125
  }, {
    "lat": 46.76076240602294,
    "lng": 23.58684298587774,
    "alt": 433.6954345703125
  }, {
    "lat": 46.76081579394539,
    "lng": 23.586850788680625,
    "alt": 433.6954345703125
  }, {
    "lat": 46.76087437890064,
    "lng": 23.586851763997732,
    "alt": 433.6954345703125
  }, {
    "lat": 46.76092256975052,
    "lng": 23.586870783346388,
    "alt": 433.6954345703125
  }, {
    "lat": 46.7609646185362,
    "lng": 23.586888827296082,
    "alt": 433.6954345703125
  }, {
    "lat": 46.76101186436153,
    "lng": 23.58691077265745,
    "alt": 433.6954345703125
  }, {
    "lat": 46.761050605895484,
    "lng": 23.586929304316858,
    "alt": 433.6954345703125
  }, {
    "lat": 46.761096434192254,
    "lng": 23.586955638758685,
    "alt": 433.6954345703125
  }, {
    "lat": 46.761136592998604,
    "lng": 23.586982460848834,
    "alt": 433.6954345703125
  }, {
    "lat": 46.76117958655817,
    "lng": 23.587006844595056,
    "alt": 433.6954345703125
  }, {
    "lat": 46.76122494235448,
    "lng": 23.58703951877202,
    "alt": 433.6954345703125
  }, {
    "lat": 46.76126840827357,
    "lng": 23.58706487783535,
    "alt": 433.6954345703125
  }, {
    "lat": 46.761318960958626,
    "lng": 23.587081946447473,
    "alt": 433.6954345703125
  }, {
    "lat": 46.761375655491875,
    "lng": 23.587083897143078,
    "alt": 433.6954345703125
  }, {
    "lat": 46.76142951527492,
    "lng": 23.58709511368885,
    "alt": 433.6954345703125
  }, {
    "lat": 46.76148243014784,
    "lng": 23.58711218228051,
    "alt": 433.6954345703125
  }, {
    "lat": 46.76153298263208,
    "lng": 23.587138029012625,
    "alt": 433.6954345703125
  }, {
    "lat": 46.76158070034665,
    "lng": 23.587134127580487,
    "alt": 433.6954345703125
  }, {
    "lat": 46.76161613428459,
    "lng": 23.58715899897503,
    "alt": 433.6954345703125
  }, {
    "lat": 46.76164637126779,
    "lng": 23.587191185524137,
    "alt": 433.6954345703125
  }, {
    "lat": 46.76165629274325,
    "lng": 23.58721410624354,
    "alt": 433.6954345703125
  }, {
    "lat": 46.76165393041182,
    "lng": 23.58725799692535,
    "alt": 433.6954345703125
  }, {
    "lat": 46.76163172516553,
    "lng": 23.5873038382823,
    "alt": 433.6954345703125
  }, {
    "lat": 46.761611882164146,
    "lng": 23.5873540687811,
    "alt": 433.6954345703125
  }, {
    "lat": 46.7616369220984,
    "lng": 23.587406737603363,
    "alt": 433.6954345703125
  }, {
    "lat": 46.76168463980021,
    "lng": 23.58743209664623,
    "alt": 433.6954345703125
  }, {
    "lat": 46.761731412488906,
    "lng": 23.587463795485622,
    "alt": 433.6954345703125
  }, {
    "lat": 46.761764484040796,
    "lng": 23.587495982034728,
    "alt": 433.6954345703125
  }, {
    "lat": 46.76179897296753,
    "lng": 23.587530119218048,
    "alt": 433.6954345703125
  }],
  "markers": [{
    "lat": 46.76237037642465,
    "lng": 23.588329637951706
  }, {
    "lat": 46.76153348377537,
    "lng": 23.58780668973134
  }, {
    "lat": 46.76060570454865,
    "lng": 23.588182904445162
  }, {
    "lat": 46.75958626372669,
    "lng": 23.588238853639638
  }, {
    "lat": 46.7594035768232,
    "lng": 23.587273872808677
  }, {
    "lat": 46.75944987916549,
    "lng": 23.58633071077764
  }, {
    "lat": 46.76003420810608,
    "lng": 23.586982164131303,
    "alt": 447.15576171875
  }, {
    "lat": 46.76165629274325,
    "lng": 23.58721410624354,
    "alt": 433.6954345703125
  }, {
    "lat": 46.76179897296753,
    "lng": 23.587530119218048,
    "alt": 433.6954345703125
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

// AFRAME.registerComponent('model-opacity', {
//   schema: {
//     default: 1.0
//   },
//   init: function() {
//     this.el.addEventListener('model-loaded', this.update.bind(this));
//   },
//   update: function() {
//     var mesh = this.el.getObject3D('mesh');
//     var data = this.data;
//     if (!mesh) {
//       return;
//     }
//     mesh.traverse(function(node) {
//       if (node.isMesh) {
//         node.material.opacity = data;
//         if (node.material.uniforms) {
//           node.material.uniforms.opacity.value = data;
//         }
//       }
//     });
//   }
// });
// 
// AFRAME.registerComponent('glow-shader', {
//   multiple: true,
//   init: function() {
//     this.doShaderMaterial()
//   },
// 
//   doShaderMaterial: function() {
//     const vertexShader = `
// uniform vec3 viewVector;
// uniform float c;
// uniform float p;
// varying float intensity;
// void main() 
// {
//     vec3 vNormal = normalize( normalMatrix * normal );
// 	vec3 vNormel = normalize( normalMatrix * viewVector );
// 	intensity = pow( c - dot(vNormal, vNormel), p );
// 
//     gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
// }
// `
// 
//     const fragmentShader = `
// uniform vec3 glowColor;
// varying float intensity;
// uniform float opacity;
// void main() 
// {
// 	vec3 glow = glowColor * intensity;
//     gl_FragColor = vec4( glow, opacity );
// }
// `
// 
//     const camPos = rig ? rig.object3D.position : camera.object3D.position;
// 
//     this.el.object3DMap.mesh.material = new THREE.ShaderMaterial({
//       uniforms: {
//         "c": {
//           type: "f",
//           value: 0.0
//         },
//         "p": {
//           type: "f",
//           value: 6
//         },
//         glowColor: {
//           type: "c",
//           value: new THREE.Color(0xffffff)
//         },
//         viewVector: {
//           type: "v3",
//           value: camPos
//         },
//         opacity: {
//           type: "f",
//           value: 1.0
//         },
//       },
//       vertexShader: vertexShader,
//       fragmentShader: fragmentShader,
//       side: THREE.BackSide,
//       blending: THREE.AdditiveBlending,
//       transparent: true
//     });
//   },
// 
//   tick: function() {
//     const camPos = rig ? rig.object3D.position : camera.object3D.position;
//     this.el.object3DMap.mesh.material.uniforms.viewVector.value =
//       new THREE.Vector3().subVectors(camPos, this.el.object3DMap.mesh.position);
//   }
// });

// AFRAME.registerComponent('refraction-shader', {
//   multiple: true,
//   init: function() {
//     if (!videoElement) {
//       window.addEventListener('arjs-video-loaded', (e) => {
//         videoElement = e.detail.component;
//         this.doShaderMaterial(videoElement)
//       });
//     } else {
//       this.doShaderMaterial(videoElement)
//     }
//   },
// 
//   doShaderMaterial: function(videoElement) {
//     const vertexShader = `
// uniform float refractionRatio;
// varying vec3 vRefract;
// void main()
// {
// vec4 mPosition = modelMatrix * vec4( position, 1.0 );
// vec3 nWorld = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
// vRefract = normalize( refract( normalize( mPosition.xyz - cameraPosition ), nWorld, refractionRatio ) );
// gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
// }
// `
// 
//     const fragmentShader = `
// uniform sampler2D videoTexture;
// varying vec3 vRefract;
// uniform float distance;
// uniform float opacity;
// uniform vec3 tint;
// void main()
// {
// vec2 p = vec2( vRefract.x * distance + 0.5, vRefract.y * distance + 0.5 );
// p = vec2(1.0, 1.0) - p;
// vec3 color = texture2D( videoTexture, p ).rgb;
// gl_FragColor = vec4( color, opacity ) * vec4( tint, 1.0 );
// }
// `
//     var videoTexture = new THREE.VideoTexture(videoElement);
//     videoTexture.minFilter = THREE.LinearFilter;
// 
// 
//     this.material = new THREE.ShaderMaterial({
//       uniforms: {
//         videoTexture: {
//           value: videoTexture
//         },
//         refractionRatio: {
//           value: 0.95
//         },
//         distance: {
//           value: 1.0
//         },
//         opacity: {
//           value: 0.8
//         },
//         tint: {
//           value: new THREE.Vector3(0.5, 0.5, 0.5)
//         }
//       },
//       vertexShader: vertexShader,
//       fragmentShader: fragmentShader,
//       transparent: true
//     });
//     if (this.el.getAttribute('marker')) {
//       this.material.uniforms.tint.value = new THREE.Vector3(1.0, 1.0, 1.0);
//     }
//     this.setToMesh();
//     this.el.addEventListener('model-loaded', () => this.setToMesh());
//   },
// 
//   setToMesh: function() {
//     const mesh = this.el.getObject3D('mesh');
//     if (mesh) {
//       mesh.material = this.material;
// 
//       mesh.traverse((node) => {
//         if (node.isMesh) {
//           node.material = mesh.material;
//         }
//       });
//     }
//   }
// });

function getMarker(point, points, markers, pointsIndex, markersIndex, doAdvanceRoute = true) {
  let color = 'black';
  let opacity = '1';
  let scale = '0.5 0.5 1';
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
  model.setAttribute('material', `color: ${color}; opacity: ${opacity}; transparent: true; displacementMap: #wave; displacementScale: 0.0; displacementBias: -0.001; normalMap: #wave;`);
  model.setAttribute('model-material');
  // model.setAttribute('refraction-shader', 'marker' + markersIndex);
  model.setAttribute('scale', scale);
  model.setAttribute('sound', 'src: #location' + markersIndex + '; rolloffFactor: 0.1; maxDistance: 3;');

  model.setAttribute('animation__rotation', 'property: object3D.rotation.y; from: 0; to: 360; dur: 10000; loop: true; easing: linear; pauseEvents: click;');

  model.setAttribute('animation__color__near', 'property: components.material.material.color; type: color; to: white; dur: 500; startEvents: near;');
  model.setAttribute('animation__color__far', 'property: components.material.material.color; type: color; to: black; dur: 500; startEvents: far;');
  model.setAttribute('animation__opacity__sound_ended', 'property: components.material.material.opacity; to: 0; dur: 1000; easing: easeInSine; startEvents: animation-sound-ended;');

  model.setAttribute('animation__rotation__click', 'property: object3D.rotation.y; from: 0; to: 360; dur: 1000; loop: true; easing: linear; startEvents: click;');
  model.setAttribute('animation__material__displacement1__click', 'property: components.material.material.displacementBias; from: -0.001; to: 0; dur: 5000; easing: easeInSine; startEvents: click;');
  model.setAttribute('animation__material__displacement2__click', 'property: components.material.material.displacementBias; delay: 5000; from: 0; to: -0.001; dur: 5000; easing: easeInSine; startEvents: click;');
  // model.setAttribute('animation__opacity1__click', 'property: components.material.material.opacity; from: 1; to: 0; dur: 1000; easing: easeInSine; startEvents: click;');
  // model.setAttribute('animation__opacity2__click', 'property: components.material.material.opacity; delay: 1000; from: 0; to: 1; dur: 1000; easing: easeInSine; startEvents: click;');
  model.setAttribute('animation__scale__x__up__click', 'property: object3D.scale.x; delay: 0; from: 0.5; to: 1; dur: 5000; easing: easeInSine; startEvents: click;');
  model.setAttribute('animation__scale__y__up__click', 'property: object3D.scale.y; delay: 0; from: 0.5; to: 1; dur: 5000; easing: easeInSine; startEvents: click;');
  // model.setAttribute('animation__scale__z__up__click', 'property: object3D.scale.z; delay: 0; from: 1; to: 2; dur: 5000; easing: easeInSine; startEvents: click;');
  model.setAttribute('animation__scale__x__down__click', 'property: object3D.scale.x; delay: 5000; from: 1; to: 0.5; dur: 10000; easing: easeInSine; startEvents: click;');
  model.setAttribute('animation__scale__y__down__click', 'property: object3D.scale.y; delay: 5000; from: 1; to: 0.5; dur: 10000; easing: easeInSine; startEvents: click;');
  // model.setAttribute('animation__scale__z__down__click', 'property: object3D.scale.z; delay: 5000; from: 2; to: 1; dur: 10000; easing: easeInSine; startEvents: click;');
  // model.setAttribute('animation__opacity__click', 'property: components.material.material.opacity; delay: 5000; from: 1; to: 0; dur: 10000; easing: easeInSine; startEvents: click;');
  // model.setAttribute('animation__opacity__click', 'property: model-opacity; delay: 1000; from: 1; to: 0; dur: 10000; easing: easeInSine; startEvents: click;');

  // model.setAttribute('event-set__click', '_target: #sky0'+ ((markersIndex - 1) % 2) +'; _delay: 1000; material.src: #panorama' + (markersIndex + 1) + '');
  // model.setAttribute('proxy-event__fadein', 'event: click; to: #sky0' + (markersIndex  % 2) + '; as: fadein');
  // model.setAttribute('proxy-event__fadeout', 'event: click; to: #sky0' + ((markersIndex - 1)  % 2) + '; as: fadeout');

  // model.setAttribute('event-set__click', '_target: #sky; _delay: 300; material.src: #panorama' + (markersIndex) + '');
  // model.setAttribute('proxy-event', 'event: click; to: #sky; as: fade');

  // model.setAttribute('proxy-event', 'event: click; to: #sky' + (markersIndex - 1) + '; as: fadeout');
  // model.setAttribute('proxy-event', 'event: click; to: #sky' + markersIndex + '; as: fadein');

  model.addEventListener('sound-ended', () => {
    // alert('SOUND ENDED');
    modelPlayingSound = null;
    if (pointsIndex < points.length) {
      model.setAttribute('sound-ended');
      model.emit('animation-sound-ended');

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
  let color = 'black';
  let opacity = '1';
  let scale = '0.5 0.5 0.5';
  // let text = 'value: WAYPOINT' + pointsIndex + '; width: 10;';

  let model = document.createElement('a-entity');
  model.setAttribute('id', 'waypoint' + pointsIndex);
  model.setAttribute('gltf-model', '#arrow' + (pointsIndex % 3 + 1));

  model.setAttribute('gps-entity-place', `latitude: ${point.lat}; longitude: ${point.lng};`);

  // model.setAttribute('text', text);
  // model.setAttribute('position', '0 378 0');
  // model.setAttribute('geometry', 'primitive: sphere');

  var rotation = getArrowRotation(points, pointsIndex);
  model.setAttribute('rotation', '90 ' + rotation + ' 0');

  model.setAttribute('material', `color: ${color}; opacity: ${opacity}; transparent: true; roughness: 1; displacementMap: #wave; displacementScale: 0.0; displacementBias: -0.005`);
  model.setAttribute('model-material');
  // model.setAttribute('refraction-shader', 'waypoint' + pointsIndex);
  model.setAttribute('scale', scale);
  // model.setAttribute('animation__scale__click', 'property: scale; to: 3 3 3; dur: 2000; easing: easeInOutSine; startEvents: click;');
  // model.setAttribute('animation__opacity__click', 'property: material.opacity; to: 0; dur: 2000; easing: easeInOutSine; startEvents: click;');
  // model.setAttribute('animation__color__near', 'property: components.material.material.color; type: color; to: white; dur: 500; startEvents: near;');
  model.setAttribute('animation__rotation__near', 'property: object3D.rotation.x; from: 90; to: 450; dur: 4000; easing: linear; loop: true; startEvents: near;');
  // model.setAttribute('animation__material__displacement1__click', 'property: material.displacementBias; from: 0; to: -0.005; dur: 1000; easing: easeInSine; startEvents: click;');

  registerModel(model, pointsIndex, false);

  return model;
}

// function getWayPointSphere(point, points, markers, pointsIndex, markersIndex, doAdvanceRoute = true) {
//   let color = 'white';
//   let opacity = '0.5';
//   let scale = '0.5 0.5 0.5';
// 
//   let model = document.createElement('a-entity');
//   model.setAttribute('id', 'waypoint-sphere' + pointsIndex);
//   model.setAttribute('gps-entity-place', `latitude: ${point.lat}; longitude: ${point.lng};`);
//   model.setAttribute('geometry', 'primitive: sphere');
//   // model.setAttribute('rotation', '90 0 0');
//   model.setAttribute('material', `color: ${color}; opacity: ${opacity}; transparent: true; roughness: 1; displacementMap: #wave; displacementScale: 0.0; displacementBias: -0.005`);
//   // model.setAttribute('glow-shader');
//   model.setAttribute('scale', scale);
//   registerModel(model, pointsIndex, false, true);
// 
//   model.addEventListener('click', () => {
//     model.setAttribute('clicked', true);
//   });
//   return model;
// }

function registerModel(model, index, isMarker = true, isWaypointSphere = false) {
  model.addEventListener('loaded', () => {
    window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'));

    let attrId = (isMarker ? 'marker' : (isWaypointSphere ? 'waypoint-sphere' : 'waypoint')) + index;
    model.setAttribute(attrId);
    AFRAME.registerComponent(attrId, {
      tick: function() {
        var el = this.el;

        let camPos = rig ? rig.object3D.position : camera.object3D.position;
        let elPos = model.object3D.position;
        let distance = camPos.distanceTo(elPos);

        if (distance) {
          if (distance < 10) {
            if (!model.getAttribute('near')) {
              model.setAttribute('near');
              model.emit('near');
            }

            if (isMarker) {
              modelToPlaySound = model;
            }
          } else {
            if (model.getAttribute('near')) {
              if (isMarker && !model.getAttribute('clicked')) {
                model.removeAttribute('near');
                model.emit('far');
              }
            }
          }

          if (!model.getAttribute('sound-ended')) {
            const mesh = el.getObject3D('mesh');
            if (mesh) {
              // opacity based on distance
              let opacity = Math.min(1, 6 / distance);
              mesh.material.opacity = opacity;
            }
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
    // models.push(getWayPointSphere(point, points, markers, pointsIndex, markersIndex, !advanceUntilNextMarker));
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
      // models.push(getWayPointSphere(point, points, markers, pointsIndex, markersIndex, !advanceUntilNextMarker));
      models.push(getWayPoint(point, points, markers, pointsIndex, markersIndex, false));
    }
  });
  models.reverse().forEach(m => scene.appendChild(m));
}
