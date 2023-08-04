// Convert zero-based version of month to text string
const monthToString = date => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return months[date.getMonth()]
}

export default monthToString
