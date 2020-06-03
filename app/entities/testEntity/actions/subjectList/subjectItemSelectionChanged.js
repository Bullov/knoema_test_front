import SetSelectedSubjectCodes from './setSelectedSubjectCodes';

export default function SubjectItemSelectionChanged(subjectCode) {
    return async (dispatch, getState) => {
        const {
            TestEntity: {
                selectedSubjectCodes
            }
        } = getState();

        if (selectedSubjectCodes.includes(subjectCode)) {
            const newSelectedCodes = selectedSubjectCodes.filter(item => item !== subjectCode)
            dispatch(SetSelectedSubjectCodes(newSelectedCodes));
        } else {
            const newSelectedCodes = [...selectedSubjectCodes];
            newSelectedCodes.push(subjectCode);
            dispatch(SetSelectedSubjectCodes(newSelectedCodes))
        }
    };
}
