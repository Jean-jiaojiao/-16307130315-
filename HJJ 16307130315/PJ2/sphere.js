var WIDTH = window.innerWidth - 30,
    HEIGHT = window.innerHeight - 30;

var angle = 45,
    aspect = WIDTH / HEIGHT,
    near = 0.1,
    far = 3000;

var container = document.getElementById('container');

var camera = new THREE.PerspectiveCamera(angle, aspect, near, far);
camera.position.set(0, 0, 0);
var scene = new THREE.Scene();

var light = new THREE.SpotLight(0xFFFFFF, 1, 0, Math.PI / 2, 1);
light.position.set(4000, 4000, 1500);
light.target.position.set(1000, 3800, 1000);

scene.add(light);

var sphereGeo = new THREE.SphereGeometry(30, 40, 400),
    sphereMat = new THREE.MeshPhongMaterial();


var sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
sphereMesh.position.set(-100, 0, 0);
sphereMesh.rotation.y = 5;

scene.add(sphereMesh);

camera.lookAt(sphereMesh.position);

//renderer
var renderer = new THREE.WebGLRenderer({ antialiasing: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.domElement.style.position = 'relative';

container.appendChild(renderer.domElement);
renderer.autoClear = false;
renderer.shadowMapEnabled = true;

function render() {
    renderer.render(scene, camera);
}

render();
