import '../styles/table.css'
import Row from './Row'
import { useState } from 'react'

const Table = () => {
    const [data, setData] = useState({
        id:1,
        name: 'Notebook',
        price: '123',
        amount: '1',
    })
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
                    <h4>Actions</h4>
                </div>
            </div>
            <Row data= {data} />
            <Row />
            <Row />
        </div>
    )
}

export default Table
