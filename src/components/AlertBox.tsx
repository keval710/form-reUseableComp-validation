import { Snackbar, Alert } from "@mui/material"

interface Props {
    open: boolean,
    text: string
}

const AlertBox = ({ open, text }: Props) => {
    return (
        <>
            <Snackbar
                anchorOrigin={{ horizontal: "right", vertical: "top" }}
                open={open}
                autoHideDuration={1000}
            >
                <Alert variant="filled" severity="success">
                    {text}
                </Alert>
            </Snackbar>
        </>
    )
}

export default AlertBox