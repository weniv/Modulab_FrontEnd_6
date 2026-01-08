import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// 장면 scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("black");

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

renderer.render(scene, camera);

// axesHelper
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// mesh
// 태양
const sun = new THREE.Mesh(
  new THREE.SphereGeometry(1),
  new THREE.MeshStandardMaterial({
    color: "orange",
  })
);
scene.add(sun);

// 지구
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(0.2),
  new THREE.MeshStandardMaterial({
    color: "skyblue",
  })
);
// earth.position.x = 3;
scene.add(earth);

// 달
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(0.1),
  new THREE.MeshStandardMaterial({
    color: "lightgray",
  })
);
moon.position.x = 0.5;
scene.add(moon);

// 지구 + 달
const earthGroup = new THREE.Group();
earthGroup.add(earth);
earthGroup.add(moon);

earthGroup.position.x = 3;
const earthHelper = new THREE.AxesHelper(3);
earthGroup.add(earthHelper);

const sunHelper = new THREE.AxesHelper(3);
// moon.add(sunHelper);

// earthGroup.position.y = 2;
scene.add(earthGroup);

// 컨트롤 control
const controls = new OrbitControls(camera, renderer.domElement);

// 애니메이션
renderer.setAnimationLoop((time) => {
  const speed = time * 0.01;

  // 태양 자전 속도: 0.1
  sun.rotation.y = 0.1 * speed;
  // 지구 자전 속도: 0.02
  earth.rotation.y = 0.02 * speed;
  // 달 자전 속도: 0.04
  moon.rotation.y = 0.04 * speed;

  // 지구 공전 속도: 0.01
  earthGroup.position.x = 3 * Math.sin(speed * 0.1);
  earthGroup.position.z = 3 * Math.cos(speed * 0.1);

  // 달 공전 속도: 0.02
  earthGroup.rotation.y = speed;
  renderer.render(scene, camera);
});

// resize 반응형
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.render(scene, camera);
});
