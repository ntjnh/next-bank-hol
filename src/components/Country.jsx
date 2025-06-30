import { useEffect, useState } from 'react'
import BankHol from './BankHol'
import getHolidays from '../functions/ getHolidays'
import groupByYear from '../functions/groupByYear'
import filterEvents from '../functions/filterEvents'
import monthToString from '../functions/monthToString'
import List from './List'

function Country() {
    const countries = ['England and Wales', 'Scotland', 'Northern Ireland']

    const [bankHolidays, setBankHolidays] = useState({})
    const [selectedCountry, setSelectedCountry] = useState({
        full: 'England and Wales',
        upcoming: []
    })
    const [activeTab, setActiveTab] = useState(countries[0])
    
    // Grab dates from API
    useEffect(() => {
        fetch('https://www.gov.uk/bank-holidays.json')
            .then(res => res.json())
            .then(data => {
                setBankHolidays({
                    'england-and-wales': data['england-and-wales'],
                    'scotland': data['scotland'],
                    'northern-ireland': data['northern-ireland']
                })

                const engWalesNextEvent = filterEvents(data['england-and-wales'].events, 'next')
                const engWalesNextEventDate = engWalesNextEvent.date
            
                // Create state for the current country and set England and Wales as the default
                setSelectedCountry({
                    ...selectedCountry,
                    name: engWalesNextEvent.title,
                    date: `${engWalesNextEventDate.getDate()} ${monthToString(engWalesNextEventDate)}`,
                    upcoming: groupByYear(filterEvents(data['england-and-wales'].events, 'upcoming')),
                    activeDefault: true
                })
            })
    }, [])

    // TODO: Add to Tabs component
    const allTabClasses = 'tab'
    const activeTabClasses = `${allTabClasses} tab--active`
    const genericTabClasses = `${allTabClasses} tab--generic`

    // TODO: Add to Tabs component
    // Update data each time a tab is clicked depending on which country is active
    function handleClick(country) {
        setActiveTab(country)
        getHolidays(bankHolidays, country, setSelectedCountry)
    }

    // TODO: Add to Tabs component
    // Full country names for display on front end
    const countryNames = countries.map((countryName, i) => {
        let countryNameLowerC = countryName.toLowerCase().replace(/\s/g, '-')

        return (
            <li 
                key={i} 
                className="w-1/3" 
                data-country={countryName} 
                role="presentation">
                <button 
                    onClick={() => handleClick(countryName)} 
                    className={activeTab === countryName ? 
                        activeTabClasses : 
                        genericTabClasses
                    }
                    id={`tab-${countryNameLowerC}`} 
                    role="tab" 
                    aria-setsize="3" 
                    aria-posinset={i+1} 
                    tabIndex={activeTab === countryName ? `0` : `-1`} 
                    aria-controls={countryNameLowerC} 
                    aria-selected={activeTab === countryName ? `true` : `false`}
                >
                    {countryName}
                </button>
            </li>
        )
    })

    return (
        <article className="max-w-full">
            <ul 
                className="tab-list" 
                role="tablist"
            >
                {countryNames}
            </ul>

            {/* Pass next holiday data to the BankHol component to be displayed in DOM */}
            {/* TODO: Rename this component */}
            <BankHol 
                country={selectedCountry.full} 
                bankHolDate={selectedCountry.date} 
                bankHolName={selectedCountry.name} 
            />

            <List
                country={selectedCountry.full}
                dates={selectedCountry.upcoming}
            />
        </article>
    )
}

export default Country
