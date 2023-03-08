import Categories from './Categories';
import Quote from './Quote';

import categories from 'data/categories.json';

const Home = () => {
  return (
    <div className="home">
      <Quote />
      <Categories categories={ categories } />
    </div>
  )
}

export default Home