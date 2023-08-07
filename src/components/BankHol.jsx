export default function BankHol(props) {
    return (
        <div className='bg-zinc-900 border border-zinc-700/40 max-w-full p-4 text-center text-zinc-100'>
            <h2 className="mb-4 text-lg">The next bank holiday in {props.country} is</h2>
            <h3 className='font-semibold mb-4 text-3xl'>{props.bankHolDate}</h3>
            <h4 className="text-lg">{props.bankHolName}</h4>
        </div>
    )
}
