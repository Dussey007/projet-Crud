# 


```js

```


```js
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
```
