import '../styles/table.css'
import HistoryRow from './HistoryRow.js'

const HistoryTable = () => {
    return (
        <div className='table'>
            <div className="row">
                <div className="number">
                    <h4>Sr no</h4>
                </div>
                <div className="name">
                    <h4>Name</h4>
                </div>
                <div className="price">
                    <h4>Price</h4>
                </div>
                <div className="amount">
                    <h4>Quantity</h4>
                </div>
                <div className="total">
                    <h4>Total</h4>
                </div>
                <div className="actions">
                    <h4>Date</h4>
                </div>
            </div>
            <HistoryRow />
        </div>
    )
}

export default HistoryTable
