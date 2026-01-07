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

// 3. 렌더러 Renderer
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

const material = new THREE.MeshStandardMaterial({
  color: "blue",
  // wireframe: true,
});

// 박스
const boxGeometry = new THREE.BoxGeometry(1, 2, 3);
const box = new THREE.Mesh(boxGeometry, material);
box.position.x = -10;
scene.add(box);

// 구
const sphereGeometry = new THREE.SphereGeometry(0.8);
const sphere = new THREE.Mesh(sphereGeometry, material);
sphere.position.x = -8;
scene.add(sphere);

// plane 평면
const planeGeometry = new THREE.PlaneGeometry(10, 10);
const plane = new THREE.Mesh(planeGeometry, material);
// scene.add(plane);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -2;
plane.position.x = -8;

// 원기둥
const cylinder = new THREE.Mesh(new THREE.CylinderGeometry(1, 2, 1), material);
// scene.add(cylinder);

// 원뿔
const cone = new THREE.Mesh(new THREE.ConeGeometry(1, 2), material);
// scene.add(cone);

// 도넛
const torus = new THREE.Mesh(new THREE.TorusGeometry(1, 0.5), material);
// scene.add(torus);

// 매듭
const torusKnot = new THREE.Mesh(new THREE.TorusKnotGeometry(1, 0.3), material);
// scene.add(torusKnot);

// 팔면체
const octa = new THREE.Mesh(new THREE.OctahedronGeometry(1), material);
scene.add(octa);

// controls
const controls = new OrbitControls(camera, renderer.domElement);

// 애니메이션
function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

// resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
