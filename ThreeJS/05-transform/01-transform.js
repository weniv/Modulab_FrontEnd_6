import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffe187);
scene.background = new THREE.Color("skyblue");

const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

// 빛
const ambientLight = new THREE.AmbientLight("white", 1);
scene.add(ambientLight);

const directionlLight = new THREE.DirectionalLight("white", 1);
directionlLight.position.set(1, 2, 4);
scene.add(directionlLight);

// 메쉬 Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x2e6ff2 });

const materials = [
  new THREE.MeshStandardMaterial({ color: "red" }),
  new THREE.MeshStandardMaterial({ color: "orange" }),
  new THREE.MeshStandardMaterial({ color: "yellow" }),
  new THREE.MeshStandardMaterial({ color: "green" }),
  new THREE.MeshStandardMaterial({ color: "blue" }),
  new THREE.MeshStandardMaterial({ color: "violet" }),
];
const box = new THREE.Mesh(geometry, materials);
scene.add(box);

// position 위치
console.log("box", box.position);
box.position.x = 0;
box.position.y = 2;
box.position.z = -2;

box.position.set(1, 1, 1);
box.position.set(0, 0, 0);

// rotation 회전
// rad (360도 = 2PIrad)
// box.rotation.x = Math.PI / 6; // 45deg
// box.rotation.y = Math.PI / 4;
box.rotation.z = Math.PI / 4;
box.rotation.set(Math.PI / 2, Math.PI / 3, Math.PI / 4);

// deg -> rad
console.log(THREE.MathUtils.degToRad(180));
box.rotation.x = THREE.MathUtils.degToRad(60);
box.rotation.set(0, 0, 0);

// scale 크기
box.scale.x = 2; // 1보다 크면 확대
box.scale.y = 0.5; // 1보다 작으면 축소
box.scale.z = -1; // 음수를 주면 뒤집힌다.

box.scale.set(0.5, 2, 1);
box.scale.set(3, 3, 3);
box.scale.setScalar(2); // box.scale.set(2, 2, 2); 동일한 기능

// 축
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(10, 10);
scene.add(gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

// 애니메이션
function animate() {
  // box.position.x += 0.001;
  // box.rotation.x += 0.01;
  // box.rotation.y += 0.01;
  // box.rotation.z += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

// resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
});
