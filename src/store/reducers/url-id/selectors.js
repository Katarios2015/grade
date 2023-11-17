import { NameSpace } from '../../root-reducer';

const getUrlId = (state) => state[NameSpace.UrlId].urlId;

export { getUrlId };
