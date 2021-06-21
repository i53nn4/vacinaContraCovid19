import React from 'react';

import {Container, LoadingSpinner} from './styles'

type Props = {
    show?: boolean,
}

const Loading = ({...props}: Props) => {
    return (
        <Container>
            {props.show ? <LoadingSpinner/> : null}
        </Container>
    );
};

export default Loading;
