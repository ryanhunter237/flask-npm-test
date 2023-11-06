import * as THREE from 'three';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';


// Setup scene, camera, and renderer.  Add renderer to the viewer-container
const container = document.getElementById("viewer-container");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Setup TrackballControls for the camera and renderer
const controls = new TrackballControls(camera, renderer.domElement);
controls.rotateSpeed = 4.0;

// Reset the controls and camera to their original position 
document.getElementById('reset-button').addEventListener('click', () => {
    controls.reset();
    camera.position.z = 5;
    renderer.render(scene, camera);
});

// load the STL file and animate with controls.
// Wait for the DOM to be loaded before loading STL file.
document.addEventListener('DOMContentLoaded', () => {
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
});

camera.position.z = 5;
const animate = function () {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

animate();
