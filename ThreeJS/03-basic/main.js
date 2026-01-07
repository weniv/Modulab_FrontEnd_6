import * as THREE from "three";

// 1. 장면 Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffe187);
scene.background = new THREE.Color("skyblue");

// 2. 카메라 Camera
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 10;
camera.position.x = 5;
camera.position.y = 5;
// 호출했을때 시점의 위치를 기준으로 각도를 계산
camera.lookAt(0, 0, 0);

camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);

// 3. 렌더러 Renderer
const renderer = new THREE.WebGLRenderer({
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

// 메쉬 Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x2e6ff2 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const geometry2 = new THREE.SphereGeometry(0.5);
const material2 = new THREE.MeshBasicMaterial({ color: "red" });
const ball = new THREE.Mesh(geometry2, material2);
ball.position.x = 2;
scene.add(ball);

// 애니메이션
function animate() {
  // cube.position.x += 0.01;
  // camera.rotation.y += 0.01;

  camera.position.x = Math.sin(new Date() * 0.001) * 5;
  camera.position.z = Math.cos(new Date() * 0.001) * 5;
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);

  if (cube.position.x > 3) {
    cube.position.x = -3;
  }
  requestAnimationFrame(animate);
}
animate();

// resize
window.addEventListener("resize", () => {
  // console.log("resize");
  // innerWidth, innerHeight 값이 바뀌는 요소는 모두 업데이트
  // 1. 카메라의 종횡비
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix(); // 카메라를 만들때 사용하는 속성(fov, aspect, near,far)가 바뀌었을때 꼭 호출!

  // 2. renderer의 size 변경
  renderer.setSize(window.innerWidth, window.innerHeight);

  // animate 함수가 없을때는 renderer.render로 다시 그려주어야 합니다.
  renderer.render(scene, camera);
});
