import React from 'react';
import './App.css';


function App() {
  const [personName, setPersonName] = React.useState('');



  return(
  <div className="container">
    <h1>Hello, {personName}</h1>
    <p>I am Writing a JSX</p>
<ul>
<li>
    <button><span role="img" aria-label="emojiface" id="emojiface">😋</span>
    </button>

</li>
</ul>
<input type="text" onChange={(e) => setPersonName(e.target.value)}/>

</div>
  );
}

export default App;
