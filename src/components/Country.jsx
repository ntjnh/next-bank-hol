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

    function filterEvents(eventsArr) {
        const filtered = eventsArr.map(hol => {
            console.log(hol['date'])
            hol['date'] = hol['date'].split('-').map(d => parseInt(d))

            return hol
        }).filter(hol => {
            const holDate = hol['date']

            const today = new Date()
            const day = today.getDate() + 1
            const month = today.getMonth() + 1
            const year = today.getFullYear()

            return (holDate[0] > year) || ((holDate[0] === year) && (holDate[1] >= month) && (holDate[2] >= day))
        })
        
        return filtered
    }

    // Country Selection
    const [selectedCountry, setSelectedCountry] = useState({
        name: 'England and Wales',
        title: 'Bank Hol',
        date: '7 June'
    })

    function tabClick(e) {
        let currentCountry = e.target.dataset.country
        currentCountry = currentCountry.toLowerCase().replace(/\s/g, '-')

        const events = bankHols[currentCountry]['events']

        // setSelectedCountry({
        //     full: currentCountry,
        //     name: filterEvents(events)[0].title,
        //     date: filterEvents(events)[0].date
        // })

        

        // console.log(currentCountry)
        // console.log(filterEvents(bankHols[currentCountry]['events'])[0].title)
    }

    return (
        <article>
            <ul>
                <li data-country={engWal} onClick={tabClick}>{engWal}</li>
                <li data-country={scot} onClick={tabClick}>{scot}</li>
                <li data-country={nire} onClick={tabClick}>{nire}</li>
            </ul>

            <BankHol country={selectedCountry.full} bankHolDate={selectedCountry.date} bankHolName={selectedCountry.name} />
        </article>
    )
}

export default Country
