import Country from './components/Country'

function App() {
    return (
        <div className='flex flex-col flex-wrap items-start min-h-screen'>
            <header className='bg-zinc-900 border-b border-zinc-700/70 px-6 py-8 text-center w-full'>
                <h1 className='font-semibold text-3xl text-zinc-100'>Next Bank Holiday</h1>
            </header>

            <main className='flex-1 self-stretch w-full'>
                <Country />
            </main>

            <footer className='border-t border-zinc-700/70 px-6 py-4 self-end text-center text-xs text-zinc-600 w-full'>
                <a className='text-sky-800 underline hover:text-zinc-900' href='https://natejonah.com?utm_source=codebynate&utm_medium=web&utm_campaign=next_bank_hol' target='_blank' rel='noreferrer'>Nate</a> built this.
            </footer>
        </div>
    )
}

export default App
