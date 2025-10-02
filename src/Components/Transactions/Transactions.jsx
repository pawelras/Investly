import TransactionsGrid from "./TransactionsGrid";
export default function Transactions() {
    return (
        <div className='bg-light mb-10 px-5 lg:px-50'>
            <h2 className="text-4xl font-bold mb-4 text-gray-600">Transactions</h2>
            <TransactionsGrid />
        </div>
    );
}
