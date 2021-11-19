import React from 'react';
import {
  Container,
  Body,
  SwipeCloseArea,
  Close,
} from '~/styles/components/modal/modal';

import { colors, metrics } from '~/styles/global';

// import CloseIcon from '~/assets/icons/navigation/close';

const Modal = (props) => {
  const { children, position = 'bottom' } = props;
  return (
    <Container position={position} swipeArea={40} {...props} coverScreen>
      <SwipeCloseArea />
      {/* <Close activeOpacity={metrics.activeOpacity} onPress={props.onClosed}>
        <ButtonAreaExpander paddingGeneral="8px">
           <CloseIcon fill={colors.grayRegular} />
  </ButtonAreaExpander>
      </Close> */}
      <Body>{children}</Body>
    </Container>
  );
};

export default Modal;
