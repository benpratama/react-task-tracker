import PropTypes from 'prop-types'

function Button(props){
    // console.log(props)
    return (
        <button
        onClick={props.f_onClick}
        style={{backgroundColor:props.color}} 
        className="btn">
            {props.text}
        </button>
    )    
}
Button.defaultProps={
    color:'#678983',
    text:'Task Tracker'
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;