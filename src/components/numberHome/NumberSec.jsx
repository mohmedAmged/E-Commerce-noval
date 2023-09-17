import { numbers } from '../shopData/dataShop'
import './numberSec.css'
import CountToNumber from '../startCountOnSec/CountToNumber'


export default function NumberSec() {
    return (
        <div className="padbottom">
            <div className='container'>
                <div className="numberItem">
                    <div className="row justify-content-center">
                        {
                            numbers.map((number) => (
                                <div className="col-lg-3 col-md-6 col-sm-12" key={number.id}>
                                    <div className="numberBox">
                                        <div className="numTit">
                                            <span>
                                                <CountToNumber targetNumber={number.titNum}/>
                                            </span>
                                        </div>
                                        <div className="numText">
                                            <h3>{number.textNum}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
