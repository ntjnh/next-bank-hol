export default function groupByYear(dates) {
    // Create an array of all the years e.g. [2021, 2022, 2023]
    const yearOnly = dates.map(d => d.date.getFullYear())
    const years = [yearOnly[0]]

    for (let i = 0; i < yearOnly.length; i++) {
        if (yearOnly[i] != years[years.length - 1]) {
            years.push(yearOnly[i])
        }
    }

    // Create nested array of dates for each of the above years
    const grouped = []

    for (let x = 0; x < years.length; x++) {
        grouped.push(dates.filter(d => d.date.getFullYear() === years[x]))
    }

    return grouped
}
