import {useRef} from 'react';

export default function App() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div>
      <button onClick={handleClick}>Scroll to element</button>

      <div style={{height: '155rem'}} />

      <div ref={ref} className = 'scroll1'>Some content here html css js react node </div>

      <div style={{height: '100rem'}} />
    </div>
  );
}
