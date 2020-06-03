import Update from 'immutability-helper';

export default function SetCountries(state, data) {
    return Update(state, {
        countryList: {$set: data},
    });
}
