import Fetch from 'Entity/testEntity/actions/fetch';
import CountryItemSelectionChanged from 'Entity/testEntity/actions/countryList/countryItemSelectionChanged';
import SubjectItemSelectionChanged from 'Entity/testEntity/actions/subjectList/subjectItemSelectionChanged';
import SelectAllCountries from 'Entity/testEntity/actions/countryList/selectAll';
import DeselectAllCountries from 'Entity/testEntity/actions/countryList/deselectAll';
import SelectAllSubjects from 'Entity/testEntity/actions/subjectList/selectAll';
import DeselectAllSubjects from 'Entity/testEntity/actions/subjectList/deselectAll';


export default function TestModuleDispatcher(dispatch) {
    return {
        testFetch: () => dispatch(Fetch()),
        countryItemSelectionChanged: value => dispatch(CountryItemSelectionChanged(value)),
        subjectItemSelectionChanged: value => dispatch(SubjectItemSelectionChanged(value)),
        selectAllCountries: () => dispatch(SelectAllCountries()),
        deselectAllCountries: () => dispatch(DeselectAllCountries()),
        selectAllSubjects: () => dispatch(SelectAllSubjects()),
        deselectAllSubjects: () => dispatch(DeselectAllSubjects()),
    };
}