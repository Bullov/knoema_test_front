import Update from 'immutability-helper';

export default function SetCountries(state, data) {
    console.log('dadwdwadwad');
    return Update(state, {
        isLoading: {$set: data},
    });
}
