import React from 'react';

const Results = ({totalPayment, totalInterest, totalMonthly}) => {
    return (
        <div id="pt5">
            <h5>Results</h5>
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Monthly Payment
                        </span>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        value={totalMonthly}
                        disabled />
                </div>
            </div>
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Total Payment</span>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        value={totalPayment}
                        disabled />
                </div>
            </div>
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Total Interest</span>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        value={totalInterest}
                        disabled />
                </div>
            </div>
        </div>
    );
};

export default Results;
// import React, { Component } from 'react';

// class Results extends Component {
//     render() {
//         return (
//             <div id="pt5">
//                 <h5>Results</h5>
//                 <div className="form-group">
//                     <div className="input-group">
//                         <div className="input-group-prepend">
//                             <span className="input-group-text">Monthly Payment
//                             </span>
//                         </div>
//                         <input
//                             type="number"
//                             className="form-control"
//                             disabled />
//                     </div>
//                 </div>
//                 <div className="form-group">
//                     <div className="input-group">
//                         <div className="input-group-prepend">
//                             <span className="input-group-text">Total Payment</span>
//                         </div>
//                         <input
//                             type="number"
//                             className="form-control"
//                             disabled />
//                     </div>
//                 </div>
//                 <div className="form-group">
//                     <div className="input-group">
//                         <div className="input-group-prepend">
//                             <span className="input-group-text">Total Interest</span>
//                         </div>
//                         <input
//                             type="number"
//                             className="form-control"
//                             disabled />
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Results;