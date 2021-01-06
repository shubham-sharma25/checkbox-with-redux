import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v1 as uuid } from 'uuid';
import SelectedCountries from './SelectedCountries';
class Countries extends Component {
    handleInputChange = (event) => {
        this.props.dispatch({ type: "CHECK_ITEM", clickedCity: event.target.value, checked: !event.target.checked });
    }
    render() {
        return (
            <div className="row main" id="main">
                <div className="col-xs-6">
                    {this.props.countries.map(country => {
                        return (<div key={uuid()} className="country-list">
                            <h4>{country.heading}</h4>
                            {country.cities.map(city => {
                                return (<div key={uuid()} className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="exampleCheck1"
                                        value={city}
                                        checked={country.checked.indexOf(city) !== -1}
                                        onChange={this.handleInputChange}
                                    />&nbsp;&nbsp;&nbsp;
                                    <label className="form-check-label"><h5>{city}</h5></label>
                                </div>)
                            })}
                        </div>)
                    })}
                </div>
                <div className="center" />
                <div className="col-xs-6">
                    <SelectedCountries {...this.props} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    countries: state.countries
})
export default connect(mapStateToProps)(Countries);