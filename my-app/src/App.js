import './App.css';

function Header(){
  return(
    <div>
      <h2>hey world</h2>
      <Title/>
    </div>
  )
}
function Content(){
  return(
      <div>
          <h2>This is content</h2>
          <Title/>
      </div>

  )
}
function Footer(){
  return(
      <div>
        <h2>link</h2>
        <Title/>
      </div>
  )
}
function Title(){
  return(
    <h2>Title</h2>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;


