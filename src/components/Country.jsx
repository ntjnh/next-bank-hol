import { useEffect, useState } from 'react'
import BankHol from './BankHol'
import filterEvents from '../functions/filterEvents'
import monthToString from '../functions/monthToString'

function Country() {
    // Create state for bank hol data
    const [bankHols, setBankHols] = useState({})
    
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
            })
    }, [])

    // Create state for the current country
    const [selectedCountry, setSelectedCountry] = useState({
        full: 'England and Wales',
        name: 'Christmas Day',
        date: '25 December'
    })

    function getNextBankHol(country) {
        // Set England and Wales as the default
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
            date: `${nextBankHolDate.getDate()} ${monthToString(nextBankHolDate)}`
        })
    }    

    const [isActive, setIsActive] = useState(false)
    const [selectedTab, setSelectedTab] = useState(null)

    function toggleClasses(selectedTabId) {
        setIsActive(selectedTab === selectedTabId)
    }

    const allTabClasses = 'inline-flex items-center justify-center w-full h-14 gap-2 px-4 -mb-px text-gray-400 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed'

    const activeTabClasses = 'border-b border-sky-700 text-sky-700 focus:text-sky-700 stroke-sky-500 hover:stroke-sky-600 focus:stroke-sky-700'
    
    const genericTabClasses = 'justify-self-center text-gray-400 stroke-slate-700 focus:stroke-sky-600 focus:text-sky-600 hover:stroke-sky-600'

    const tabClasses = `${allTabClasses} ${isActive ? activeTabClasses : genericTabClasses}`

    // Update data each time a tab is clicked depending on which country is active
    function tabClick(e) {
        // Get name of country that's been clicked
        const clickedCountry = e.target.parentNode.dataset.country

        let selectedTabId = e.target.id
        let selected = selectedTab === selectedTabId ? null : selectedTabId

        setSelectedTab(selected)
        toggleClasses(selectedTabId)

        getNextBankHol(clickedCountry)
    }

    // Full country names for display on front end
    const countryNames = ['England and Wales', 'Scotland', 'Northern Ireland'].map((countryName, i) => {
        return (
            <li key={i} className='w-1/3' data-country={countryName} role='presentation' onClick={tabClick}>
                <button className={tabClasses} id={`tab-${i}`} role='tab' aria-setsize='3' aria-posinset={i+1} tabIndex={isActive ? '0' : '-1'} aria-controls={`tab-panel-${i+1}`} aria-selected={isActive ? 'true' : 'false'}>{countryName}</button>
            </li>
        )
    })

    return (
        <section className='max-w-full'>
            <ul className='flex items-center border-b border-zinc-700/70 mb-8' role='tablist'>
                {countryNames}
            </ul>

            {/* Pass next holiday data to the BankHol component to be displayed in DOM */}
            <BankHol country={selectedCountry.full} bankHolDate={selectedCountry.date} bankHolName={selectedCountry.name} />
        </section>
    )
}

export default Country
