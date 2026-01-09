import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// 장면 scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("skyblue");

// 카메라 camera
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;
camera.position.set(2, 2, 2);
camera.lookAt(0, 0, 0);

// 렌더러 renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 빛 light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 2, 3);
scene.add(directionalLight);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: "hotpink" });
const box = new THREE.Mesh(geometry, material);
scene.add(box);

renderer.render(scene, camera);

// 컨트롤 control
// 첫번째 인자로 카메라, 두번째 인자로 렌더러의 DOM 요소
const controls = new OrbitControls(camera, renderer.domElement);

// 관성
controls.enableDamping = true;
// 자동 회전
// controls.autoRotate = true;
controls.autoRotateSpeed = -10;

// 줌, 이동, 회전
controls.enableZoom = true;
controls.enablePan = true; // 이동
controls.enableRotate = true;
controls.enabled = false;
controls.enabled = true;

// 확대 축소의 범위
controls.minDistance = 3;
controls.maxDistance = 10;

// 각도 제한
controls.minPolarAngle = Math.PI / 4;
controls.maxPolarAngle = Math.PI / 2;

// 애니메이션
renderer.setAnimationLoop(() => {
  // controls는 camera.lookAt 속성을 무시
  // controls의 중심이 되는 위치를 변경

  controls.target.set(2, 1, 0); // x, y, z 값을 전달
  controls.target.set(0, 0, 0);
  controls.update(); // enableDamping이 true일 때 필요
  renderer.render(scene, camera);
});

// resize 반응형
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.render(scene, camera);
});
