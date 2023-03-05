import {useContext} from 'react';
import {FavFruitContext} from '../context/FavFruitContext';

const FavoriteFruit = () => {
  const {favFruitId} = useContext(FavFruitContext);
  return null;
}

export default FavoriteFruit;
