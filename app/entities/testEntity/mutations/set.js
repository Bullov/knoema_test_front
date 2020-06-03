import Update from 'immutability-helper';

export default function Set(state, data) {
    return Update(state, {
        items: {$set: data},
    });
}
