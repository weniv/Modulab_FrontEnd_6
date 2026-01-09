import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// 장면 scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e); // 어두운 배경으로 빛이 잘 보이게

// 카메라 camera
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(8, 8, 8);
camera.lookAt(0, 0, 0);

// 렌더러 renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 바닥
const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshStandardMaterial({
    color: "white",
    side: THREE.DoubleSide,
    roughness: 0.8,
  })
);
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

// 빛 특성 비교용 구체들
const sphereGeometry = new THREE.SphereGeometry(0.8, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({
  color: "white",
  roughness: 0.3,
  metalness: 0.2,
});

// 구체 배치 (3x3 그리드)
const spheres = [];
for (let x = -3; x <= 3; x += 3) {
  for (let z = -3; z <= 3; z += 3) {
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial.clone());
    sphere.position.set(x, 0.8, z);
    spheres.push(sphere);
    scene.add(sphere);
  }
}

// 1. AmbientLight
// 방향이 없는 빛, 전체적인 화면 밝기
const ambientLight = new THREE.AmbientLight("white", 1);
scene.add(ambientLight);

// 2. DirectionalLight
// 태양같은 빛
const directionalLight = new THREE.DirectionalLight("red", 1);
directionalLight.position.set(5, 10, 7);
scene.add(directionalLight);

const directionalHelper = new THREE.DirectionalLightHelper(
  directionalLight,
  2,
  "red"
);
scene.add(directionalHelper);

// 3. PointLight
// 전구같은 빛 (광원)
const pointLight = new THREE.PointLight("cyan", 1, 30, 2);
pointLight.position.set(-5, 5, 0);
scene.add(pointLight);

const pointLightHelper = new THREE.PointLightHelper(pointLight, 1, "cyan");
scene.add(pointLightHelper);

// 그림자 속성
// 1. 빛이 그림자를 만들도록 설정
// directionalLight, pointLight
directionalLight.castShadow = true;

// 2. 물체에 그림자를 만들도록 설정
spheres.forEach((sphere) => {
  sphere.castShadow = true; // 그림자를 만드는 물체
  sphere.receiveShadow = true;
});
plane.receiveShadow = true; // 그림자를 받는 물체

// 3. 렌더러에서 그림자를 계산하도록 설정
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // 그림자 부드럽게

// 컨트롤 control
const controls = new OrbitControls(camera, renderer.domElement);

// 애니메이션 - PointLight 움직임으로 특성 강조
renderer.setAnimationLoop((time) => {
  // PointLight 원형 이동

  controls.update();
  renderer.render(scene, camera);
});

// resize 반응형
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
