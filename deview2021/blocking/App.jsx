const { useState } = React;

function App() {

  const [text, setText] = useState('');

  return (
    <div className='container'>
      <h1>Blocking ({text.length})</h1>
      <input
        type="text"
        value={text}
        maxLength={100}
        onChange={({target}) => {
          setText(target.value);
        }}
      />
      <ColorList length={text.length} />
    </div>
  );
}
