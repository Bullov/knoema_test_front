import SetSelectedSubjectCodes from './setSelectedSubjectCodes';

export default function SelectAllSubjects() {
    return (dispatch, getState) => {
        const {
            TestEntity: {
                subjectList
            }
        } = getState();

        dispatch(SetSelectedSubjectCodes(subjectList.map(item => item.code)));
    };
}