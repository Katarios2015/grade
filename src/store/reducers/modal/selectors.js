import { NameSpace } from '../../root-reducer';

const getisBookingModalOpened = (state) =>
  state[NameSpace.TOGGLE_MODAL].isBookingModalOpened;

export { getisBookingModalOpened };
