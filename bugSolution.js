```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Add a cleanup function to prevent infinite loops
    let intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId); // Cleanup function
  }, []);

  return <div>Count: {count}</div>;
}
```