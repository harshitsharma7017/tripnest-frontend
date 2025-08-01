import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAttractions, removeAttraction } from '../redux/attractionsSlice';

const AttractionList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.attractions);

  useEffect(() => {
    dispatch(getAttractions());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeAttraction(id));
  };

  return (
    <div>
      <h2>Attractions</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      <ul>
        {data.map(attraction => (
          <li key={attraction._id}>
            {attraction.name}
            <button onClick={() => handleDelete(attraction._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttractionList;
