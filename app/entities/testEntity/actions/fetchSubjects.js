import TestApi from 'Api/test';
import SetSubjects from './setSubjects';

export default function FetchSubjects() {
    return async dispatch => {

        const {data} = await TestApi.GetSubjectsList();

        if (data) {
            data.forEach(item => item.isSelected = false);
            dispatch(SetSubjects(data));
        }
    };
}
