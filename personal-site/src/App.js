// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1 className='NamePlate'>Hi, my name's Raffael.</h1>

      <p className="blurb">I recently graduated from Yale university, where I majored in Computer Science. I'm currently applying to Master's programs, and I'd love to hear your advice.</p>

      <div className="Projects">
        <h1> Projects</h1>
        <div className="allProjects">
          <div className="pastProjects">
            <p className="blurb">Things I've Done</p>
            {/* <ul>
              <li>
                
              </li>
              <li>two</li>
              <li>three</li>
            </ul> */}
          </div>
          <div className="currentProjects">
            <p className="blurb">Things I'm Doing</p>
          </div>
        </div>

      </div>
      <p className="blurb"> On the side, I read, write, game, and am learning to build things for fun and for friends.</p>

    </div>
  );
}

export default App;
