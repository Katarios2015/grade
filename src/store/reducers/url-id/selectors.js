import { NameSpace } from '../../root-reducer';

const getUrlId = (state) => state[NameSpace.URL_ID].urlId;

export { getUrlId };
