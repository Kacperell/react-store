import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
    render() {
        const details = this.props.details;
        // const {details} = this.props;// the same :o 
        const isAvaiable = details.status === 'available';
        const buttonText = isAvaiable ? 'Add to Orderd' : 'Sold Out!';

        return (
            <li className="menu-fish">
                {/* <img src={this.details.image} alt={this.details.name} /> */}

                <h3 className="fish-name">
                    {details.name}
                    <span className="price">  {formatPrice(details.price)}</span>
                </h3>
                <p>{details.desc}</p>
                <button onClick={() => this.props.addToOrder(this.props.index)} disabled={!isAvaiable}>{buttonText}</button>

            </li>
        )
    }
}

Fish.propTypes = {
    details: React.PropTypes.object.isRequired,
    index: React.PropTypes.string.isRequired,
    addToOrder: React.PropTypes.func.isRequired
};
export default Fish;