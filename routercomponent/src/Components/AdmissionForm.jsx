import React, { useEffect, useState } from "react";
import { Box, Container, CssBaseline, Divider, Typography, InputLabel, CircularProgress, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormUpdate from "./formUpdate";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";


const AdmissionForm = (props) => {
    const [firstName, setFirstName] = useState();
    const [middleName, setMiddleName] = useState();
    const [lastName, setLastName] = useState();
    const [gender, setGender] = useState("");
    const [selectedCoffees, setSelectedCoffees] = useState([]);
    const [age, setAge] = useState("");
    const [technology, setTechnology] = useState("");
    const [submissionInProgress, setSubmissionInProgress] = useState(false);
    const [completeForm, setCompleteForm] = useState({});
    const [formToPropogate, setFormToPropogate] = useState({});


    const firstNameChange = (event) => {
        setFirstName(event.target.value);
        const form = { ...completeForm }
        form.firstName = event.target.value;

        setCompleteForm(form);
    }
    const middleNameChange = (event) => {
        setMiddleName(event.target.value);
        const form = { ...completeForm }
        form.middleName = event.target.value;

        setCompleteForm(form);
    }

    const lastNameChange = (event) => {
        setLastName(event.target.value);
        const form = { ...completeForm }
        form.lastName = event.target.value;

        setCompleteForm(form);
    }

    const onGenderName = (event) => {
        setGender(event.target.value);
        const form = { ...completeForm };
        form.gender = event.target.value;

        setCompleteForm(form);
    }

    const handleAgeChange = (event) => {
        setAge(event.target.value);
        const form = { ...completeForm }
        form.age = event.target.value;
        setCompleteForm(form);


    }
    const handleDevloperChange = (event) => {
        setTechnology(event.target.value);
        const form = { ...completeForm }
        form.technology = event.target.value;

        setCompleteForm(form);
    }
    const handleCoffeeChange = (event, type) => {
        console.log(`${type} value is - ${event.target.checked}`);

        // determine the type
        // determine wheather it is selected or unselected
        // if selected 
        // add on selected state
        // else
        // remove from selected state
        if (event.target.checked) {
            const temp = [...selectedCoffees];
            temp.push(type);
            setSelectedCoffees(temp);

            const form = { ...completeForm };
            form.selectedCoffees = temp;
            setCompleteForm(form);

        } else {
            //more
            //loop over existing selected coffee
            //for type that is unchecked remove it

            const temp = [];
            selectedCoffees.forEach((coffee) => {
                if (coffee !== type) {
                    temp.push(coffee);
                }
            });
            setSelectedCoffees(temp);
            const form = { ...completeForm };
            form.selectedCoffees = temp;
            setCompleteForm(form);
        }


    };
    // useEffect(() => {
    //     setGender('female');


    // }, [setGender]);

    const handleSubmit = () => {
        console.log(completeForm);
        setSubmissionInProgress(true);
        setTimeout(() => {
            setFormToPropogate(completeForm);
            setSubmissionInProgress(false);
        }, 5000);



    }
    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="md">
                    <Box
                        sx={{
                            textAlign: "center",
                            backgroundColor: "orange",


                        }}
                    >
                        <Typography variant="h4"> Admission Form</Typography>
                    </Box>
                    <Divider />
                    <Box
                        sx={{
                            border: 2,
                            display: "flex",
                            padding: 5
                        }}
                    >

                        <FormControl sx={{ justifyContent: "space-between" }}>

                            <FormLabel id="demo-radio-buttons-group-label">
                                Personal Info
                            </FormLabel>
                            <Grid container spacing={2}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        padding: 2,
                                        border: "1px dashed teal",
                                        justifyContent: "space-between",

                                    }}
                                >
                                    <Grid item sm={12} md={12} lg={4}>

                                        <TextField id="outlined-basic"
                                            label="FirstName"
                                            value={firstName}
                                            onChange={firstNameChange}
                                            variant="outlined" />
                                    </Grid>
                                     <Grid item sm={12} md={12} lg={4}>
                                        <TextField id="outlined-basic"
                                            label="MiddleName"
                                            value={middleName}
                                            onChange={middleNameChange}
                                            variant="outlined" />
                                    </Grid>
                                    <Grid item sm={12} md={12} lg={4}>
                                        <TextField id="outlined-basic"
                                            label="LastName"
                                            value={lastName}
                                            onChange={lastNameChange}
                                            variant="outlined" />
                                    </Grid>
                                </Box>
                            </Grid>
                            <br />
                            <Grid container spacing={2}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between"


                                }}
                            >
                                 

                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label" sx={{ fontWeight: "bold" }}>Gender</FormLabel>


                                    <Grid item sm={12} md={12} lg={4}>
                                      <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        name="radio-buttons-group"
                                        value={gender}
                                        onChange={onGenderName}
                                    >

                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                    </Grid>
                                </FormControl>
                                {/*coffee like plain,milk,dark,expresspo  */}
                                <FormControl sx={{ width: 300, marginLeft: 40 }} component="fieldset" variant="standard">
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox onChange={(event) => handleCoffeeChange(event, "plain")} />} label="plain"
                                        />
                                        <FormControlLabel control={<Checkbox onChange={(event) => handleCoffeeChange(event, "milk")} />} label="milk"
                                        />
                                        <FormControlLabel control={<Checkbox onChange={(event) => handleCoffeeChange(event, "dark")} />} label="dark"
                                        />
                                        <FormControlLabel control={<Checkbox onChange={(event) => handleCoffeeChange(event, "exprespo")} />} label="exprespo"
                                        />


                                    </FormGroup>
                                </FormControl>
                            </Box>
                            </Grid>

                            <br />
                            <Box sx={{
                                justifyContent: "space-between"

                            }}>

                                <FormControl sx={{ width: 250 }}>
                                    <InputLabel id="abcd  ">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleAgeChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={28}>Twenty Eight</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ width: 250, marginLeft: 10 }}>
                                    <InputLabel id="abcd">Developer In</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={technology}
                                        label="technology"
                                        onChange={handleDevloperChange}
                                    >
                                        <MenuItem value={"Database"}>Database</MenuItem>
                                        <MenuItem value={"Api"}>Api</MenuItem>
                                        <MenuItem value={"Ui"}>Ui</MenuItem>
                                        <MenuItem value={"Devops"}>Devops</MenuItem>
                                    </Select>

                                </FormControl>

                            </Box>



                            <Box
                                sx={{
                                    marginY: 2,
                                    display: "flex",
                                    justifyContent: "flex-end",

                                }}
                            >


                                {/* <Button variant="contained"
                                        disabled={(!completeForm.firstName)
                                            || (!completeForm.technology)}
                                        onClick={handleSubmit}>
                                        Submit {JSON.stringify(submissionInProgress)}
                                    </Button>
                                 */}

                                {/* {submissionInProgress && <CircularProgress/>} */}

                                {submissionInProgress ? (
                                    <CircularProgress />
                                ) : (
                                    <Button variant="contained"
                                        color="secondary"
                                        disabled={(!completeForm.firstName)
                                            || (!completeForm.technology)}
                                        onClick={handleSubmit}>
                                        Submit {JSON.stringify(submissionInProgress)}
                                    </Button>


                                )}
                                <Button variant="contained"
                                    color="info"
                                    disabled={submissionInProgress}
                                    startIcon={
                                        submissionInProgress ? (<CircularProgress size={20} />
                                        ) : (
                                            <></>
                                        )
                                    }
                                    onClick={handleSubmit}>
                                    Submit
                                </Button>


                            </Box>

                        </FormControl >
                    </Box>

                    <pre>{JSON.stringify(completeForm, null, 3)}</pre>

                </Container>

                <FormUpdate info={formToPropogate} />
            </React.Fragment>


        </>
    );
}
export default AdmissionForm;