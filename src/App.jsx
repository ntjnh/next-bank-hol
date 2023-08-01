import React from 'react'
import './App.css'
import Country from './Country'

function App() {
    return (
        <>
            <header>
                <h1>Next Bank Holiday</h1>
            </header>

            <main>
                <Country country="England and Wales" bankHolDate="28 August" bankHolName="Summer bank holiday" />
            </main>

            <footer>
                <a href="https://natejonah.com" target="_blank">Nate</a> built this.
            </footer>
        </>
    )
}

export default App
