import React, { useState } from 'react';
import './App.css';
import useInput from './hooks/useInput';

function App() {
    // const [item, setItem] = useState('');
    // const [amount, setAmount] = useState('');
    // const [balance, setBalance] = useState('');
    const item = useInput('');
    const amount = useInput('');
    const balance = useInput('');
    const [list, setList] = useState([]);


    // function handleItemChange(e) {
    //     setItem(e.target.value);
    // }

    // function handleAmountChange(e) {
    //     setAmount(e.target.value);
    // }

    // function handleBalanceChange(e) {
    //     setBalance(e.target.value);
    // }

    function submit(e) {
        e.preventDefault();
        if (item.value && amount.value && balance.value) {
            setList([...list, {
                item: item.value,
                amount: amount.value,
                balance: balance.value
            }]);
            item.reset();
            amount.reset();
            balance.reset();
            // setItem('');
            // setAmount('');
            // setBalance('');
        }
    }

    return (
        <div className="app-container">
            <h1>가계부</h1>
            <form onSubmit={submit}>
                <label htmlFor="item">
                    항목
                    <input type="text" id="item" value={item.value} onChange={item.onChange} />
                </label>
                <label htmlFor="amount">
                    지출 금액
                    <input type="number" id="amount" value={amount.value} onChange={amount.onChange} />
                </label>
                <label htmlFor="balance">
                    잔액
                    <input type="number" id="balance" value={balance.value} onChange={balance.onChange} />
                </label>
                <button type="submit">추가</button>
            </form>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>항목</th>
                            <th>지출 금액</th>
                            <th>잔액</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item, index) => (
                            <tr key={index}>
                                <td>{item.item}</td>
                                <td>{item.amount}</td>
                                <td>{item.balance}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default App;