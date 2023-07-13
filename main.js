import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement);

const DiceGeometry = new THREE.IcosahedronGeometry(1, 0);
const DiceWireframe = new THREE.WireframeGeometry(DiceGeometry)
const DiceLineMaterial = new THREE.LineBasicMaterial({ color: 0x00000, linewidth: 10 });
const DiceLine = new THREE.LineSegments(DiceWireframe, DiceLineMaterial);
scene.add(DiceLine);

const DiceMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
const Dice = new THREE.Mesh(DiceGeometry, DiceMaterial);
scene.add(Dice);


camera.position.z = 5;

const Column = new THREE.CylinderGeometry(1,1,5);
const LeftColumnWireframe = new THREE.WireframeGeometry(Column)
const LeftColumnMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
const LeftColumn = new THREE.Mesh(Column, LeftColumnMaterial);
const LeftColumnLine = new THREE.LineSegments(LeftColumnWireframe, DiceLineMaterial);
LeftColumn.rotation.z += 1.55
LeftColumnLine.rotation.z = LeftColumn.rotation.z
scene.add(LeftColumnLine);
scene.add(LeftColumn);


function animate() {
    requestAnimationFrame(animate)
    
    Dice.rotation.x += 0.01
    Dice.rotation.y += 0.01
    Dice.rotation.z += 0.01

    DiceLine.rotation.x = Dice.rotation.x
    DiceLine.rotation.y = Dice.rotation.y
    DiceLine.rotation.z = Dice.rotation.z

    renderer.render(scene, camera)
}

animate();