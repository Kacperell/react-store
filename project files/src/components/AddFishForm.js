import React from 'react';

class AddFishForm extends React.Component {


    createFish(event) {
        console.log(this);
        event.preventDefault();
        console.log('goonan make soem fish!🐟🐟');
        const fish = {
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            desc: this.desc.value,
            image: this.image.value,
        }
        this.props.addFish(fish);
        this.fishForm.reset();
    }


    render() {
        return (
            <form ref={(input) => { this.fishForm = input }} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
                <input ref={(input) => { this.name = input }} type="text" placeholder="Fish name" />
                <input ref={(input) => { this.price = input }} type="text" placeholder="Fish Price" />
                <select ref={(input) => { this.status = input }}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold!</option>
                </select>
                <textarea ref={(input) => { this.desc = input }} type="text" placeholder="Fish Desc" />
                <input ref={(input) => { this.image = input }} type="text" placeholder="Fish Image" />
                <button type="submit">+ Add item</button>

            </form>
        )
    }
}

AddFishForm.propTypes = {
    addFish: React.PropTypes.func.isRequired
}
export default AddFishForm;