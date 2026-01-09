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

const meshes = [];
for (let i = 0; i < 10; i++) {
  const mesh = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({ color: "hotpink" })
  );

  mesh.position.z = i * -2;
  scene.add(mesh);
  meshes.push(mesh);
}

renderer.render(scene, camera);

// Raycaster : 광선
const raycaster = new THREE.Raycaster();
const origin = new THREE.Vector3(0, 0, 5);
const direction = new THREE.Vector3(0, 0, -1);

raycaster.set(origin, direction);

const arrowHelper = new THREE.ArrowHelper(direction, origin, 1000, "red");
scene.add(arrowHelper);

// 컨트롤 control
const controls = new OrbitControls(camera, renderer.domElement);

// 애니메이션
renderer.setAnimationLoop((time) => {
  meshes.forEach((mesh, index) => {
    mesh.position.y = 3 * Math.sin(time * 0.002 + index);
    mesh.material.color = new THREE.Color("hotpink");
  });

  const intersects = raycaster.intersectObjects(meshes);
  console.log(intersects);
  intersects.forEach((intersect) => {
    console.log(intersect);
    intersect.object.material.color = new THREE.Color("yellow");
  });
  renderer.render(scene, camera);
});

// resize 반응형
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.render(scene, camera);
});
