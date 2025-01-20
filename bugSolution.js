```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://api.example.com/data', { signal })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // ... process data ...
      })
      .catch(error => {
        if (error.name !== 'AbortError') {
          console.error('Error fetching data:', error);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```