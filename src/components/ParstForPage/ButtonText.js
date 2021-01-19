import React from 'react';
import { Button } from '@material-ui/core';

const ButtonText = ({ children, props }) => {
    return (
        <Button
            disableFocusRipple
            disableRipple
            style={{ textTransform: "none" }}
            variant="text"
            color="primary">
            {children}
        </Button>
    )
}

export default ButtonText;



