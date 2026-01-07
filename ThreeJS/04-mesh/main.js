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
const geometry = new THREE.TorusKnotGeometry(1, 0.3);

// 가장 기본적인 재질
// 빛의 영향을 받지 않는다.
const basicMaterial = new THREE.MeshBasicMaterial({ color: "orangered" });

const basicMesh = new THREE.Mesh(geometry, basicMaterial);
basicMesh.position.x = -7;
scene.add(basicMesh);

// standardMaterial
const standardMaterial = new THREE.MeshStandardMaterial({
  color: "orangered",
  metalness: 0.4,
  roughness: 0.4,
  // wireframe: true,
  flatShading: true,
});
const standardMesh = new THREE.Mesh(geometry, standardMaterial);
standardMesh.position.x = -3.5;
scene.add(standardMesh);
camera.position.set(0, 2, 20);

// physicalMaterial
const physicalMaterial = new THREE.MeshPhysicalMaterial({
  color: "orangered",
  metalness: 0.4,
  roughness: 0.2,
  clearcoat: 0.5,
  transmission: 1,
});
const physicalMesh = new THREE.Mesh(geometry, physicalMaterial);
scene.add(physicalMesh);

const cloneMesh = physicalMesh.clone();
cloneMesh.position.y = 5;
scene.add(cloneMesh);

const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshStandardMaterial({
    color: 0xff0000,
    side: THREE.DoubleSide, // Front, Back, Double
  })
);
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const materials = [
  new THREE.MeshStandardMaterial({ color: "red" }),
  new THREE.MeshStandardMaterial({ color: "orange" }),
  new THREE.MeshStandardMaterial({ color: "yellow" }),
  new THREE.MeshStandardMaterial({ color: "green" }),
  new THREE.MeshStandardMaterial({ color: "blue" }),
  new THREE.MeshStandardMaterial({ color: "violet" }),
];
const box = new THREE.Mesh(boxGeometry, materials);
box.position.y = 5;
box.position.z = 2;
scene.add(box);

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
