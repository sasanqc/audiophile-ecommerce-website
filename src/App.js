import Categories from "./components/Categories";
import Button from "./components/UI/Button";
import Hero from "./layout/Hero";
function App() {
  return (
    <main className="home">
      <Hero />
      <Categories />
      <section className="sampleProduct">
        <img
          src="/images/home/desktop/image-speaker-zx9.png"
          alt="sample product"
          className="sampleProduct__image"
        />
        <div className="sampleProduct__textBox">
          <h1 className="heading--1">ZX9 SPEAKER</h1>
          <p className="body">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button type={"dark"} label={"see product"} />
        </div>
      </section>
      <section className="secondSpeakerSample"></section>
      <section className="earphones"></section>
      <section className="feature"></section>
      <footer className="footer"></footer>
    </main>
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
