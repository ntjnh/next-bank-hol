export default function splitUpcoming(arr) {
    const holidaysByYear = []
    let currentYear = arr[0].date.getFullYear()
    let currentYearArr = []

    arr.forEach(hol => {
        let holYear = hol.date
        holYear = holYear.getFullYear()

        if (holYear === currentYear) {
            currentYearArr.push(hol)
        } else {
            holidaysByYear.push(currentYearArr)
            currentYearArr = []
            currentYearArr.push(hol)
            currentYear = holYear
        }
    })

    holidaysByYear.push(currentYearArr)
    return holidaysByYear
}
