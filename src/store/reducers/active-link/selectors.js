import { NameSpace } from '../../root-reducer';

const getActiveLink = (state) => state[NameSpace.ActiveLink].title;

export { getActiveLink };
