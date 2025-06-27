// Convert zero-based version of month to text string
export default function monthToString(date) {
    return [
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'November', 
        'December'
    ][date.getMonth()]
}
