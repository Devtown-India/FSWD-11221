

const App = () => {

  let count = 0

  const handleIncrease = (e) => {
    count += 1

    console.log(count)
  }

  return (
    <div style={{ height: "500px", display: "flex", alignItems: "center", flexDirection: "column" }} >

      <h2>
        {count}
      </h2>
      <div>
        <button>Decrease</button>

        <button onClick={handleIncrease} >Increase</button>
      </div>

    </div>
  );
}

// React.createElement

export default App;