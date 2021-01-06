import { initialState } from "./state";

function reducer(state = initialState, action) {
    let clickedCity = action.clickedCity;
    let newCountries = [];
    switch (action.type) {
        case "CHECK_ITEM":
            clickedCity = action.clickedCity;
            let isChecked = action.checked;
            newCountries = [];
            state.countries.map((country, index) => {
                if (country.cities.indexOf(clickedCity) !== -1) {
                    let newCountry = country;
                    let checkIndex = country.checked.indexOf(clickedCity);
                    if (isChecked) {
                        newCountry.checked.splice(checkIndex, 1);
                    } else {
                        newCountry.checked.push(clickedCity)
                    }
                    newCountries.push(country)
                } else {
                    newCountries.push(country)
                }
            });
            return {
                ...state,
                countries: newCountries,
            };
        case "DELETE_ITEM":
            clickedCity = action.clickedCity;
            newCountries = [];
            state.countries.map((country) => {
                if (country.cities.indexOf(clickedCity) !== -1) {
                    let newCountry = country;
                    let checkIndex = country.checked.indexOf(clickedCity);
                    newCountry.checked.splice(checkIndex, 1);
                    newCountries.push(country)
                } else {
                    newCountries.push(country)
                }
            });
            return {
                ...state,
                countries: newCountries,
            };
        default:
            return state;
    }
}

export default reducer;