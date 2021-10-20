const { useState, useTransition } = React;

function TextInput({ onChange }) {
  const [text, setText] = useState('');
  return (
    <input
      type="text"
      value={text}
      maxLength={100}
      onChange={({target}) => {
        setText(target.value);
        onChange(target.value);
      }}
    />
  );
}

function App() {

  const [size, setSize] = useState(0);
  const [isPending, startTransition] = useTransition();

  function handleChange(text) {
    startTransition(() => {
      setSize(text.length);
    });
  };

  return (
    <div className='container'>
      <h1>Concurrent ({size})</h1>
      <TextInput onChange={handleChange} />
      <div className={isPending ? 'pending' : ''}>
        <ColorList length={size} />
      </div>
    </div>
  );
}
