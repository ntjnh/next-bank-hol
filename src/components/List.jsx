import Table from './Table'

export default function List({ country, dates }) {
    return (
        <div className="max-w-screen-sm mx-auto px-5 md:px-0 py-7">
            <h2 className="font-bold mb-5 text-xl">
                Upcoming bank holidays in {country}
            </h2>

            {dates.map((date, i) => {
                let year = date[0].date
                return <Table key={i} holidays={date} year={year.getFullYear()} />
            })}
        </div>
    )
}
