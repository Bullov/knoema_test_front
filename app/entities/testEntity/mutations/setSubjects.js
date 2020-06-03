import Update from 'immutability-helper';

export default function SetSubjects(state, data) {
    return Update(state, {
        subjectList: {$set: data},
    });
}
