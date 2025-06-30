import { useEffect, useState } from 'react'
import NextHoliday from './NextHoliday'
import groupByYear from '../functions/groupByYear'
import filterEvents from '../functions/filterEvents'
import monthToString from '../functions/monthToString'
import Upcoming from './Upcoming'
import Tabs from './Tabs'

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

    return (
        <article className="max-w-full">
            <Tabs
                activeTab={activeTab}
                bankHolidays={bankHolidays}
                countries={countries}
                setActiveTab={setActiveTab}
                setSelectedCountry={setSelectedCountry}
            />

            <NextHoliday 
                country={selectedCountry.full} 
                bankHolDate={selectedCountry.date} 
                bankHolName={selectedCountry.name} 
            />

            <Upcoming
                country={selectedCountry.full}
                dates={selectedCountry.upcoming}
            />
        </article>
    )
}

export default Country
