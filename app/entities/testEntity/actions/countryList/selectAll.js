import SetSelectedCountryCodes from './setSelectedCountryCodes';

export default function SelectAllCountries() {
    return (dispatch, getState) => {
        const {
            TestEntity: {
                countryList
            }
        } = getState();

        dispatch(SetSelectedCountryCodes(countryList.map(item => item.code)));
    };
}