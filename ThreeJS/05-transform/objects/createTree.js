import * as THREE from "three";

export default function createTree() {
  const tree = new THREE.Group();

  // 나무 줄기
  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.2, 0.4, 1),
    new THREE.MeshStandardMaterial({
      color: "sandybrown",
    })
  );
  trunk.position.y = 0.5;
  tree.add(trunk);

  // 나무 잎
  const leaves = new THREE.Mesh(
    new THREE.ConeGeometry(1, 2, 8),
    new THREE.MeshStandardMaterial({
      color: "green",
    })
  );
  leaves.position.y = 1.5;
  tree.add(leaves);

  return tree;
}
