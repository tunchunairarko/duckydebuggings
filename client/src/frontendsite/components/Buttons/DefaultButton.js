import Button from 'react-bootstrap/Button'


const DefaultButton = ({color, text, onClick}) => {
    
    return (
        <Button onClick={onClick} style={{backgroundColor: color}} 
        className="btn">
            {text}
        </Button>
    )
}

DefaultButton.defaultProps = {
    text: 'DefaultButton',
}





export default DefaultButton
