import React from 'react';
import { BoxContainer } from '~/styles/components/box';
import { colors } from '~/styles/global';
import { Subtitle } from '~/styles/global/general';

const Box = (props) => {
  const { image, title, colorTitle, marginTitleTop, boxShadow } = props;

  return (
    <BoxContainer boxShadow={boxShadow && true} {...props}>
      {image}

      <Subtitle
        style={{ width: '100%', textAlign: 'center' }}
        color={colorTitle}
        marginTop={marginTitleTop}
      >
        {title}
      </Subtitle>
    </BoxContainer>
  );
};

export default Box;
