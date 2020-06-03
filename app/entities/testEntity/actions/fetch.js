import TestApi from 'Api/test';
import SetIsLoading from './setIsLoading';

export default function Fetch() {
    return async (dispatch, getState) => {

        const {
            TestEntity: {
                selectedCountryCodes,
                selectedSubjectCodes,
            }
        } = getState();

        dispatch(SetIsLoading(true));

        const {data} = await TestApi.GetData({
            countryCodes: selectedCountryCodes, 
            subjectCodes: selectedSubjectCodes
        });

        dispatch({
            type: 'TEST_ENTITY_FETCH',
            payload: data
        });

        dispatch(SetIsLoading(false));
    };
}
