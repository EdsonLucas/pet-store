import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combine } from 'zustand/middleware';

const INITIAL_STATE = {
  isAuthenticated: false,
  isVisitant: false,
  hasSignature: false,
  cartProducts: [],
};

export default create(
  combine(INITIAL_STATE, (set) => ({
    fetchLoading: async () => {
      const isAuthenticated = await AsyncStorage.getItem('isAuthenticated');

      set((state) => ({ ...state, isAuthenticated: Boolean(isAuthenticated) }));
    },
    fetchVisitantLoading: async () => {
      set((state) => ({
        ...state,
        isVisitant: true,
      }));
    },
    fetchSignatures: async () => {
      const hasSignature = await AsyncStorage.getItem('hasSignature');

      set((state) => ({
        ...state,
        hasSignature: Boolean(hasSignature),
      }));
    },
    fetchProducts: async () => {
      const products = await AsyncStorage.getItem('cartProducts');

      set((state) => ({
        ...state,
        cartProducts: JSON.parse(products),
      }));
    },
  }))
);
