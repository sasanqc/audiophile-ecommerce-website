import Checkout from "./pages/Checkout";
import { ReactComponent as TickIcon } from "./assets/icons/icon-tick.svg";
import Button from "./components/UI/Button";
function App() {
  //return <Home />;
  //return <Category />;
  // return <ProductDetail />;
  // return <Cart />;
  //return <Checkout />;
  return (
    <article className="orderModal">
      <TickIcon className="orderModal__tickIcon" />
      <h3 className="heading--3">THANK YOU FOR YOUR ORDER</h3>
      <p className="body">You will receive an email confirmation shortly.</p>
      <div className="orderModal__items"></div>
      <Button type={"primary"} label={"back to home"} />
    </article>
  );
}

export default App;

/* <Button type={"outline"} label={"see produetss"} />
      <TextInput
        type={"text"}
        name={"name"}
        label={"Name"}
        placeholder={"Enter your name"}
      />
      <RadioInput label={"e-Money"} onClick={() => {}} value={false} />
      <NumberInput onChange={() => {}} initial={10} /> */
