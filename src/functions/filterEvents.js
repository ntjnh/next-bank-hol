export default function filterEvents(eventsArr, when) {
    let result
    const today = new Date()

    const holidays = eventsArr.map(hol => {
        hol.date = new Date(hol.date)
        return hol
    })

    const pastHolidays = holidays.filter(hol => hol.date <= today)
    const futureHolidays = holidays.filter(hol => hol.date >= today)

    switch(when) {
        case 'next':
            result = futureHolidays[0]
            break
        case 'upcoming':
            result = futureHolidays
            break
        case 'past':
            result = pastHolidays
            break
        default:
            result = holidays
            break
    }
    
    return result
}
