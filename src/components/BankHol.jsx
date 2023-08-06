export default function BankHol(props) {
    return (
        <div className='bg-zinc-900 border border-zinc-700/40 max-w-full px-2 py-4 text-center text-zinc-100'>
            <h2>The next bank holiday in {props.country} is</h2>
            <h3>{props.bankHolDate}</h3>
            <h4>{props.bankHolName}</h4>
        </div>
    )
}
