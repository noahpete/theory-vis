import { Quote, Categories } from '../../components';

import categories from './categories.json';

const Home = () => {
  return (
    <div className="home">
      <Quote />
      <Categories categories={ categories } />
    </div>
  )
}

export default Home