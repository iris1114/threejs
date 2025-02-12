import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Axes Helper 來顯示場景中的三個軸
 */
const axesHelper = new THREE.AxesHelper(2); // 創建長度為 2 單位的輔助軸
scene.add(axesHelper); // 添加到場景

/**
 * Objects
 */

const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
);
mesh.position.set(0.8, -0.6, 1); // 設定位置
mesh.scale.set(1, 0.5, 1); // 設定大小
// mesh.rotation.set(Math.PI * 0.25, Math.PI * 0.25, 0); // 設定旋轉
mesh.rotation.set(0, 0, 0.5); // 設定旋轉 上下/左右/360度

scene.add(mesh);

/**
 * Group Objects
 */

const group = new THREE.Group();
group.scale.y = 2; // 群組整體縮放
group.rotation.y = 0.2; // 群組整體旋轉
scene.add(group); // 添加群組到場景

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube1.position.x = -1.5;
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube2.position.x = 0;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube3.position.x = 1.5;
group.add(cube3);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(0, 0.2, 3);
// camera.lookAt(new THREE.Vector3(0, -1, 0)); //可讓物件的 -z 軸 朝向指定目標
// camera.lookAt(scene.position); // 確保相機看向場景中心
camera.lookAt(group.position); // 確保相機看向group中心
// camera.lookAt(cube1.position); // 確保相機看向cube1中心

scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
