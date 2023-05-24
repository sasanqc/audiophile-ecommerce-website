import Header from "./layout/Header";
function App() {
  return (
    <main className="home">
      <Header />
      <section className="newProduct"></section>
      <section className="categories"></section>
      <section className="speakerSample"></section>
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
