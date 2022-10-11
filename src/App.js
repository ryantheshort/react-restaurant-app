// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import './App.css';
import { nanoid } from "nanoid";
import { useState } from "react";
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
// import OrderForm from './components/OrderForm/OrderForm';
import Reviews from './components/Reviews/Reviews';


const INITIAL_MENU_LIST = [
  {
    name: "Cheese Pizza",
    image: "https://dalspizzagvl.com/wp-content/uploads/2021/10/item-8ee12a1e-b9b2-423f-97df-7adbaf3cc4f5.jpg",
    description: "Red sauce, mozzarella",
    price: 11.00,
    type: "pizza",
    id: nanoid(),
  },
  {
    name: "Pepperoni Pizza",
    image: "https://dalspizzagvl.com/wp-content/uploads/2021/12/Untitled-design-15.png",
    description: "Red sauce, mozzarella, pepperoni",
    price: 16.00,
    type: "pizza",
    id: nanoid(),
  },
  {
    name: "Supreme Pizza",
    image: "https://dalspizzagvl.com/wp-content/uploads/2021/10/item-1f3f9737-c08b-4a60-8897-77f4d088b8c7.jpg",
    description: "Mozzarella, pepperoni, Italian sausage, green peppers, red onions.",
    price: 17.50,
    type: "pizza",
    id: nanoid(),
  },
  
  {
    name: "In Bianco",
    image: "https://dalspizzagvl.com/wp-content/uploads/2021/10/item-a6af7ff4-fd66-4bde-bace-7ff3fcba989f.jpg",
    description: "olive oil, garlic, mozzarella, ricotta, and spinach",
    price: 14.50,
    type: "pizza",
    id: nanoid(),
  },
  {
    name: "Margherita",
    image: "https://dalspizzagvl.com/wp-content/uploads/2021/10/Margherita.jpg",
    description: "red sauce, fresh mozzarella, tomatoes, fresh basil",
    price: 14.50,
    type: "pizza",
    id: nanoid(),
  },
  {
    name: "Baked Ziti Appetizer",
    image: "https://www.gogogogourmet.com/wp-content/uploads/2015/03/Baked-Ziti-1024x678.jpg",
    description: "Vodka sauce and crumbled sausage baked with mozzarella and parmesan cheese.",
    price: 12.99,
    type: "appetizer",
    id: nanoid(),
  },
  {
    name: "Spinach, Roasted Red Pepper & Artichoke Dip",
    image: "https://i1.wp.com/shewearsmanyhats.com/wp-content/uploads/2015/01/spinach-artichoke-dip-1.jpg",
    description: "Served with grilled or crispy pita chips or vegetables.",
    price: 10.99,
    type: "appetizer",
    id: nanoid(),
  },
  {
    name: "Mozzarella Sticks",
    image: "https://www.lemontreedwelling.com/wp-content/uploads/2020/11/air-fryer-mozzarella-sticks-featured.jpg",
    description: "Made completely from scratch. Housemade and hand-stretched mozzarella, herbed breadcrumbs and marinara.",
    price: 9.99,
    type: "appetizer",
    id: nanoid(),
  },
  {
    name: "Panza Bread Sticks",
    image: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/2021-11/artisan-breadsticks_1021.jpg?itok=NJZBBZJS",
    description: "Quad Cities mozzarella blend, garlic parmesan sauce and pizza sauce.",
    price: 9.99,
    type: "appetizer",
    id: nanoid(),
  },
  {
    name: "Roots Caesar Salad",
    image: "https://images.happycow.net/venues/1024/11/92/hcmp119299_562697.jpeg",
    description: "Romaine & red leaf lettuce, crispy prosciutto, garlic croutons, shaved parmesan and creamy Caesar dressing",
    price: 9.99,
    type: "salad",
    id: nanoid(),
  },
  {
    name: "Popcorn Chicken Cobb Salad",
    image: "https://summeryule.com/wp-content/uploads/2022/06/salads-with-popcorn-chicken.jpeg",
    description: "Romaine, arugula, cabbage, tomatoes, pickles, corn, scallions, dill, egg, garlic croutons and buttermilk black truffle dressing.",
    price: 10.99,
    type: "salad",
    id: nanoid(),
  },
  {
    name: "Southwest Chipotle Chicken & Avocado Salad",
    image: "https://www.mylatinatable.com/wp-content/uploads/2016/02/foto-heroe.jpg",
    description: "Arugula, cilantro, cabbage, pulled chicken, radish, avocado, crispy shallots, pickled red onions, Tajin-roasted sweet potatoes, tortilla strips, black beans, corn, queso cotija and creamy chipotle dressing.",
    price: 13.99,
    type: "salad",
    id: nanoid(),
  },
  {
    name: "Maple Brown Butter Cheesecake",
    image: "https://butternutbakeryblog.com/wp-content/uploads/2022/09/brown-butter-cheesecake-close-up-900x900.jpg",
    description: "Brown butter cheesecase with brown butter graham cracker crust",
    price: 10.50,
    type: "dessert",
    id: nanoid(),
  },
  {
    name: "Fruity Pebbles Cheesecake",
    image: "https://img.buzzfeed.com/video-api-prod/assets/2fa18b27a66f42c2a624ebd822a00a2c/FB.jpg",
    description: "Funfetti cheesecake on a graham cracker crust. Topped with whipped cream and glazed Fruity Pebbles.",
    price: 8.99,
    type: "dessert",
    id: nanoid(),
  },
  {
    name: "Brownie Sundae",
    image: "https://i.pinimg.com/originals/60/ca/f3/60caf37025864346980bdad5b50d9195.jpg",
    description: "Warm old fashioned brownie topped with either vanilla or chocolate ice cream. Finished with whipped cream and chocolate sauce.",
    price: 8.99,
    type: "dessert",
    id: nanoid(),
  },
];



function App() {
  const [selection, setSelection] = useState("a");

  const [menuItems, setMenuItems] = useState(INITIAL_MENU_LIST);
  const [order, setOrder] = useState([]);

  const updateOrder = (newOrderItem) => {
    console.log('new order item', newOrderItem)
    setOrder([...order, newOrderItem]);
  };

  return (
    <div className="App"> 
    <div className='logo'></div>
    <h1></h1>
      <section className="app-container">
        <nav>
          <ul className='nav-bar'>
            <li>
              <button className='hover' value="a" onClick={(e) => setSelection(e.target.value)}>
                Home
              </button>
            </li>
            <li>
              <button className='hover' value="b" onClick={(e) => setSelection(e.target.value)}>
                Menu / Order
              </button>
            </li>
            <li>
              <button className='hover' value="c" onClick={(e) => setSelection(e.target.value)}>
                Reviews
              </button>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className='social-bar'>
            <li href="#" className='fb'><i className="fa-brands fa-facebook-f"></i></li>
            <li className='ig'><i className="fa-brands fa-instagram"></i></li>
            <li className='tw'><i className="fa-brands fa-twitter"></i></li>
          </ul>
        </nav>
      </section>
        {selection === "a" && <Home />}
        {selection === "b" && <Menu menuItems={menuItems} order={order}  updateOrder={updateOrder} />}
        {/* {selection === "c" && <OrderForm order={order} />} */}
        {selection === "c" && <Reviews />}
    </div>
  );
}

export default App;