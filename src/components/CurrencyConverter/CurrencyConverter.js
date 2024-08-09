
import CurrencyForm from '../CurrencyForm/CurrencyForm';

import './CurrencyConverter.scss';

const CurrencyConverter = () => {
    return (
        <div className="currency">
            <div className='currency_wrapper'>
                <div className="currency_header">
                    <h1 className="currency_title">Currency Converter</h1>
                    <p className="currency_descr">Check live rates, set rate alerts, receive notifications and more.</p>
                </div>
                <CurrencyForm />
                {/* <div className="rate">
                    <h5 className='rate_title'>Indicative Exchange Rate</h5>
                    <div className='rate_results'>
                        <span>1USD = 0.856GRN</span>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default CurrencyConverter;