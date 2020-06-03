import DefaultState from './testEntity.defaultState';

import Set from './mutations/set';
import SetCountries from './mutations/setCountries';
import SetSubjects from './mutations/setSubjects';
import SetIsLoading from './mutations/setIsLoading';
import SetSelectedCountryCodes from './mutations/countryList/setSelectedCountryCodes';
import SetSelectedSubjectCodes from './mutations/subjectList/setSelectedSubjectCodes';


export default function (state=DefaultState, {type, payload}) {
    switch (type) {
        case 'TEST_ENTITY_FETCH':
            return Set(state, payload);

        case 'TEST_ENTITY_SET_COUNTRIES':
            return SetCountries(state, payload);

        case 'TEST_ENTITY_SET_SUBJECTS':
            return SetSubjects(state, payload);

        case 'TEST_ENTITY_SET_SELECTED_COUNTRY_CODES':
            return SetSelectedCountryCodes(state, payload);

        case 'TEST_ENTITY_SET_SELECTED_SUBJECT_CODES':
            return SetSelectedSubjectCodes(state, payload);

        case 'TEST_ENTITY_SET_IS_LOADING':
            return SetIsLoading(state, payload);

        default:
            return state;
    }
}