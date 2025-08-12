import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='wrapper'>
        <nav className='navbar'>
          <h1 className='logo'>My React</h1>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
        </nav>

        <header className='hero'>
          <h2 className='fade-in'>Welcome to My Project</h2>
          <p className='fade-in delay'>Code with Style, Ship with Speed - Vite + React Experiance</p>
          <a href="#project" className='btn fade-in delay-2'>See My Project Guys</a>
        </header>

        <section id='projects' className='section'>
          <h3>About Me</h3>
          <p>Transforming ideas into stunning, functional web apps - powered by magic of React and </p>
        </section>

        <section id='projects' className='section'>
          <h3>Project</h3>
          <div className='card'>
            <h4>Task Manager</h4>
            <p>Your smart companion for staying organized and achieving more every day</p>
          </div>
        </section>

        <footer id='contact' className='footer'>
          <p>Contact me at <a href="ig">https://www.instagram.com/reezzz08/</a></p>
        </footer>

      </div>
    </>
  )
}

export default App
