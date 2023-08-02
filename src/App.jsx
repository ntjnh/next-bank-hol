import { useEffect, useState } from 'react'
import './App.css'
import Country from './components/Country'

function App() {
    

    return (
        <>
            <header>
                <h1>Next Bank Holiday</h1>
            </header>

            <main>
                <Country />

            </main>

            <footer>
                <a href="https://natejonah.com" target="_blank" rel="noreferrer">Nate</a> built this.
            </footer>
        </>
    )
}

export default App
