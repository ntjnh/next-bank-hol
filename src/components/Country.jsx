import { useState } from "react"
import BankHol from "./BankHol"

function Country() {
    const engWal = 'England and Wales', 
    scot = 'Scotland',
    nire = 'Northern Ireland'

    const [selectedCountry, setSelectedCountry] = useState('England and Wales')

    function tabClick(e) {
        setSelectedCountry(e.target.dataset.country)
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
