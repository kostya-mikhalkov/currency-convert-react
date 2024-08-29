import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../app/App';
import { useHttp } from '../../utils/api';
import Flag from 'react-flagkit';
import logo from '../../svg/group.svg';

const CurrencyForm = () => {
    const [currency, setCurrency] = useState('USD');
    const [converted, setConverted] = useState('USD')
    const [flags, setFlags] = useState('US');
    const [banner, setBanner] = useState('US')
    const [answer, setAnswer] = useState(null);
    const [amount, setAmount] = useState(0);
    const [quantity, setQuantity] = useState(0)
    const {request} = useHttp();
    useEffect(() => {
        setFlags(currency.slice(0, 2))
        request(currency)
                .then(data => setAnswer(data))
                .catch(err => console.log(err))
    }, [currency])
    useEffect(() => {
        setBanner(converted.slice(0, 2))
    }, [converted])
    useEffect(() => {
        const currencyCountry = answer?.conversion_rates ? answer.conversion_rates[converted] : null;
        const num = amount * currencyCountry;
        setQuantity(num.toFixed(2))
    }, [amount, converted, answer, currency])
    const context = useContext(MyContext);
    const keysWithContext = context?.conversion_rates ? Object.keys(context.conversion_rates) : [];
    
    return (
        <div className='currency_form'>
            <h6 className='currency_form__title'>Amount</h6>
            <div className="amount">
                    <Flag country={flags}
                          className='currency_form__flag'/>
                    <select className='favorite_currency' 
                            name="favorite currency"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}>
                            {keysWithContext.map((item, ind) => {
                                return (
                                    <option value={item}
                                            key={ind}>
                                                {item}
                                    </option>
                                )
                            })}
                    </select>
                <input type="text" 
                       className='favorite_input'
                       value={amount}
                       onChange={((e) => setAmount(e.target.value))}/>
            </div>
            <div className='currency_form__line'>
                <div className='currency_form__img'
                     onClick={(e) => {
                        const one = currency;
                        const two = converted;
                        setCurrency(two);
                        setConverted(one);
                     }}>
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <h6 className='currency_form__converted-title'>Converted Amount {answer?.conversion_rates ? answer.conversion_rates[converted].toFixed(2) : null}</h6>
            <div className="amount">
                    <Flag country={banner}
                          className='currency_form__flag'/>
                    <select className='favorite_currency' 
                            name="favorite currency"
                            value={converted}
                            onChange={e => setConverted(e.target.value)}>
                            {keysWithContext.map((item, ind) => {
                                return (
                                    <option value={item}
                                            key={ind}>
                                                {item}
                                    </option>
                                )
                            })}
                    </select>
                <input type="text" 
                       className='favorite_input'
                       value={quantity}
                       readOnly/>
            </div>
        </div>
    )
}
export default CurrencyForm;