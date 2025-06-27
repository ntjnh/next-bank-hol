import dayToString from '../functions/dayToString'
import monthToString from '../functions/monthToString'

export default function Table({ holidays, year }) {
    return (
        <table className="table">
            <caption className="table__caption">
                {year}
            </caption>

            <thead className="table__head">
                <tr className="table__row">
                    <th scope="col" className="table__header">
                        Date
                    </th>
                    <th scope="col" className="table__header">
                        Day of the week
                    </th>
                    <th scope="col" className="table__header">
                        Bank holiday
                    </th>
                </tr>
            </thead>

            <tbody className="table__body">
                {holidays.map((holiday, i) => (
                    <tr className="table__row" key={i}>
                        <th scope="row" className="table__header">
                            {`${holiday.date.getDate()} ${monthToString(holiday.date)}`}
                        </th>
                        <td className="table__cell">
                            {dayToString(holiday.date)}
                        </td>
                        <td className="table__cell">
                            {holiday.title}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
