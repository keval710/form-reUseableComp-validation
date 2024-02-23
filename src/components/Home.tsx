import { Avatar, Box, Button, Container, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import { formDataInterface } from "../interface/formDataInterface";
import AlertBox from "./AlertBox";


interface Props {
    formSubmit: (e: { preventDefault: () => void; }) => void;
    valueChange: (e: { target: { name: string, value: string } }) => void,
    formData: formDataInterface,
    open: boolean
}

const Form = ({ formSubmit, valueChange, formData, open }: Props) => {

    return (
        <Container component="main" maxWidth="sm">
            <Paper variant="elevation" elevation={24} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

                {/* //* shown alert when form are submitted Successfully */}
                <AlertBox open={open} text={"Form Submitted Successfully"} />

                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
                    <Typography component="h1" variant="h5">Form</Typography>
                    <form onSubmit={formSubmit}>
                        <FormControl sx={{ mt: 3 }}>
                            <span style={{ marginBottom: "10px" }}> * This indicates required</span>
                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="firstName"
                                        fullWidth
                                        id="firstName"
                                        label="First Name*"
                                        placeholder='Keval'
                                        autoFocus
                                        value={formData.firstName.value}
                                        onChange={valueChange}
                                        error={formData.firstName.error}
                                        helperText={formData.firstName.error ? 'Enter firstName!' : ''}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6} >
                                    <TextField
                                        name="lastName"
                                        fullWidth
                                        id="lastName"
                                        label="Last Name*"
                                        placeholder='Sutariya'
                                        onChange={valueChange}
                                        error={formData.lastName.error}
                                        value={formData.lastName.value}
                                        helperText={formData.lastName.error ? 'Enter lastName!' : ''}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        type="text"
                                        name="email"
                                        fullWidth
                                        id="email"
                                        label="Email*"
                                        placeholder='keval.zerotimesolutions@gmail.com'
                                        onChange={valueChange}
                                        value={formData.email.value}
                                        error={formData.email.error || formData.email.validFormate}
                                        helperText={formData.email.error ? 'Enter email!'
                                            :
                                            formData.email.validFormate ? "Enter valid email"
                                                : ""
                                        }
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        type="tel"
                                        name="phoneNumber"
                                        placeholder="123-4567-8901"
                                        fullWidth
                                        id="phoneNumber"
                                        label="Phone Number*"
                                        onChange={valueChange}
                                        value={formData.phoneNumber.value}
                                        error={formData.phoneNumber.error || formData.phoneNumber.validFormate}
                                        helperText={formData.phoneNumber.error ? 'Enter phoneNumber!'
                                            : formData.phoneNumber.validFormate ? "Enter valid phoneNumber" : ""
                                        }
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <FormLabel id="gender">Gender*</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="gender"
                                        name="gender"
                                    >
                                        <FormControlLabel
                                            value="Male"
                                            name="gender"
                                            control={<Radio />}
                                            label="Male"
                                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                            //@ts-ignore
                                            onChange={valueChange}
                                            checked={formData.gender.value === "Male"}
                                        />
                                        <FormControlLabel
                                            value="Female"
                                            name="gender"
                                            control={<Radio />}
                                            label="Female"
                                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                            //@ts-ignore
                                            onChange={valueChange}
                                            checked={formData.gender.value === "Female"}
                                        />
                                    </RadioGroup>
                                    <FormHelperText>
                                        {formData.gender.error ?
                                            <span style={{ color: "#D74643", fontSize: "14px" }}>select Gender!</span>
                                            : ""
                                        }
                                    </FormHelperText>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        name="address"
                                        label="Address*"
                                        multiline
                                        rows={3}
                                        fullWidth
                                        placeholder='Street Address'
                                        onChange={valueChange}
                                        value={formData.address.value}
                                        error={formData.address.error}
                                        helperText={formData.address.error ? 'Enter address!' : ''}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="city">City*</InputLabel>
                                        <Select
                                            labelId="city"
                                            id="city"
                                            label="city"
                                            name="city"
                                            value={formData.city.value}
                                            onChange={valueChange}
                                            error={formData.city.error}
                                        >
                                            <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
                                            <MenuItem value="Rajkot">Rajkot</MenuItem>
                                            <MenuItem value="Gandhinagar">Gandhinagar</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormHelperText>{formData.city.error ? (<span style={{
                                        color: "#D74643", fontSize: "14px"
                                    }}>select City!</span>) : ""}</FormHelperText>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        type="number"
                                        id="outlined-multiline-static"
                                        data-max="6"
                                        name="zipCode"
                                        label="ZIP code*"
                                        placeholder='Zip code'
                                        fullWidth
                                        onChange={valueChange}
                                        value={formData.zipCode.value}
                                        error={formData.zipCode.error || formData.zipCode.validFormate}
                                        helperText={formData.zipCode.error ? 'Enter ZIP Code!'
                                            :
                                            formData.zipCode.validFormate ? "Enter valid ZIP code"
                                                : ""
                                        }
                                    />
                                </Grid>
                            </Grid>
                            <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined" color="primary">
                                Submit
                            </Button>
                        </FormControl>
                    </form>
                </Box>
            </Paper>
        </Container >
    )
}

export default Form