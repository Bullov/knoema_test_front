import {useEffect} from 'react';
import {connect} from 'react-redux';

import FetchCountries from './actions/fetchCountries';
import FetchSubjects from './actions/fetchSubjects';

export function Countries({
    fetchCountries,
    fetchSubjects,
}) {

    useEffect(() => {
        fetchCountries();
        fetchSubjects();
    }, []);

    return null;
}

export default connect(null, dispatch => ({
    fetchCountries: () => dispatch(FetchCountries()),
    fetchSubjects: () => dispatch(FetchSubjects())
}))(Countries);
