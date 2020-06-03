export default function TestModuleConnector(store) {
    const {
        TestEntity: {
            items,
            countryList,
            subjectList,
            selectedCountryCodes,
            selectedSubjectCodes,
            isLoading,
        }
    } = store;

    return {
        items,
        countryList,
        subjectList,
        selectedCountryCodes,
        selectedSubjectCodes,
        isLoading
    };
}