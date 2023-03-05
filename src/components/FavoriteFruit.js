import {NavLink} from 'react-router-dom'
import {useFavoriteFruit} from '../context/FavFruitContext';

const FavoriteFruit = ({fruits}) => {
  const {favFruitId} = useFavoriteFruit();
  return (
    <div className="fav-fruit">
      <h2>Favorite Fruit</h2>
      <NavLink to={`/fruits/${favFruitId}`}>
        {fruits.find(fruit => fruit.id === favFruitId).name}
      </NavLink>
    </div>
  );
}

export default FavoriteFruit;
