import '../styles/table.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
const HistoryRow = ({data}) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch("http:///localhost:5000/history")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
      console.log(items)
    return (
        items.map(item => {
            let total = item.price * item.quantity;
            return(
              <div className="row" key={item._id}>
                <div className="number">
                    <h4>1</h4>
                </div>
                <div className="name">
                    <h4>{item.name}</h4>
                </div>
                <div className="price">
                    <h4>{item.price}</h4>
                </div>
                <div className="amount">
                    <h4>{item.quantity}</h4>
                </div>
                <div className="total">
                    <h4>{total}</h4>
                </div>
                <div className="actions">
                    <h4>
                        {item.date}
                    </h4>
                </div>
        </div>   
            )
            
        }
        )
       
    )
}

export default HistoryRow
