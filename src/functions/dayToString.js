// Convert zero-based version of day to text string
export default function dayToString(date) {
    return [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ][date.getDay()]
}
