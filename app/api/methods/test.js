import axios from 'axios';
import Format from '../format';

class TestApi {
    @Format
    GetData(params) {
        return axios.post('/api/getData', params);
    }

    @Format
    GetCountryList() {
        return axios.get('/api/getCountries');
    }

    @Format
    GetSubjectsList() {
        return axios.get('/api/getSubjects');
    }
}

export default new TestApi();