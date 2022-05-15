import './error.scss'

const ErrorAlert = (props) => {
    return (
        <div className='error-alert'>
            {props.message}
        </div>
    )
}

export default ErrorAlert;