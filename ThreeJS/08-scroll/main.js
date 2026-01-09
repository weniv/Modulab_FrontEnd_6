import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
renderer.domElement.setAttribute("id", "three");

// 빛 light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 2, 3);
scene.add(directionalLight);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: "hotpink" });
const box = new THREE.Mesh(geometry, material);
scene.add(box);

renderer.render(scene, camera);

// ScrollTrigger
ScrollTrigger.create({
  // 어떤 요소를 감지할지
  trigger: "#sectionB",
  start: "top center", // 트리거의 최상단이 뷰포트의 가운데에 지나갈때
  end: "bottom center", // 트리거의 최하단이 뷰포트의 가운데를 지나갈때,
  onEnter: () => {
    // start로 들어갈때
    console.log("onEnter sectionB");
  },
  onLeave: () => {
    // end로 나갈때
    console.log("onLeave sectionB");
  },
  onEnterBack: () => {
    // end로 다시 들어올때
    console.log("onEnterBack sectionB");
  },
  onLeaveBack: () => {
    // start로 다시 나갈때
    console.log("onLeaveBack sectionB");
  },
  markers: true, // 디버깅용
});

// 애니메이션을 ScrollTrigger와 함께 사용
gsap.fromTo(
  box.position,
  { x: -2 },
  {
    x: 2,
    scrollTrigger: {
      trigger: "#sectionC",
      start: "top 80%", // 트리거의 최상단이 뷰포트의 80%
      end: "bottom 20%",
      markers: true,
      // enter가 되었을때 한번 동작

      // enter leave enterBack leaveBack
      toggleActions: "play none play reverse",
      scrub: true, // 스크롤 위치에 따라서 애니메이션을 진행
      // scrub이 있으면 toggleActions 무시
    },
  }
);

// 타임라인
const tl = gsap.timeline({
  // scrollTrigger를 등록
  scrollTrigger: {
    trigger: "#sectionD",
    start: "top 40%",
    end: "bottom 60%",
    scrub: true,

    // 색깔로 마커 구분
    markers: {
      startColor: "blue",
      endColor: "blue",
    },
  },
});

tl.to(box.rotation, {
  y: Math.PI,
  duration: 1, // scrub에서 비율
}).to(box.scale, {
  x: 2,
  y: 2,
  z: 2,
  duration: 2,
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
