import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
];

const fruitExists = (fruits, name) => fruits
      .map(fruit => fruit.name).includes(name);

function FruitForm({ fruits }) {

  // Make the name, sweetness, seeds, and color inputs
  // into controlled inputs.
  const [name, setName] = useState("");
  const [sweetness, setSweetness] = useState(1);
  const [seeds, setSeeds] = useState("yes");
  const [color, setColor] = useState(COLORS[0]);
  const [errors, setErrors] = useState({});
  const history = useHistory();

  useEffect(() => {
    const err={};
    if(name.length < 3) {
      err.name = "Name must be 3 or more characters.";
    }
    if(name.length > 20) {
      err.name = "Name must be 20 characters or less.";
    }
    if(fruitExists(fruits, name)) {
      err.name = "Name already exists."
    }
    if(sweetness < 1 || sweetness > 10) {
      err.sweetness = "Sweetness must be between 1 and 10.";
    }
    setErrors(err);
  }, [name, sweetness, fruits])

  function onSubmit(e) {
    e.preventDefault();
    console.log({
      name, sweetness, color, seeds
    })
    history.push("/");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="fruit-form"
    >
      <h2>Enter a Fruit</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <p className="errors">{errors.name}</p>
      <label>
        Select a Color
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          {COLORS.map(color => (
            <option
              key={color}
              value={color}
            >
              {color}
            </option>
          ))}
        </select>
      </label>
      <label>
        Sweetness
        <input
          type="number"
          name="sweetness"
          value={sweetness}
          onChange={(e) => setSweetness(e.target.value)}
        />
      </label>
      <p className="errors">{errors.sweetness}</p>
      <label>
        <input
          type="radio"
          value="no"
          name="seeds"
          checked={seeds==="no"}
          onChange={() => setSeeds("no")}

        />
        No Seeds
      </label>
      <label>
        <input
          type="radio"
          value="yes"
          name="seeds"
          checked={seeds==="yes"}
          onChange={() => setSeeds("yes")}
        />
        Seeds
      </label>
      <button
        disabled={Object.values(errors).length !== 0 ? true: false}
        type="submit"
      >
        Submit Fruit
      </button>
    </form>
  );
}

export default FruitForm;
