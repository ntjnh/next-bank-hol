export default function BankHol(props) {
    return (
        <div className='bg-sky-800 border border-zinc-700/40 max-w-full mx-4 p-5 text-center text-zinc-100'>
            <h2 className="font-medium mb-4 text-lg">The next bank holiday in {props.country} is</h2>
            <h3 className='font-semibold mb-4 text-3xl'>{props.bankHolDate}</h3>
            <h4 className="font-medium text-lg">{props.bankHolName}</h4>
        </div>
    )
}
