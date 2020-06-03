import Update from 'immutability-helper';

export default function SetSelectedSubjectCodes(state, data) {
    return Update(state, {
        selectedSubjectCodes: {$set: data},
    });
}
