import React, { Fragment, useState } from 'react';
import './Header.css';
import { Button, Card, CardContent, Tab, Tabs, TextField, Box } from '@material-ui/core';
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
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [tabValue, setTabValue] = useState(0);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Fragment>
            <header className="header">
                <div className="header-content">
                    <img src={'/logo.jpeg'} alt="Logo" className="logo" />
                    <h1 className="title">Doctor Finder</h1>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    {isLoggedIn ?
                        <Button variant="contained" color='secondary'
                            onClick={() => {
                                setIsLoggedIn(false);
                            }}
                        >Logout</Button> :
                        <Button variant="contained" color='primary' onClick={() => {
                            setIsOpen(true);
                        }}>Login</Button>
                    }
                </div>
            </header>
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
                    }
                }}
            >
                <Card >
                    <div style={{
                        backgroundColor: 'purple',
                        height: 100,
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: 20,
                        color: 'white'
                    }}>
                        Authentication
                    </div>
                    <CardContent>
                        <Tabs value={tabValue} onChange={handleChange} >
                            <Tab label="LOGIN" style={{ maxWidth: '100%', width: '50%' }} />
                            <Tab label="REGISTER" style={{ maxWidth: '100%', width: '50%' }} />
                        </Tabs>
                        <CustomTabPanel value={tabValue} index={0}>
                            <div className='TextField'><TextField id="standard-basic" label="Email*" variant="standard" /> </div>
                            <div className='TextField2'><TextField id="standard-basic" label="Password*" variant="standard" type="password" /></div>
                            <div className='ButtonL'><Button variant="contained" color='primary'>LOGIN</Button></div>
                        </CustomTabPanel>
                        <CustomTabPanel value={tabValue} index={1}>
                            <div className='TextField3'><TextField id="standard-basic" label="First Name*" variant="standard" /> </div>
                            <div className='TextField4'><TextField id="standard-basic" label="Last Name*" variant="standard" /> </div>
                            <div className='TextField5'><TextField id="standard-basic" label="Email id*" variant="standard" /> </div>
                            <div className='TextField6'><TextField id="standard-basic" label="Password*" variant="standard" type="password" /></div>
                            <div className='TextField7'><TextField id="standard-basic" label="Mobile no.*" variant="standard" /> </div>
                            <div className='ButtonR'><Button variant="contained" color='primary'></Button></div>
                        </CustomTabPanel>

                    </CardContent>
                </Card>
            </ReactModal>
        </Fragment>
    );
};

export default Header;
