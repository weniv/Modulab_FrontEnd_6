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

// GLTF 로더 -> 모델을 가져오기
const gltfLoader = new GLTFLoader();
gltfLoader.load("./models/Lycat-3d.glb", (gltf) => {
  console.log("gltf", gltf);

  const model = gltf.scene;
  model.scale.setScalar(0.5);
  model.position.y = -1;
  scene.add(model);

  // 특정 이름을 가진 Mesh 선택
  const licatHair = model.getObjectByName("NurbsPath");
  // licatHair.position.y = 2;

  // licatHair.material = licatHair.material.clone();
  licatHair.material.color = new THREE.Color("blue");
  console.log("model", model);

  // 버튼을 클릭하면 licatHair의 색상이 랜덤으로 변경되도록 하는 코드
  const changeButton = document.createElement("button");
  changeButton.innerText = "랜덤색으로 바꾸기";
  changeButton.style.position = "absolute";
  changeButton.style.top = "20px";
  changeButton.style.left = "20px";
  document.body.appendChild(changeButton);

  changeButton.addEventListener("click", () => {
    //이때 licatHair을 바꾸도록 하겠습니다.
    licatHair.material.color = new THREE.Color(
      Math.random(), //0 ~ 1 사이의 랜덤 숫자
      Math.random(),
      Math.random()
    ); // 3개의 숫자값을 전달하면 RGB
  });
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
