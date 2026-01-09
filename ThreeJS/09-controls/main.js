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
camera.position.set(10, 10, 10);
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

// mesh
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

// 마우스의 클릭
const mouse = new THREE.Vector2(); // x, y
const raycaster = new THREE.Raycaster();

window.addEventListener("click", (e) => {
  // 브라우저에서 측정되는 마우스의 클릭 위치
  console.log(e.clientX, e.clientY);
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(meshes);
  console.log("intersects", intersects);
  // intersects.forEach((intersect) => {
  //   intersect.object.material.color = new THREE.Color("limegreen");
  // });
  if (intersects.length > 0) {
    intersects[0].object.material.color = new THREE.Color("limegreen");
  }
});

renderer.render(scene, camera);

// 컨트롤 control
const controls = new OrbitControls(camera, renderer.domElement);

// 애니메이션
renderer.setAnimationLoop((time) => {
  // meshes.forEach((mesh, index) => {
  //   mesh.position.y = 3 * Math.sin(time * 0.002 + index);
  //   mesh.material.color = new THREE.Color("hotpink");
  // });

  renderer.render(scene, camera);
});

// resize 반응형
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.render(scene, camera);
});
