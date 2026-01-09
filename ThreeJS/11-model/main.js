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
camera.position.set(0, 3, 10);

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
const modelUrl =
  "https://threejs.org/examples/models/gltf/RobotExpressive/RobotExpressive.glb";

const gltfLoader = new GLTFLoader();

let mixer;
const actions = {};
gltfLoader.load(modelUrl, (gltf) => {
  console.log("gltf", gltf);

  const model = gltf.scene;
  model.position.y = -2;
  scene.add(model);

  const animations = gltf.animations;

  // 1. 애니메이션 믹서를 만든다.
  mixer = new THREE.AnimationMixer(model);

  // 2. 애니메이션 클립을 믹서에 연결
  console.log("animations", animations);
  animations.forEach((clip) => {
    const action = mixer.clipAction(clip);
    actions[clip.name] = action;
  });

  // 4. 애니메이션을 실행
  // actions["Walking"].play();

  // 애니메이션 클립들을 사용해서 버튼을 추가
  // 객체의 키들을 배열로 변환하는 방법
  // console.log(Object.keys(actions));
  const btnContainer = document.querySelector(".btn-container");
  Object.keys(actions).forEach((name) => {
    const button = document.createElement("button");
    button.innerText = name;
    btnContainer.appendChild(button);

    button.addEventListener("click", () => {
      // 이전 애니메이션을 종료
      Object.values(actions).forEach((action) => {
        action.stop();
      });
      actions[name].play();
    });
  });
});

// 애니메이션
renderer.setAnimationLoop(() => {
  // 3. mixer 업데이트
  if (mixer) {
    mixer.update(0.01);
  }
  renderer.render(scene, camera);
});

// resize 반응형
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.render(scene, camera);
});
