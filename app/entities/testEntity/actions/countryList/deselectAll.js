import SetSelectedCountryCodes from './setSelectedCountryCodes';

export default function DeselectAllCountries() {
    return dispatch => {
        dispatch(SetSelectedCountryCodes([]));
    };
}