import fruits from "./mockData/fruits.json";

// Render FruitsIndex component inside of App component
import FruitsIndex from './components/FruitsIndex';

// Render FruitForm component inside of App component
import FruitForm from './components/FruitForm';

import FavoriteFruit from './components/FavoriteFruit';

function App() {
  return (
    <>
      <h1>Welcome to Fruits App</h1>
      <FruitsIndex fruits={fruits}/>
      <FruitForm fruits={fruits}/>
      <FavoriteFruit fruits={fruits} />
    </>
  );
}

export default App;
