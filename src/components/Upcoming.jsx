import monthToString from '../functions/monthToString'
export default function Upcoming(props) {
    
    let upcoming = props.upcoming[0]
    console.log(`upcoming 1:`)
    console.log(upcoming)

    const year1 = upcoming.map((h, i) => {
        let date = h.date.getDate()
        let month = monthToString(h.date)

        return (
            <tr key={i}>
                <td>{`${date} ${month}`}</td>
                <td>Monday</td>
                <td>{h.title}</td>
            </tr>
        )
    })

    // const curYear = upcoming.map((hol, x) => {
    //     let holDate = hol.date

    //     return (
    //         <tr key={x}>
    //             <td>{hol`${holDate.getDate()} ${monthToString(holDate)}`}</td>
    //             <td>Monday</td>
    //             <td>{hol.title}</td>
    //         </tr>
    //     )
    // })  

    return (
        <section className="max-w-screen-sm mt-8 mx-auto">
            <h2 className="font-bold mb-6 text-xl">Upcoming bank holidays in {props.country}</h2>

            <div>
                {/* <h3>{upcoming[0].date.getFullYear}</h3> */}

                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left">Date</th>
                            <th className="text-left">Day of the week</th>
                            <th className="text-left">Bank holiday</th>
                        </tr>
                    </thead>

                    <tbody>
                        {year1}
                    </tbody>
                </table>
            </div>

        </section>
    )
}
