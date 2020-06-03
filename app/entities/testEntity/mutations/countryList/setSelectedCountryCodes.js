import Update from 'immutability-helper';

export default function SetSelectedCountryCodes(state, data) {
    return Update(state, {
        selectedCountryCodes: {$set: data},
    });
}
