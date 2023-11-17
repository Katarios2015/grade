import { NameSpace } from '../../root-reducer';

const getisBookingModalOpened = (state) =>
  state[NameSpace.ToggleModal].isBookingModalOpened;

export { getisBookingModalOpened };
