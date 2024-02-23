import './App.css'
import { useState } from 'react';
import { formDataInterface } from './interface/formDataInterface';
import { Box, Button } from '@mui/material';
import Form from './components/Home';


const App = () => {

  const formStateData = {
    firstName: {
      value: "",
      error: false
    }, lastName: {
      value: "",
      error: false
    }, email: {
      value: "",
      error: false,
      validFormate: false
    }, phoneNumber: {
      value: "",
      error: false,
      validFormate: false
    }, address: {
      value: "",
      error: false
    }, gender: {
      value: "",
      error: false
    }, zipCode: {
      value: "",
      error: false,
      validFormate: false
    }, city: {
      value: "",
      error: false
    }
  }

  //* state
  const [formData, setFormData] = useState<formDataInterface>(formStateData)
  const [open, setOpen] = useState<boolean>(false)
  const [isUpdate, setIsUpdate] = useState<boolean>(false)


  //* when the input value are chang than this fun call
  const valueChange = (e: { target: { name: string, value: string } }) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: { value, error: false } });
  }


  //* handel form submit
  const formSubmit = (e: { preventDefault: () => void; }) => {

    e.preventDefault();

    //* stores all keys 
    const field: string[] = Object.keys(formData);


    //* stores formaStateData to new var
    let newFormValues: formDataInterface = { ...formData };
    let errorFlag: boolean = false


    for (let i: number = 0; i < field.length; i++) {

      const key = field[i]

      const currentValue: {
        value: string,
        error: boolean,
        validFormate?: boolean
      }
        = formData[key];


      //*Value is Empty
      if (currentValue.value === "") {
        newFormValues = { ...newFormValues, [key]: { ...newFormValues[key], error: true } }
        errorFlag = true;
      }

      //* email validation
      if (field[i] === "email") {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!((formData["email"].value).match(emailRegex))) {
          newFormValues = {
            ...newFormValues,
            [key]: {
              ...newFormValues[key],
              ...newFormValues["error"],
              validFormate: true
            }
          }
          errorFlag = true
        }
      }

      //* Number validation
      if (field[i] === "phoneNumber") {
        const phoneNumRegex = /^\d{3}-\d{3}-\d{4}$/;
        if (!((formData["phoneNumber"].value).match(phoneNumRegex))) {
          newFormValues = {
            ...newFormValues,
            [key]: {
              ...newFormValues[key],
              ...newFormValues["error"],
              validFormate: true
            }
          }
          errorFlag = true
        }
      }

      //* ZIPcode validation 
      if (field[i] === "zipCode") {
        const zipCodeRegex = /^[0-9]{6}(?:-[0-9]{4})?$/;
        if (!((formData["zipCode"].value).match(zipCodeRegex))) {
          newFormValues = {
            ...newFormValues,
            [key]: {
              ...newFormValues[key],
              ...newFormValues["error"],
              validFormate: true
            }
          }
          errorFlag = true
        }
      }
    }

    if (errorFlag) {
      setFormData(newFormValues)
    } else {
      setFormData(formStateData)
      console.log("submitted", formData);
      setOpen(true)
    }
  }


  //* For Update
  const [updateState] = useState({
    firstName: {
      value: "fh",
      error: false
    }, lastName: {
      value: "dfhh",
      error: false
    }, email: {
      value: "dhfg",
      error: false,
      validFormate: false
    }, phoneNumber: {
      value: "85852",
      error: false,
      validFormate: false
    }, address: {
      value: "sdgdeg",
      error: false
    }, gender: {
      value: "Male",
      error: false
    }, zipCode: {
      value: "858",
      error: false,
      validFormate: false
    }, city: {
      value: "Rajkot",
      error: false
    }
  })


  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
        <Button variant='contained' onClick={() => setIsUpdate(!isUpdate)}>Update</Button>
      </Box>
      {
        isUpdate ?
          <Form formSubmit={formSubmit} valueChange={valueChange} formData={updateState} open={open} />
          :
          <Form formSubmit={formSubmit} valueChange={valueChange} formData={formData} open={open} />
      }
    </>
  )
}

export default App
