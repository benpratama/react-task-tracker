import PropTypes from 'prop-types'
// ini panggil komponen Button
import Button from './Button'

/**
 * props bentuknya object
 * parameter ini dikirim dari App.js
 */
function Header(props){
    // console.log(props)
    return(
        <header className='header'>
            {/* ini kasih syle inline dia harus pake {{}}
                props.title ini untuk ambil atribut props 
            */}
            <h1 style={headingStyle}>{props.title}</h1>
            <Button color={props.showForm?'#678983':'#439A97'} text={props.showForm?'Close':'Show'} f_onClick={props.f_showForm}/>
        </header>
    )
}

//ini kalo gak ada parameter dia bakal kirim ini
Header.defaultProps={
    title:'Task Tracker'
}

//ini buat tentuin data type
Header.propTypes = {
    title: PropTypes.string
}

//ini buat style
const headingStyle ={
    color:'#00337C',
}

// ============BUTTON================
// jadi ini function dikirm kekomponen button


export default Header;