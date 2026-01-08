import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import gsap from "gsap";

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

// 현재 상태 -> 목표 상태
gsap.to(box.position, {
  y: 2,
  x: 2,
  duration: 2,
  repeat: -1, // 기본 애니메이션 + repeat 횟수만큼 반복
  // repeat: -1을 넣게되면 무한 반복하는 애니메이션,
  yoyo: true,
  ease: "bounce.out",
});

const rotateAnimation = gsap.to(box.rotation, {
  y: Math.PI * 2,
  paused: true,
});
const button = document.createElement("button");
button.innerText = "회전 재생";
button.style.position = "absolute";
button.style.top = "10px";
button.style.left = "10px";
document.body.appendChild(button);
button.addEventListener("click", () => {
  rotateAnimation.play();
});

// 초기 상태 -> 현재 상태
gsap.from(box.scale, {
  x: 0.5,
  y: 0.5,
  z: 0.5,
});

// 초기 상태 -> 목표 상태
box.material.transparent = true; // opacity를 사용하기 위해
// gsap 숫자로 이루어진 값들은 모두 변경
// gsap.fromTo(
//   box.material,
//   {
//     opacity: 0,
//   },
//   {
//     opacity: 0.8,
//   }
// );

// 컨트롤 control
const controls = new OrbitControls(camera, renderer.domElement);

// 애니메이션
renderer.setAnimationLoop(() => {
  renderer.render(scene, camera);
});

// resize 반응형
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.render(scene, camera);
});
