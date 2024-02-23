export interface formDataInterface {
    [key: string]: {
        value: string,
        error: boolean,
        validFormate?: boolean
    },
    firstName: {
        value: string,
        error: boolean
    },
    lastName: {
        value: string,
        error: boolean
    },
    email: {
        value: string,
        error: boolean,
        validFormate: boolean
    },
    phoneNumber: {
        value: string,
        error: boolean,
        validFormate: boolean
    },
    address: {
        value: string,
        error: boolean
    },
    zipCode: {
        value: string,
        error: boolean,
        validFormate: boolean
    },
    gender: {
        value: string,
        error: boolean
    },
    city: {
        value: string,
        error: boolean
    }
}