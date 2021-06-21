import React from 'react';

import {Container, ButtonConfirmStyle, LoadingSpinner} from './styles'

type Props = {
    label: string,
    showLoading?: boolean,
} & React.ComponentPropsWithoutRef<'button'>;

const ButtonConfirm = ({...props}: Props, ref: React.Ref<HTMLButtonElement>) => {
    return (
        <Container>
            <ButtonConfirmStyle {...props} disabled={props.showLoading}>
                {props.showLoading ? <LoadingSpinner/> : props.label}</ButtonConfirmStyle>
        </Container>
    );
};

ButtonConfirm.defaultProps = {
    label: 'OK',
    loading: 'false',
}

export default ButtonConfirm;
