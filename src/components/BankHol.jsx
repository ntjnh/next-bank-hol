export default function BankHol(props) {
    return (
        <div>
            <h2>The next bank holiday in {props.country} is</h2>
            <h3>{props.bankHolDate}</h3>
            <h4>{props.bankHolName}</h4>
        </div>
    )
}
