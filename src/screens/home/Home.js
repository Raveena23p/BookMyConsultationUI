import { Tabs, Tab, Select, InputLabel, FormControl, MenuItem, Card, CardContent, Button, TextField } from "@material-ui/core";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import React, { useState } from "react";
import "./Home.css"
import ReactModal from 'react-modal';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <>{children}</>}
        </div>
    );
}

const Home = () => {
    const [tabValue, setTabValue] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isViewDetail, setViewDetailOpen] = useState(false);
    const [isRateAppointment, setRateAppointmentOpen]= useState(false);
    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
            <Tabs value={tabValue} onChange={handleChange} >
                <Tab label="DOCTORS" style={{ maxWidth: '100%', width: '50%' }} />
                <Tab label="APPOINTMENT" style={{ maxWidth: '100%', width: '50%' }} />
            </Tabs>
            <CustomTabPanel value={tabValue} index={0} style={{ display: 'grid', placeItems: 'center', gap: 20 }}>
                <div className="Select">
                    <FormControl variant="filled" sx={{ m: 5, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-filled-label">Select Specialty:</InputLabel>
                        <Select className="specialty" style={{ width: 200 }}>
                            <MenuItem value="option1">Option 1</MenuItem>
                            <MenuItem value="option2">Option 2</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <Card style={{ width: 600 }}>
                    <CardContent>
                        Doctor Name: Ocean Garner<br></br>
                        Specialty: PULMONOLOGIST<br></br>
                        Rating:
                        <div style={{ display: 'flex', gap: 10 }}>
                            <div className='ButtonL'><Button variant="contained" color='primary' onClick={() => {
                                setIsOpen(true);
                            }}>BOOK APPOINTMENT</Button></div>
                            <div className='ButtonL'><Button variant="contained" color='inherit'  onClick={() => {
                                setViewDetailOpen(true);}}>VIEW DETAILS</Button></div>
                        </div>
                    </CardContent>
                </Card>
                <Card style={{ width: 600 }}>
                    <CardContent>
                        Doctor Name: Kennan Hess<br></br>
                        Specialty: GENERAL PHYSICIAN<br></br>
                        Rating:
                        <div style={{ display: 'flex', gap: 10 }}>
                            <div className='ButtonL'><Button variant="contained" color='primary'>BOOK APPOINTMENT</Button></div>
                            <div className='ButtonL'><Button variant="contained" color='primary'>VIEW DETAILS</Button></div>
                        </div>
                    </CardContent>
                </Card>
                <Card style={{ width: 600 }}>
                    <CardContent>
                        Doctor Name: Blossom Valentine<br></br>
                        Specialty: PULMONOLOGIST<br></br>
                        Rating:
                        <div style={{ display: 'flex', gap: 10 }}>

                            <div className='ButtonL'><Button variant="contained" color='primary'>BOOK APPOINTMENT</Button></div>
                            <div className='ButtonL'><Button variant="contained" color='primary'>VIEW DETAILS</Button></div>
                        </div>
                    </CardContent>
                </Card>
            </CustomTabPanel>
            <CustomTabPanel value={tabValue} index={1}>

                <Card>
                    <CardContent>
                        Dr.Hermoine Kelly<br></br>
                        Date: 2021-08-02<br></br>
                        symptoms:<br></br>
                        priorMedicalHistory
                        <div className='mt-10'><Button variant="contained" color='primary' onClick={() => {
                                setRateAppointmentOpen(true);}}>RATE APPOINTMENT</Button></div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        Dr. Alexis Rodiguez<br></br>
                        Date: 2021-08-02<br></br>
                        symptoms <br></br>
                        priorMedicalHistory
                        <div className='mt-10'><Button variant="contained" color='primary'>RATE APPOINTMENT</Button></div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        Dr. Alexis Rodriguez<br></br>
                        Date: 2021-08-01<br></br>
                        symptoms: Cold <br></br>
                        priorMedicalHistory: NA
                        <div className='mt-10'><Button variant="contained" color='primary'>RATE APPOINTMENT</Button></div>
                    </CardContent>
                </Card>
            </CustomTabPanel>


            <ReactModal
                isOpen={isOpen}
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        width: '50vw',
                        padding: '0px',
                        
                    },
                    overlay: {
                        zIndex:20

                    }
                }}>
                <Card >
                    <div style={{
                        backgroundColor: 'purple',
                        height: 100,
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: 20,
                        color: 'white',
                    }}>
                        Book an Appointment
                    </div>
                    <div className='TextField'><TextField id="standard-basic" label="Doctor Name*" variant="standard" /> </div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <div className="Select">
                    <FormControl variant="filled" sx={{ m: 5, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-filled-label">Time slot</InputLabel>
                        <Select className="specialty" style={{ width: 200 }}>
                            <MenuItem value="option1">Option 1</MenuItem>
                            <MenuItem value="option2">Option 2</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                   < div className='TextField'><TextField id="outlined-multiline-flexible" label="Medical History" multiline maxRows={4} /> </div>
                   < div className='TextField'><TextField id="outlined-multiline-flexible" label="Symptoms" multiline maxRows={4} /> </div>
                   <div className='mt-10'><Button variant="contained" color='primary'>BOOK APPOINTMENT</Button></div>
                </Card>
            </ReactModal>

        <ReactModal
        isOpen= {isViewDetail}
        style={{
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                width: '50vw',
                padding: '0px',
                zIndex:20

            },
            overlay: {
                zIndex:20
            }
        }}>
        <Card >
            <div style={{
                backgroundColor: 'purple',
                height: 100,
                display: 'flex',
                alignItems: 'center',
                paddingLeft: 20,
                color: 'white',
            }}>
                Doctor Details
            </div>
            Dr. Alex Rodriguez<br></br>
            Total Experience: 21 years<br></br>
            Specialty: CARDIOLOGIST<br></br>
            Date of Birth: 2020-11-07<br></br>
            City: Avignon<br></br>
            Email: nec@vestibulumnec.co.uk<br></br>
            Mobile: 16021123 4984<br></br>
            Rating:  
            </Card>
            </ReactModal>
            <ReactModal
            isOpen={isRateAppointment}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    width: '50vw',
                    padding: '0px',
                    zIndex:20

                },
                overlay: {
                    zIndex: 20
                }
            }}>
            <Card >
                <div style={{
                    backgroundColor: 'purple',
                    height: 100,
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: 20,
                    color: 'white',
                }}>
                    Rate Appointment
                    </div>
                    < div className='TextField'><TextField id="outlined-multiline-flexible" label="Comments" multiline maxRows={4} /> </div>
                    Rating: 
            </Card>
                    </ReactModal>
        </div>
                
    );

};

export default Home;