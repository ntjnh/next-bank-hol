import Table from './Table'

export default function Upcoming({ country, dates }) {
    return (
        <div className="upcoming">
            <h2 className="upcoming__heading">
                Upcoming bank holidays in {country}
            </h2>

            {dates.map((date, i) => {
                let year = date[0].date
                return (
                    <Table key={i} holidays={date} year={year.getFullYear()} />
                )
            })}
        </div>
    )
}
