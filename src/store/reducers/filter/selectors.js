import { NameSpace } from '../../root-reducer';

const getFilter = (state) => state[NameSpace.FILTER].filterType;

export { getFilter };
