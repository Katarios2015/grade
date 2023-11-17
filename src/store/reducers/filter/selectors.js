import { NameSpace } from '../../root-reducer';

const getFilter = (state) => state[NameSpace.Filter].filterType;

export { getFilter };
