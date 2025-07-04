import Country from './components/Country'

function App() {
    return (
        <div className='flex flex-col flex-wrap items-start min-h-screen'>
            <header className='bg-zinc-900 border-b border-zinc-700/70 px-6 py-8 text-center w-full'>
                <h1 className='font-semibold text-3xl text-zinc-100'>
                    Next Bank Holiday
                </h1>
            </header>

            <main className='flex-1 self-stretch w-full'>
                <Country />
            </main>

            <footer className='bg-sky-50 border-t-2 border-sky-700 mt-16 px-6 py-4 self-end text-center text-xs text-zinc-600 w-full'>
                <a
                    className='text-sky-700 underline hover:text-zinc-900'
                    href='https://nate-dev.com?utm_source=codebynate&utm_medium=web&utm_campaign=next_bank_hol'
                    target='_blank'
                    rel='noreferrer'>Nate</a> built this.
            </footer>
        </div>
    )
}

export default App
