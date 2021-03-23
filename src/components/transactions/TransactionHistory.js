import Transaction from "../transactions/Transaction"

const TransactionHistory = ({items}) =>  {
return (
    <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(({type, amount, currency, id}) => (
          
        <Transaction type = {type} amount = {amount} currency = {currency} key = {id}/>
        
        ))}
  </tbody>
</table>)
} 
export default TransactionHistory;