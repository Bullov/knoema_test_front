import SetSelectedSubjectCodes from './setSelectedSubjectCodes';

export default function DeselectAllSubject() {
    return dispatch => {
        dispatch(SetSelectedSubjectCodes([]));
    };
}