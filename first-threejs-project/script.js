import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1); //width, height, depth
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
}); //poperty of the material
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const redenderer = new THREE.WebGLRenderer({ canvas: canvas });
redenderer.setSize(sizes.width, sizes.height);
redenderer.render(scene, camera);
