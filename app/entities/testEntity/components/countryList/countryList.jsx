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

const CountryList = ({
    countries = [],
    selectedCountryCodes = [],
    countryItemSelectionChanged,
    selectAllCountries,
    deselectAllCountries
}) => {
    const classes = useStyles();
    return (
        <Paper className={classes.container}>
            <ListSubheader className={classes.header}>
                <Typography variant="h6">Countries</Typography>

                <Grid container direction="row" justify="space-around">
                    <Button
                        variant="outlined" 
                        color="primary"
                        onClick={selectAllCountries}>
                            Select All
                    </Button>
                    
                    <Button 
                        variant="outlined" 
                        color="secondary"
                        onClick={deselectAllCountries}
                        disabled={!selectedCountryCodes.length} >
                            Deselect All
                    </Button>
                </Grid>
                <Divider className={classes.divider}/>      
            </ListSubheader>
            
            {
                countries.length 
                ? (
                    <List >
                        {countries.map(({code, countryName, iso}, index) => (
                            <ListItem key={index} dense button onClick={() => countryItemSelectionChanged(code)}>
                                <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={selectedCountryCodes.includes(code)}
                                    tabIndex={-1}
                                    disableRipple
                                />
                                </ListItemIcon>
                                <ListItemText primary={countryName} secondary={iso}/>
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

export default CountryList;