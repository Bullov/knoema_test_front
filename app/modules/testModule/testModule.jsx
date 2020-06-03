import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Divider, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CountryList from 'Entity/testEntity/components/countryList/countryList.jsx';
import SubjectList from 'Entity/testEntity/components/subjectList/subjectList.jsx';
import ContentTable from 'Entity/testEntity/components/contentTable/contentTable.jsx';
import TestEntity from 'Entity/testEntity/testEntity.jsx';

import connector from './connector';
import dispatcher from './dispatcher';

const useStyles = makeStyles({
    getDataButtonStyle: {
        width: 360
    },
});


const TestModule = ({
    items = [],
    countryList = [],
    subjectList = [],
    selectedCountryCodes = [],
    selectedSubjectCodes = [],
    isLoading,
    
    countryItemSelectionChanged,
    subjectItemSelectionChanged,
    selectAllCountries,
    deselectAllCountries,
    selectAllSubjects,
    deselectAllSubjects,
    testFetch
}) => {
    const classes = useStyles();

    return (
        <>
            <TestEntity/>
            <Grid 
                container
                direction="row"
                spacing={3} >

                <Grid item>
                    <Grid  
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="baseline"
                        spacing={3} >

                        <Grid item>
                            <CountryList 
                                countries={countryList}
                                selectedCountryCodes={selectedCountryCodes}
                                countryItemSelectionChanged={countryItemSelectionChanged}
                                selectAllCountries={selectAllCountries}
                                deselectAllCountries={deselectAllCountries}
                                />
                        </Grid>

                        <Divider/>

                        <Grid item>
                            <SubjectList 
                                subjects={subjectList}
                                selectedSubjectCodes={selectedSubjectCodes}
                                subjectItemSelectionChanged={subjectItemSelectionChanged}
                                selectAllSubjects={selectAllSubjects}
                                deselectAllSubjects={deselectAllSubjects}
                                />
                        </Grid>

                        <Grid item>
                            <Button 
                                variant="outlined" 
                                color="primary" 
                                className={classes.getDataButtonStyle}
                                disabled={!(selectedSubjectCodes.length && selectedCountryCodes.length)}
                                onClick={testFetch}>
                                    GetData
                            </Button>                         
                        </Grid>
                    </Grid>
                </Grid>  

                <Grid item>
                    <ContentTable 
                        items={items}
                        isLoading={isLoading} />
                </Grid>            
            </Grid>
        </>
    );
};

export default withRouter(connect(connector, dispatcher)(TestModule));