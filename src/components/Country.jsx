import { useEffect, useState } from "react"
import BankHol from "./BankHol"

function Country() {
    const engWal = 'England and Wales', 
    scot = 'Scotland',
    nire = 'Northern Ireland'

    // Grab dates from API
    const [bankHols, setBankHols] = useState({})

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

    // const today = new Date()
    // const month = today.getMonth()
    // const year = today.getFullYear()

    // console.log(`${month + 1} ${year}`)

    function filterEvents(eventsArr) {

        console.log(`Starting date amount: ${eventsArr.length}`)
        let count = 0
        const filtered = eventsArr.map(hol => {
            hol['date'] = hol['date'].split('-').map(d => parseInt(d))

            return hol
        }).filter(hol => {
            const holDate = hol['date']

            const today = new Date()
            const month = today.getMonth() + 1
            const year = today.getFullYear()

            
            if ((holDate[0] >= year) && (holDate[1] >= month)) {
                console.log(`Current month is ${month} and hol month is ${holDate[1]}`)
                console.log(`${count}: ${holDate}`)
                count++
            }

            // only filter out months if year is 2023

            return (holDate[0] >= year) && (holDate[1] >= month)
        })
        
        console.log(`Final date amount should be: 19`)
        
        return filtered
    }

    // Country Selection
    const [selectedCountry, setSelectedCountry] = useState('England and Wales')

    function tabClick(e) {
        let currentCountry = e.target.dataset.country
        setSelectedCountry(currentCountry)

        currentCountry = currentCountry.toLowerCase().replace(/\s/g, '-')

        console.log(currentCountry)
        console.log(filterEvents(bankHols[currentCountry]['events']))
    }

    return (
        <article>
            <ul>
                <li data-country={engWal} onClick={tabClick}>{engWal}</li>
                <li data-country={scot} onClick={tabClick}>{scot}</li>
                <li data-country={nire} onClick={tabClick}>{nire}</li>
            </ul>

            <BankHol country={selectedCountry} bankHolDate={7} bankHolName={9} />
        </article>
    )
}

export default Country
