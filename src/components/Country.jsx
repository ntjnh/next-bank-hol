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
                    englandWales: data['england-and-wales'],
                    scotland: data['scotland'],
                    northernIreland: bankHols['northern-ireland']
                })
            })
    }, [])

    function filterEvents(eventsArr) {
        return eventsArr.filter(hol => {
            const holDate = hol.date
            return holDate.startsWith('2023')
        })
    }

    // Country Selection
    const [selectedCountry, setSelectedCountry] = useState('England and Wales')

    function tabClick(e) {
        let currentCountry = e.target.dataset.country
        setSelectedCountry(currentCountry)

        // this currently only works with Scotland
        currentCountry = currentCountry.toLowerCase()

        // console.log(filterEvents(bankHols[currentCountry].events))
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
