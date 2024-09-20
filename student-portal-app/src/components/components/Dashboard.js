import React from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';

function ThreeScene() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Text color="white" anchorX="center" anchorY="middle">
        Welcome to Student Experience
      </Text>
    </Canvas>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ height: '400px' }}>
        <ThreeScene />
      </div>
      <nav>
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/study-planner">Study Planner</Link></li>
          <li><Link to="/study-buddy">Study Buddy</Link></li>
          <li><Link to="/open-forum">Open Forum</Link></li>
          <li><Link to="/campus-eats">Campus Eats</Link></li>
          <li><Link to="/campus-resources">Campus Resources</Link></li>
          <li><Link to="/career-lunch">Career Lunch</Link></li>
          <li><Link to="/fit-u">FitU</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;