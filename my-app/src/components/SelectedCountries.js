import React, { Component } from 'react';
import { v1 as uuid } from 'uuid';
class SelectedCountries extends Component {

    deleteCheck = (event) => {
        event.stopPropagation();
        this.props.dispatch({ type: "DELETE_ITEM", clickedCity: event.target.value });
    }
    render() {
        let noValueSelect = true;
        return (
            <div>
                {this.props.countries.map(countries => {
                    if (countries.checked.length > 0) {
                        noValueSelect = false
                        return (<div key={uuid()} className="country-list">
                            <h4>{countries.heading}</h4>
                            <ul>
                                {countries.checked.map(city => {
                                    return (<li key={uuid()}>{city}<button onClick={this.deleteCheck} className="close" value={city}>&times;</button></li>
                                    )
                                })}
                            </ul>
                        </div>
                        )
                    }
                })}
                {noValueSelect && <div className="no-value-text" id="no-value-text">No Values Selected</div>}
            </div>
        );
    }
}

export default SelectedCountries;