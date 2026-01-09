import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

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
// scene.add(box);

// 컨트롤 control
const controls = new OrbitControls(camera, renderer.domElement);

// loader 모델 불러오기
const gltfLoader = new GLTFLoader();
gltfLoader.load("./models/buslatt_glb.glb", (gltf) => {
  console.log("gltf", gltf);
  const model = gltf.scene;
  model.scale.setScalar(1.5);
  scene.add(model);

  // 실습
  // 사용자가 input 요소를 통해서 색상을 입력하면
  // 모델의 특정 부분이 색상이 변경되도록 하는 코드

  // 1. 특정 이름을 가지고 Mesh를 선택
  const chairBack = model.getObjectByName("Plane008");
  // chairBack.position.x = 1;
  const chairSeat = model.getObjectByName("Plane008_1");
  // chairSeat.position.y += 2;

  // 2. input 요소 생성
  const colorInput = document.createElement("input");
  colorInput.style.position = "absolute";
  colorInput.style.bottom = "20px";
  colorInput.style.left = "50%";
  colorInput.style.transform = "translateX(-50%)";
  colorInput.type = "color";
  document.body.appendChild(colorInput);

  // 3. input 요소의 색깔이 변경되었을 때, material을 업데이트
  colorInput.addEventListener("input", (e) => {
    console.log("e.target.value", e.target.value);
    chairBack.material.color = new THREE.Color(e.target.value);
    chairSeat.material.color = new THREE.Color(e.target.value);
  });
});

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
