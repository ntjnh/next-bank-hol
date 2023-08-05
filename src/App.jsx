import Country from './components/Country'

function App() {
    return (
        <>
            <header className='border-b mb-5 px-6 py-8 text-center'>
                <h1 className='font-semibold text-3xl'>Next Bank Holiday</h1>
            </header>

            <main>
                <Country />
            </main>

            <footer className='border-t mt-5 px-6 py-4 text-center text-xs'>
                <a className='text-sky-600 hover:text-sky-800' href='https://natejonah.com?utm_source=codebynate&utm_medium=web&utm_campaign=next_bank_hol' target='_blank' rel='noreferrer'>Nate</a> built this.
            </footer>
        </>
    )
}

export default App
