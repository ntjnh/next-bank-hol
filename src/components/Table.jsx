import dayToString from '../functions/dayToString'
import monthToString from '../functions/monthToString'

export default function Table({ holidays, year }) {
    return (
        <table className="table">
            <caption className="table__caption">{year}</caption>

            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Day of the week</th>
                    <th scope="col">Bank holiday</th>
                </tr>
            </thead>

            <tbody>
                {holidays.map((holiday, i) => (
                    <tr key={i}>
                        <th scope="row" className="table__header">
                            {`${holiday.date.getDate()} ${monthToString(holiday.date)}`}
                        </th>
                        <td className="table__cell">
                            {dayToString(holiday.date)}
                        </td>
                        <td className="table__cell">
                            {holiday.title} {holiday.notes ? `(${holiday.notes.toLowerCase()})` : ''}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
