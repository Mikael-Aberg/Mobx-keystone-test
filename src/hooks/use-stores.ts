import {useContext} from 'react';
import {StoreContext} from '../stores';

const useStores = () => useContext(StoreContext);

export {useStores};
