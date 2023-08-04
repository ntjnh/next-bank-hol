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
            // let holDate = hol.date
            // holDate = holDate.split('-').map(d => parseInt(d))


            hol.date = new Date(hol.date)


            return hol
        }).filter(hol => {
            const holDate = hol.date
            const holDay = holDate.getDate()
            const holMonth = holDate.getMonth() + 1
            const holYear = holDate.getFullYear()

            // console.log(`${holYear} ${holMonth} ${holDay}`)

            const today = new Date()
            const day = today.getDate()
            const month = today.getMonth() + 1
            const year = today.getFullYear()

            return (holYear > year) || ((holYear === year) && (holMonth >= month) && (holDay >= day))
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
        let clickedCountry = e.target.dataset.country
        const currentCountry = clickedCountry.toLowerCase().replace(/\s/g, '-')

        const allDates = bankHols[currentCountry].events
        const nextBankHol = filterEvents(allDates)
        console.log(nextBankHol[0].date)

        setSelectedCountry({
            full: clickedCountry,
            name: nextBankHol.title,
            date: nextBankHol.date
        })

        

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
