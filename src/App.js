import Lettuce from "./components/imagesFruits/alface.png";
import Orange from "./components/imagesFruits/laranja.png";
import Cherry from "./components/imagesFruits/cereja.png";
import Carrot from "./components/imagesFruits/cenoura.png";
import Mango from "./components/imagesFruits/manga.png";
import Lemon from "./components/imagesFruits/limao.png";
import Beet from "./components/imagesFruits/beterraba.png";
import Tomato from "./components/imagesFruits/tomate.png";

import "./index.css";

import Cart from "./components/imgs/ShoppingCart.jpg";
import plus from "./components/imgs/+circle.png";
import minus from "./components/imgs/-circle.png";

function App() {
  const nameLogo = "hortifruti";

  const name = "vnw";
  const nameNew = name.toUpperCase();

  return (
    <section className="App">
      <div className="appTitles">
        <h1>{nameLogo}</h1>
        <h2>{nameNew}</h2>
        <p>Nossos Produtos</p>
      </div>

      <div className="Con">
        <div className="appImages">
          <img className="ImgsFruits" src={Lettuce} alt="image of a lettuce" />
          <img className="ImgsFruits" src={Orange} alt="image of a orange" />
          <img className="ImgsFruits" src={Cherry} alt="image of a cherry" />
          <img className="ImgsFruits" src={Carrot} alt="image of a carrot" />
          <img className="ImgsFruits" src={Mango} alt="image of a mango" />
          <img className="ImgsFruits" src={Lemon} alt="image of a lemon" />
          <img className="ImgsFruits" src={Beet} alt="image of a beet" />
          <img className="ImgsFruits" src={Tomato} alt="image of a tomato" />
        </div>

        <div className="appGrayImg">
          <img width="77%" src={Cart} alt="image of a ShoppingCart" />

          <span>
            <img src={plus} alt="plus circle image" />
            <img src={minus} alt="minus cicle image" />
          </span>
        </div>
      </div>
    </section>
  );
}
export default App;
