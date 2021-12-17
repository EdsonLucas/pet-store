import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { colors, metrics } from '~/styles/global';
import { Subtitle } from '~/styles/global/general';

import useUserStore from '~/store/user.store';

const CartModal = (props) => {
  const { modalBottomPosition = 90, height = 50, internalPage } = props;

  const { cartProducts } = useUserStore();

  const navigation = useNavigation();

  return (
    <>
      {cartProducts?.length > 0 ? (
        <TouchableOpacity
          onPress={() => navigation.navigate('pre-cart')}
          activeOpacity={0.9}
          style={{
            alignItems: 'center',
            justifyContent: internalPage ? 'flex-start' : 'center',
            width: '100%',
            height,
            backgroundColor: colors.blue,
            zIndex: 9999999,
            position: 'absolute',
            bottom: modalBottomPosition,
          }}
        >
          <Subtitle
            style={{ fontSize: 14 }}
            color={colors.white}
            marginTop={internalPage && 18}
          >
            Você ainda possui produtos no carrinho
          </Subtitle>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </>
  );
};

export default CartModal;
