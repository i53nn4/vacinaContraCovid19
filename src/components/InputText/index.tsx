import React from 'react';

import {Container, ImputStyle} from './styles'

type Props = {
    showDisabled?: boolean,
    error?: boolean,
} & React.ComponentPropsWithoutRef<'input'>;

const InputText = ({...props}: Props, ref: React.Ref<HTMLInputElement>) => {
    return (
        <Container>
            <ImputStyle {...props} disabled={props.showDisabled} error={props.error}/>
        </Container>
    );
};

InputText.defaultProps = {
    ShowDisabled: 'false',
}

export default InputText;
