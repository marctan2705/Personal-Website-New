import logo from './logo.svg';
import Homepage from './Components/Homepage';
import './App.css';
import { useEffect, useState, useRef, scrollArea } from 'react';

function App() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    console.log(scrollTop)
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div className="App">
        <Homepage state={scrollTop}/>
    </div>
  );
}

export default App;
