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
        name: 'England and Wales',
        title: 'Bank Hol',
        date: '7 June'
    })

    // Update data each time a tab is clicked depending on which country is active
    function tabClick(e) {
        // Get name of country that's been clicked
        const clickedCountry = e.target.dataset.country
        const currentCountry = clickedCountry.toLowerCase().replace(/\s/g, '-')

        // Get dates for the country and filter them
        const allDates = bankHols[currentCountry].events
        const nextBankHol = filterEvents(allDates)[0]

        // Get next holiday date
        const nextBankHolDate = nextBankHol.date

        // Update state with next holiday data for current country
        setSelectedCountry({
            full: clickedCountry,
            name: nextBankHol.title,
            date: `${nextBankHolDate.getDate()} ${monthToString(nextBankHolDate)}`
        })
    }

    // Full country names for display on front end  
    const engWal = 'England and Wales',
        scot = 'Scotland',
        nire = 'Northern Ireland'

    return (
        <article>
            <ul>
                <li data-country={engWal} onClick={tabClick}>{engWal}</li>
                <li data-country={scot} onClick={tabClick}>{scot}</li>
                <li data-country={nire} onClick={tabClick}>{nire}</li>
            </ul>

            {/* Pass next holiday data to the BankHol component to be displayed in DOM */}
            <BankHol country={selectedCountry.full} bankHolDate={selectedCountry.date} bankHolName={selectedCountry.name} />
        </article>
    )
}

export default Country
