import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';
import { RGBELoader } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/RGBELoader.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js';
import { PointerLockControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/PointerLockControls.js';


import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube geometry
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);

// Create a cube material
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green color

// Create a cube mesh by combining the geometry and material
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

// Add the cube mesh to the scene
scene.add(cube);

// Create orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// Animation/render function
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Render the scene
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
});

// Start the animation loop
animate();



// //detects if mobile

// function isMobileDevice() {
//     return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
// }

// let camera;
// if (isMobileDevice()){
//     camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 1, 10000);
// } else {
//     camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
// }
// camera.position.set(3, 10, 3);





// //renderer
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.toneMapping = THREE.ACESFilmicToneMapping;
// renderer.toneMappingExposure = 1.0;
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.BasicShadowMap;
// document.body.appendChild(renderer.domElement);

// //scene
// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0x87ceeb);


// //animatiion / render
// function animate() {
//     requestAnimationFrame(animate);

//     const delta = clock.getDelta();

//     processKeyboard(delta);
    

//     if (isMobileDevice()) {
//         controls.update();
//     }

//     //about.rotation.y += 0.1;

//     renderer.render(scene, camera);
// }

// animate();