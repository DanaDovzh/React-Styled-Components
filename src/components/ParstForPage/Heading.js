import { Button, Typography } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

const Heading = ({ children, props }) => {
    return (
        <div className='form__heading'>
            <Typography
                variant='h4'
                align='center'
                {...props} >
                {children}
            </Typography>
            <PersonIcon fontSize='large'/>

        </div>

    )

}

export default Heading;