import './App.css';
import Counter from './components/Counter';
import Parent from './components/Parent';
import Toggle from './components/Toggle';
import logo from './logo.svg';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>

      <main>
        <Counter />

        <Toggle text="Make me disappear" />

        <Parent />
      </main>
    </div>
  );
}
