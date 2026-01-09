import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);
renderer.domElement.setAttribute("id", "canvas");

const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const directionalLight = new THREE.DirectionalLight("white", 0.5);
directionalLight.position.set(-3, 5, 2);
scene.add(directionalLight);

/**
 * 1. Sphere
 * (-10, 0, 0) -> (0, 0, 0)
 */
const sphereGeometry = new THREE.SphereGeometry(1.2, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({
  color: 0x00f0ff,
  metalness: 0.5,
  roughness: 0.3,
  emissive: 0x00f0ff,
  emissiveIntensity: 0.15,
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

gsap.fromTo(
  sphere.position,
  {
    x: -10,
  },
  {
    x: 0,
    scrollTrigger: {
      trigger: "#section1",
      start: "top center",
      end: "bottom center",
      toggleActions: "play reverse play reverse",
    },
  }
);

/**
 * 2. Cube
 * (10, 0, 0) -> (0, 0, 0)
 */
const cubeGeometry = new THREE.BoxGeometry(1.8, 1.8, 1.8);
const cubeMaterial = new THREE.MeshStandardMaterial({
  color: 0xff00aa,
  metalness: 0.5,
  roughness: 0.3,
  emissive: 0xff00aa,
  emissiveIntensity: 0.15,
});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

gsap.from(cube.position, {
  x: 10,
  scrollTrigger: {
    trigger: "#section2",
    start: "top center",
    end: "bottom center",
    toggleActions: "play reverse play reverse",
    markers: true,
  },
});
gsap.from(cube.rotation, {
  x: Math.PI * 2,
  y: Math.PI * 2,
  scrollTrigger: {
    trigger: "#section2",
    start: "top center",
    end: "bottom center",
    toggleActions: "play reverse play reverse",
    markers: true,
  },
});

/**
 * 3. Torus
 * (0, 10, 0) -> (0, 0, 0)
 */
const torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 50);
const torusMaterial = new THREE.MeshStandardMaterial({
  color: 0xffdd00,
  metalness: 0.5,
  roughness: 0.3,
  emissive: 0xffdd00,
  emissiveIntensity: 0.15,
});
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
scene.add(torus);

gsap.from(torus.position, {
  y: 10,
  scrollTrigger: {
    trigger: "#section3",
    start: "top center",
    end: "bottom center",
    toggleActions: "play reverse play reverse",
    markers: true,
  },
});

/**
 * 4. Octahedron
 * (0, -10, 0) -> (0, 0, 0)
 */
const octahedronGeometry = new THREE.OctahedronGeometry(1.3);
const octahedronMaterial = new THREE.MeshStandardMaterial({
  color: 0x00ff88,
  metalness: 0.5,
  roughness: 0.3,
  emissive: 0x00ff88,
  emissiveIntensity: 0.15,
});
const octahedron = new THREE.Mesh(octahedronGeometry, octahedronMaterial);
scene.add(octahedron);

gsap.from(octahedron.position, {
  y: -10,
  scrollTrigger: {
    trigger: "#section4",
    start: "top center",
    end: "bottom center",
    toggleActions: "play reverse play reverse",
    markers: true,
  },
});

/**
 * 5. TorusKnot
 * (0, 0, 10) -> (0, 0, 0)
 */
const torusKnotGeometry = new THREE.TorusKnotGeometry(0.8, 0.3, 64, 16);
const torusKnotMaterial = new THREE.MeshStandardMaterial({
  color: 0xaa00ff,
  metalness: 0.5,
  roughness: 0.3,
  emissive: 0xaa00ff,
  emissiveIntensity: 0.15,
});
const torusKnot = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);
scene.add(torusKnot);

gsap.from(torusKnot.position, {
  z: 10,
  scrollTrigger: {
    trigger: "#section5",
    start: "top center",
    end: "bottom center",
    toggleActions: "play reverse play reverse",
    markers: true,
  },
});

renderer.setAnimationLoop(() => {
  // 보이는 오브젝트만 회전
  if (sphere.scale.x > 0.1) {
    sphere.rotation.x += 0.005;
    sphere.rotation.y += 0.008;
  }
  if (cube.scale.x > 0.1) {
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.008;
  }
  if (torus.scale.x > 0.1) {
    torus.rotation.x += 0.005;
    torus.rotation.y += 0.008;
  }
  if (octahedron.scale.x > 0.1) {
    octahedron.rotation.x += 0.005;
    octahedron.rotation.y += 0.008;
  }
  if (torusKnot.scale.x > 0.1) {
    torusKnot.rotation.x += 0.005;
    torusKnot.rotation.y += 0.008;
  }

  renderer.render(scene, camera);
});

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
