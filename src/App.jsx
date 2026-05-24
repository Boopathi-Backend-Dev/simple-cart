import { useState } from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Recomentation from './component/Recomentation'
import Reader from './component/Reader'
import SplashCursor from './component/SplashCursor'
function App() {

  return (
<>

<Navbar/>
<Hero/>
<Recomentation/>
<Reader></Reader>
<SplashCursor></SplashCursor>

</>
  )
}

export default App
