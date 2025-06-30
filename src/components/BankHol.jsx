export default function BankHol(props) {
    const countryLowerC = props['country'].toLowerCase().replace(/\s/g, '-')

    return (
        <div className="container px-5 md:px-0 mx-auto">
            <section 
                id={countryLowerC} 
                role="tabpanel"
                aria-labelledby={`tab-${countryLowerC}`}
                className="next-hol"
            >
                <h2>The next bank holiday in {props.country} is</h2>
                <h3>{props.bankHolDate}</h3>
                <h4>{props.bankHolName}</h4>
            </section>
        </div>
    )
}
