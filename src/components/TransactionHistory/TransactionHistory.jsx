import clsx from "clsx";
import css from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.container}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => {
                    return <tr key={item.id}>
                        <td className={css.straightLine}>{item.type[0].toUpperCase()+item.type.slice(1)}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
};

export default TransactionHistory

