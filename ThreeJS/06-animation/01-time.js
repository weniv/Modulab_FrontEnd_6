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
camera.position.set(5, 5, 5);
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
const controls = new OrbitControls(camera, renderer.domElement);

// 애니메이션
// function animate() {
//   // box.position.y += 0.01;
//   renderer.render(scene, camera);
//   controls.update();
//   requestAnimationFrame(animate);
// }
// animate();

const clock = new THREE.Clock(false);
// 인자로 false가 들어가면 자동 재생이 방지

// three.js 제안하는 방식
renderer.setAnimationLoop((time) => {
  // getDelta: 이전 getDelta를 호출한 이후에 시간
  const delta = clock.getDelta();
  // box.rotation.y += delta;

  // clock 생성된 후에 경과 시간
  // const elapsedTime = clock.getElapsedTime();
  console.log(clock.getDelta);

  // setAnimationLoop은 경과 시간 (ms 단위)
  box.position.y = Math.sin(time * 0.002);
  box.rotation.y += delta;
  renderer.render(scene, camera);

  // 주의할 점, 같이 호출하지 말것!
});
// setTimeout(() => {
//   renderer.setAnimationLoop(null);
// }, 3000);

const button = document.createElement("button");
button.innerText = "재생";
button.style.position = "absolute";
button.style.top = "10px";
button.style.left = "10px";
document.body.appendChild(button);

button.addEventListener("click", () => {
  clock.start();
});
// 멈추는건 clock.stop();

// resize 반응형
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.render(scene, camera);
});
