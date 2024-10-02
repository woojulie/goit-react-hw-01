import './TransactionHistory.css'

const TransactionHistory = ({ items }) => {
  return (
    <table className='transTable'>
  <thead className='transThead'>
    <tr className='transTr'>
      <th className='transTh'>Type</th>
      <th className='transTh'>Amount</th>
      <th className='transTh'>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(item =>{
        return (
    <tr className='transTr' key={item.id}>
      <td className='transTd'>{item.type}</td>
      <td className='transTd'>{item.amount}</td>
      <td className='transTd'>{item.currency}</td>
    </tr>
        );
    })}
  </tbody>
</table>
  )
}
export default TransactionHistory