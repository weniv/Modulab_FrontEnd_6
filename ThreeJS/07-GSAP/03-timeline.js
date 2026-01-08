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
camera.position.set(2, 5, 10);
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

// 시퀀스 애니메이션 timeline
const timeline = gsap.timeline({
  repeat: -1,
  yoyo: true,
  paused: true,
});
timeline
  .to(box.position, {
    x: 2,
    duration: 2,
  })
  .to(
    box.position,
    {
      y: 2,
    },
    "-=1"
  )
  .to(
    box.rotation,
    {
      x: Math.PI,
      y: Math.PI,
    },
    "+=1" // 이 시간만큼 간격이 발생
  )
  .to(
    box.scale,
    {
      x: 2,
      y: 1.5,
      z: 0.5,
    },
    "<"
  );

const startButton = document.createElement("button");
startButton.innerText = "재생하기";
startButton.style.position = "absolute";
startButton.style.top = "10px";
startButton.style.left = "10px";
document.body.appendChild(startButton);

startButton.addEventListener("click", () => {
  timeline.play();
});

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
