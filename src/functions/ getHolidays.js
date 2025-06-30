import filterEvents from './filterEvents'
import groupByYear from './groupByYear'
import monthToString from './monthToString'

export default function getHolidays(bankHolidays, country, setSelectedCountry) {
    const currentCountry = country.toLowerCase().replace(/\s/g, '-')
    const allDates = bankHolidays[currentCountry].events
    const upcomingDates = groupByYear(filterEvents(allDates, 'upcoming'))
    const nextBankHol = filterEvents(allDates, 'next')
    const nextBankHolDate = nextBankHol.date

    setSelectedCountry({
        full: country,
        name: nextBankHol.title,
        date: `${nextBankHolDate.getDate()} ${monthToString(nextBankHolDate)}`,
        upcoming: upcomingDates,
        activeDefault: false
    })
}
