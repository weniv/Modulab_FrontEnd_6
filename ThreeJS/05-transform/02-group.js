import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// 1. scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("skyblue");

// 2. camera
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);

// 3. renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 빛 light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 2, 3);
scene.add(directionalLight);

// 4. 3d 객체 mesh
// mesh = geometry + material
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: "hotpink" });
const box = new THREE.Mesh(geometry, material);
scene.add(box);

renderer.render(scene, camera);

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.6, 32, 32),
  new THREE.MeshStandardMaterial({ color: "lightgreen" })
);

// 그룹
const group = new THREE.Group();
group.add(box);
group.add(sphere);
scene.add(group);

group.position.y = 2;
group.position.x = 2;
box.position.x = 2;
console.log(box.position);
console.log("scene에서의 실제 좌표", box.getWorldPosition(new THREE.Vector3()));
// box의 실제 위치는
// group.position.x + box.position.x

// 축
const sceneAxis = new THREE.AxesHelper(3);
scene.add(sceneAxis);

const groupAxis = new THREE.AxesHelper(3);
group.add(groupAxis);

// 컨트롤 control
// const controls = new OrbitControls(camera, renderer.domElement);

// 애니메이션
function animate() {
  group.rotation.y += 0.02;
  // box.rotation.x += 0.02;
  // camera.position.z += 0.01;
  camera.lookAt(0, 0, 0); // 특정 위치 좌표
  camera.lookAt(box.getWorldPosition(new THREE.Vector3())); // 특정 객체 바라보기
  renderer.render(scene, camera);
  // controls.update();
  requestAnimationFrame(animate);
}
animate();

// resize 반응형
window.addEventListener("resize", () => {
  // innerWidth, innerHeight 변경
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.render(scene, camera);
});
