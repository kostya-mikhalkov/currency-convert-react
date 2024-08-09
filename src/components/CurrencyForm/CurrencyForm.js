import Flag from 'react-flagkit';
import logo from '../../svg/group.svg';

const CurrencyForm = () => {
    return (
        <div className='currency_form'>
            <h6 className='currency_form__title'>Amount</h6>
            <div className="amount">
                    <Flag country='US'
                          className='currency_form__flag'/>
                    <select className='favorite_currency' 
                            name="favorite currency">
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="RUB">RUB</option>
                    </select>
                <input type="text" 
                       className='favorite_input'/>
            </div>
            <div className='currency_form__line'>
                <div className='currency_form__img'>
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <h6 className='currency_form__converted-title'>Converted Amount</h6>
            <div className="amount">
                    <Flag country='US'
                          className='currency_form__flag'/>
                    <select className='favorite_currency' 
                            name="favorite currency">
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="RUB">RUB</option>
                    </select>
                <input type="text" 
                       className='favorite_input'/>
            </div>
        </div>
    )
}
export default CurrencyForm;