import React from 'react';
import {
    Typography, 
    List, 
    ListItemText, 
    ListItemIcon, 
    ListItem,
    ListSubheader,
    Checkbox, 
    Paper,
    Button,
    Grid,
    Divider
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        width: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 340,
    },
    header: {
        background: '#fafafa'
    },
    divider: {
        margin: 10,
    }
}));

const SubjectList = ({
    subjects = [],
    selectedSubjectCodes = [],
    subjectItemSelectionChanged,
    selectAllSubjects,
    deselectAllSubjects
}) => {
    const classes = useStyles();

    return (
        <Paper className={classes.container}>
            <ListSubheader>
                <Typography variant="h6">Subjects</Typography>
                <Grid container direction="row" justify="space-around">
                    <Button
                        variant="outlined" 
                        color="primary"
                        onClick={selectAllSubjects}>
                            Select All
                    </Button>
                    
                    <Button 
                        variant="outlined" 
                        color="secondary"
                        onClick={deselectAllSubjects}
                        disabled={!selectedSubjectCodes.length} >
                            Deselect All
                    </Button>
                </Grid>
                <Divider className={classes.divider}/>      
            </ListSubheader>

            {
                subjects.length 
                    ? (
                        <List>
                            {subjects.map(({code, description, units, scale}, index) => (
                                <ListItem key={index} dense button onClick={() => subjectItemSelectionChanged(code)}>
                                    <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={selectedSubjectCodes.includes(code)}
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                    </ListItemIcon>
                                    <ListItemText primary={description} secondary={`units: ${units} scale: ${scale}`}/>
                                </ListItem>
                            ))}
                        </List>
                    )
                    : (
                        <>
                            <Skeleton width={340} height={50}/>
                            <Skeleton width={340} height={50}/>
                            <Skeleton width={340} height={50}/>
                            <Skeleton width={340} height={50}/>
                            <Skeleton width={340} height={50}/>
                            <Skeleton width={340} height={50}/>
                        </>
                    )
            }
            
        </Paper>
        
    );
}

export default SubjectList;