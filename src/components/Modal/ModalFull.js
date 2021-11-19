import React from 'react';

import { View } from 'react-native';
import CloseIcon from '~/assets/icons/close.svg';
import { colors, metrics } from '~/styles/global';
import {
  Container,
  Body,
  CloseArea,
  Close,
} from '~/styles/components/modal/modalfull';

const ModalFull = (props) => {
  const { children, noCloseButton, disableCleanSteps } = props;

  const handleContainerClose = () => {
    props?.onRequestClose();
  };

  return (
    <View>
      <Container
        {...props}
        animationType='slide'
        onRequestClose={handleContainerClose}
        visible={props?.visible}
        presentationStyle='formSheet'
        swipeToClose
      >
        {!noCloseButton && (
          <CloseArea>
            <Close
              activeOpacity={metrics.activeOpacity}
              onPress={handleContainerClose}
            >
              <CloseIcon fill={colors.grayRegular} />
            </Close>
          </CloseArea>
        )}

        <Body>{children}</Body>
      </Container>
    </View>
  );
};

export default ModalFull;
