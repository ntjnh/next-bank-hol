import { useEffect, useState } from 'react'
import BankHol from './BankHol'
import filterEvents from '../functions/filterEvents'
import monthToString from '../functions/monthToString'

function Country() {
    const countries = ['England and Wales', 'Scotland', 'Northern Ireland']

    const [bankHols, setBankHols] = useState({})
    const [selectedCountry, setSelectedCountry] = useState({
        full: 'England and Wales'
    })
    const [activeTab, setActiveTab] = useState(countries[0])
    
    // Grab dates from API
    useEffect(() => {
        fetch('https://www.gov.uk/bank-holidays.json')
            .then(res => res.json())
            .then(data => {
                setBankHols({
                    'england-and-wales': data['england-and-wales'],
                    'scotland': data['scotland'],
                    'northern-ireland': data['northern-ireland']
                })

                const engWalesNextEvent = filterEvents(data['england-and-wales'].events)[0]
                const engWalesNextEventDate = engWalesNextEvent.date
            
                // Create state for the current country and set England and Wales as the default
                setSelectedCountry({
                    ...selectedCountry,
                    name: engWalesNextEvent.title,
                    date: `${engWalesNextEventDate.getDate()} ${monthToString(engWalesNextEventDate)}`,
                    activeDefault: true
                })
            })
    }, [])

    function getNextBankHol(country) {
        const currentCountry = country.toLowerCase().replace(/\s/g, '-')

        // Get dates for the country and filter them
        const allDates = bankHols[currentCountry].events
        const nextBankHol = filterEvents(allDates)[0]

        // Get next holiday date
        const nextBankHolDate = nextBankHol.date

        // Update state with next holiday data for current country
        setSelectedCountry({
            full: country,
            name: nextBankHol.title,
            date: `${nextBankHolDate.getDate()} ${monthToString(nextBankHolDate)}`,
            activeDefault: false
        })
    }

    const allTabClasses = 'inline-flex items-center justify-center w-full h-14 gap-2 px-4 -mb-px text-gray-400 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed'
    const activeTabClasses = `${allTabClasses} bg-sky-700 focus:bg-sky-700 text-white focus:text-white stroke-sky-500 hover:stroke-sky-700 focus:stroke-sky-700`
    const genericTabClasses = `${allTabClasses} justify-self-center text-gray-600 stroke-slate-700 hover:stroke-sky-600`

    // Update data each time a tab is clicked depending on which country is active
    function handleClick(country) {
        setActiveTab(country)
        getNextBankHol(country)
    }

    // Full country names for display on front end
    const countryNames = countries.map((countryName, i) => {
        let countryNameLowerC = countryName.toLowerCase().replace(/\s/g, '-')
        return (
            <li key={i} className='w-1/3' data-country={countryName} role='presentation'>
                <button 
                    onClick={() => handleClick(countryName)} 
                    className={activeTab === countryName ? activeTabClasses : genericTabClasses} 
                    id={`tab-${countryNameLowerC}`} 
                    role='tab' 
                    aria-setsize='3' 
                    aria-posinset={i+1} 
                    tabIndex={activeTab === countryName ? '0' : '-1'} 
                    aria-controls={countryNameLowerC} 
                    aria-selected={activeTab === countryName ? 'true' : 'false'}
                >
                    {countryName}
                </button>
            </li>
        )
    })

    return (
        <article className='max-w-full'>
            <ul className='flex items-center border-b border-zinc-700/70 max-w-screen-sm mb-8 mx-auto' role='tablist'>
                {countryNames}
            </ul>

            {/* Pass next holiday data to the BankHol component to be displayed in DOM */}
            <BankHol 
                country={selectedCountry.full} 
                bankHolDate={selectedCountry.date} 
                bankHolName={selectedCountry.name} 
            />
        </article>
    )
}

export default Country
