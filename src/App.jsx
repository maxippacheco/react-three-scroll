import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './Experience'
import { Overlay } from './components/Overlay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Suspense fallback={<></>}>
      <Canvas camera={{
        fov: 64,
        position: [2.3, 1.5, 2.3]
      }}>
        {/* <Overlay /> */}
        <Experience />
      </Canvas>
    </Suspense>
  )
}

export default App
