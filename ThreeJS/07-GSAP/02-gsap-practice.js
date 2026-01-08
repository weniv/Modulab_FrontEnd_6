import * as THREE from "three";
import gsap from "gsap";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 8);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 조명
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// 큐브 (좌우 이동 + 회전 반복)
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0x4ecdc4 })
);
cube.position.x = -3;
scene.add(cube);

gsap.fromTo(
  cube.position,
  {
    x: -2,
  },
  {
    x: -4,
    // repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    duration: 1,
  }
);
gsap.to(cube.rotation, {
  y: Math.PI * 2,
  // repeat: -1,
  delay: 1,
  duration: 3,
});

// 구 (위에서 아래로 떨어지며 튀기는 효과)
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.6, 32, 32),
  new THREE.MeshStandardMaterial({ color: 0xff6b6b })
);
scene.add(sphere);

gsap.from(sphere.position, {
  y: 3,
  duration: 1,
  repeat: -1,
  // yoyo: true,
  ease: "bounce.out",
});

// 도넛 (크기 변경되는 애니메이션)
const torus = new THREE.Mesh(
  new THREE.TorusGeometry(0.5, 0.2, 16, 100),
  new THREE.MeshStandardMaterial({ color: 0xffe66d })
);
torus.position.x = 3;
scene.add(torus);

gsap.fromTo(
  torus.scale,
  {
    x: 0.5,
    y: 0.5,
    z: 0.5,
  },
  {
    x: 1.5,
    y: 1.5,
    z: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "linear",
    duration: 1,
  }
);

// 렌더링 루프
renderer.setAnimationLoop(() => {
  renderer.render(scene, camera);
});
