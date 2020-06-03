import TestApi from 'Api/test';
import SetCountries from './setCountries';

export default function FetchCountries() {
    return async dispatch => {

        const {data} = await TestApi.GetCountryList();

        if (data) {
            data.forEach(item => item.isSelected = false);
            dispatch(SetCountries(data));
        }
    };
}
