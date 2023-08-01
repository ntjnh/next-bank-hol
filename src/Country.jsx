function Country(props) {
    const countries = ['England and Wales', 'Scotland', 'Northern Ireland']

    const tabs = countries.map(c => (
        <li>{c}</li>
    ))

    return (
        <article>
            <ul>
                {tabs}
            </ul>

            <div>
                <h2>The next bank holiday in [active] is</h2>
                <h3>{props.bankHolDate}</h3>
                <h4>{props.bankHolName}</h4>
            </div>
        </article>
    )
}

export default Country
