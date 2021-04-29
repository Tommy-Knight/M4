import Alert from "react-bootstrap/Alert"

const WarningSign = props => {
    return (
        <>
            <Alert key="alert-danger" variant="danger">
                Oh no! something wrong: {props.text}
            </Alert>
        </>
    )
}

export default WarningSign
