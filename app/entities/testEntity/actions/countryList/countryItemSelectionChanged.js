import SetSelectedCountryCodes from './setSelectedCountryCodes';

export default function CountryItemSelectionChanged(countryCode) {
    return async (dispatch, getState) => {
        const {
            TestEntity: {
                selectedCountryCodes
            }
        } = getState();
        
        if (selectedCountryCodes.includes(countryCode)) {
            const newSelectedCodes = selectedCountryCodes.filter(item => item !== countryCode)
            dispatch(SetSelectedCountryCodes(newSelectedCodes));
        } else {
            const newSelectedCodes = [...selectedCountryCodes];
            newSelectedCodes.push(countryCode);
            dispatch(SetSelectedCountryCodes(newSelectedCodes))
        }        
    };
}
