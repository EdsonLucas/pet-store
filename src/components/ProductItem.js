import React from 'react';
import { Image } from 'react-native';
import {
  BoxItem,
  BackgroudImage,
  TextContainer,
  RowTextContainer,
} from '~/styles/components/productitem';
import { Subtitle, Text } from '~/styles/global/general';

import { colors } from '~/styles/global';

const ProductItem = (props) => {
  const {
    widthProduct,
    onPress,
    marginLeft,
    image,
    icon,
    title,
    store,
    distance,
    priceDelivery,
    productPrice,
  } = props;

  return (
    <BoxItem width={widthProduct} marginLeft={marginLeft} onPress={onPress}>
      <BackgroudImage>
        {image && (
          <Image
            source={image}
            resizeMode='cover'
            style={{
              alignSelf: 'center',
              width: 60,
              height: 100,
            }}
          />
        )}

        {icon && icon}
      </BackgroudImage>

      <TextContainer>
        <Subtitle color={colors.black} marginTop={16}>
          {title}
        </Subtitle>

        <TextContainer width={90} marginLeft={0.1}>
          <Text>
            {store} • {distance}
          </Text>
          <Text color={colors.green}>{priceDelivery}</Text>
        </TextContainer>

        <Subtitle alignSelf='flex-end' color={colors.black} marginTop={5}>
          {productPrice}
        </Subtitle>
      </TextContainer>
    </BoxItem>
  );
};

export default ProductItem;
