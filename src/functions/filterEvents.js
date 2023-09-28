// Function to filter out past bank holidays
const filterEvents = eventsArr => {
    const filtered = eventsArr.map(hol => {
        hol.date = new Date(hol.date)
        return hol
    }).filter(hol => {
        const holDate = hol.date
        const holDay = holDate.getDate()
        const holMonth = holDate.getMonth() + 1
        const holYear = holDate.getFullYear()

        const today = new Date()
        const day = today.getDate()
        const month = today.getMonth() + 1
        const year = today.getFullYear()

        // If next year onwards OR if current year and next month onwards
        if ((holYear > year) || (holYear === year && holMonth > month)) {
            return hol
        // If current year and current month and tomorrow onwards
        } else if (holYear === year && holMonth === month && holDay > day) {
            return hol
        }
    })

    return filtered
}

export default filterEvents
