import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    TableContainer,
    Table,
    TableHead,
    TableBody, 
    TableRow, 
    TableCell, 
    Paper,
    Backdrop,
    CircularProgress
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container: {
        height: 765,
        width: 1485
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
    }
}));


const ContentTable = ({
    items = [],
    isLoading,
}) => {
    const classes = useStyles();

    return (
        <>
            <Backdrop open={isLoading} className={classes.backdrop}>
                <CircularProgress />
            </Backdrop>
            <TableContainer component={Paper} className={classes.container}r>
                <Table size="small" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Subject</TableCell>
                            <TableCell>Units</TableCell>
                            <TableCell>Scale</TableCell>
                            <TableCell>Country</TableCell>
                            <TableCell>1980</TableCell>
                            <TableCell>1981</TableCell>
                            <TableCell>1982</TableCell>
                            <TableCell>1983</TableCell>
                            <TableCell>1984</TableCell>
                            <TableCell>1985</TableCell>
                            <TableCell>1986</TableCell>
                            <TableCell>1987</TableCell>
                            <TableCell>1988</TableCell>
                            <TableCell>1989</TableCell>

                            <TableCell>1990</TableCell>
                            <TableCell>1991</TableCell>
                            <TableCell>1992</TableCell>
                            <TableCell>1993</TableCell>
                            <TableCell>1994</TableCell>
                            <TableCell>1995</TableCell>
                            <TableCell>1996</TableCell>
                            <TableCell>1997</TableCell>
                            <TableCell>1998</TableCell>
                            <TableCell>1999</TableCell>

                            <TableCell>2000</TableCell>
                            <TableCell>2001</TableCell>
                            <TableCell>2002</TableCell>
                            <TableCell>2003</TableCell>
                            <TableCell>2004</TableCell>
                            <TableCell>2005</TableCell>
                            <TableCell>2006</TableCell>
                            <TableCell>2007</TableCell>
                            <TableCell>2008</TableCell>
                            <TableCell>2009</TableCell>

                            <TableCell>2010</TableCell>
                            <TableCell>2011</TableCell>
                            <TableCell>2012</TableCell>
                            <TableCell>2013</TableCell>
                            <TableCell>2014</TableCell>
                            <TableCell>2015</TableCell>
                            <TableCell>2016</TableCell>
                            <TableCell>2017</TableCell>
                            <TableCell>2018</TableCell>
                            <TableCell>2019</TableCell>

                            <TableCell>2020</TableCell>
                            <TableCell>2021</TableCell>
                            <TableCell>2022</TableCell>
                            <TableCell>2023</TableCell>
                            <TableCell>2024</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            items.length
                                ? items.map(({
                                    code,
                                    description,
                                    scale,
                                    units,
                                    data
                                }) => (
                                    <>
                                        <TableRow key={code}>
                                            <TableCell rowSpan={data.length + 1}>{description}</TableCell>
                                            <TableCell rowSpan={data.length + 1}>{units}</TableCell>
                                            <TableCell rowSpan={data.length + 1}>{scale}</TableCell>
                                        </TableRow>
                                        {
                                            data.map(({
                                                countryName,
                                                _1980,
                                                _1981,
                                                _1982,
                                                _1983,
                                                _1984,
                                                _1985,
                                                _1986,
                                                _1987,
                                                _1988,
                                                _1989,

                                                _1990,
                                                _1991,
                                                _1992,
                                                _1993,
                                                _1994,
                                                _1995,
                                                _1996,
                                                _1997,
                                                _1998,
                                                _1999,

                                                _2000,
                                                _2001,
                                                _2002,
                                                _2003,
                                                _2004,
                                                _2005,
                                                _2006,
                                                _2007,
                                                _2008,
                                                _2009,

                                                _2010,
                                                _2011,
                                                _2012,
                                                _2013,
                                                _2014,
                                                _2015,
                                                _2016,
                                                _2017,
                                                _2018,
                                                _2019,

                                                _2020,
                                                _2021,
                                                _2022,
                                                _2023,
                                                _2024
                                            }, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>{countryName}</TableCell>
                                                    <TableCell>{_1980}</TableCell>
                                                    <TableCell>{_1981}</TableCell>
                                                    <TableCell>{_1982}</TableCell>
                                                    <TableCell>{_1983}</TableCell>
                                                    <TableCell>{_1984}</TableCell>
                                                    <TableCell>{_1985}</TableCell>
                                                    <TableCell>{_1986}</TableCell>
                                                    <TableCell>{_1987}</TableCell>
                                                    <TableCell>{_1988}</TableCell>
                                                    <TableCell>{_1989}</TableCell>

                                                    <TableCell>{_1990}</TableCell>
                                                    <TableCell>{_1991}</TableCell>
                                                    <TableCell>{_1992}</TableCell>
                                                    <TableCell>{_1993}</TableCell>
                                                    <TableCell>{_1994}</TableCell>
                                                    <TableCell>{_1995}</TableCell>
                                                    <TableCell>{_1996}</TableCell>
                                                    <TableCell>{_1997}</TableCell>
                                                    <TableCell>{_1998}</TableCell>
                                                    <TableCell>{_1999}</TableCell>

                                                    <TableCell>{_2000}</TableCell>
                                                    <TableCell>{_2001}</TableCell>
                                                    <TableCell>{_2002}</TableCell>
                                                    <TableCell>{_2003}</TableCell>
                                                    <TableCell>{_2004}</TableCell>
                                                    <TableCell>{_2005}</TableCell>
                                                    <TableCell>{_2006}</TableCell>
                                                    <TableCell>{_2007}</TableCell>
                                                    <TableCell>{_2008}</TableCell>
                                                    <TableCell>{_2009}</TableCell>

                                                    <TableCell>{_2010}</TableCell>
                                                    <TableCell>{_2011}</TableCell>
                                                    <TableCell>{_2012}</TableCell>
                                                    <TableCell>{_2013}</TableCell>
                                                    <TableCell>{_2014}</TableCell>
                                                    <TableCell>{_2015}</TableCell>
                                                    <TableCell>{_2016}</TableCell>
                                                    <TableCell>{_2017}</TableCell>
                                                    <TableCell>{_2018}</TableCell>
                                                    <TableCell>{_2019}</TableCell>

                                                    <TableCell>{_2020}</TableCell>
                                                    <TableCell>{_2021}</TableCell>
                                                    <TableCell>{_2022}</TableCell>
                                                    <TableCell>{_2023}</TableCell>
                                                    <TableCell>{_2024}</TableCell>
                                                </TableRow>
                                            ))
                                        }
                                        
                                    </>
                                ))
                                : (
                                    <TableRow key={"nodata"}>
                                        <TableCell 
                                            colSpan={20}
                                            align="center">
                                                No Data
                                        </TableCell>
                                    </TableRow>
                                )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default ContentTable;