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

// texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(
  "./textures/Wood_Roof_Shingles_002_basecolor.png"
);
// material.map = texture;
const normalTexture = textureLoader.load(
  "./textures/Wood_Roof_Shingles_002_normal.png"
);
const roughnessTexture = textureLoader.load(
  "./textures/Wood_Roof_Shingles_002_roughness.png"
);
const aoTexture = textureLoader.load(
  "./textures/Wood_Roof_Shingles_002_ambientOcclusion.png"
);

// mesh
const geometry = new THREE.SphereGeometry(1);
const material = new THREE.MeshStandardMaterial({
  //color: "hotpink" // 색상이 곱해지기 때문에 주석처리

  // map: 색상을 나타내는 텍스쳐
  map: texture,

  // normalMap
  // 표면의 울퉁불퉁함
  normalMap: normalTexture,

  // roughnessMap
  // 거칠기를 나타냄
  roughnessMap: roughnessTexture,
  roughness: 0.2,

  // aoMap
  // 굴곡진 부분을 더 어둡게 표현
  aoMap: aoTexture,
  aoMapIntensity: 2,
});
const box = new THREE.Mesh(geometry, material);
scene.add(box);

renderer.render(scene, camera);

directionalLight.position.set(0, 5, 0);
const plane = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), material);
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

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
