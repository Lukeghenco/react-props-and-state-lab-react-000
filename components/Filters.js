const React = require('react');

class Filters extends React.Component {
    constructor() {
        super();

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(event) {
        this.props.onChangeType(event.target.value)
    }

    render() {
        return (
            <div className="ui form">
                <h3>Animal type</h3>
                <div className="field">
                    <select
                        name="type"
                        id="type"
                        onChange={this.handleSelect}
                        value={this.props.filters.type}
                    >
                        <option value="all">All</option>
                        <option value="cat">Cats</option>
                        <option value="dog">Dogs</option>
                        <option value="micropig">Micropigs</option>
                    </select>
                </div>

                <div className="field">
                    <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
                </div>
            </div>
        );
    }
}

Filters.propTypes = {
    filters: React.PropTypes.shape({
        type: React.PropTypes.string.isRequired,
    })
}

module.exports = Filters;
