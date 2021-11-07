export default function App() {
  const getData = (dataType) => {
    console.log("App making GET request for...", dataType);
    fetch("/api/" + dataType)
      .then((res) => res.json())
      .then((json) => {
        console.log("GET Response...", json);
      });
  };

  const postData = (dataType, postDataArr) => {
    console.log("App making POST request for...", dataType, postDataArr);
    fetch("/api/" + dataType, {
      method: "POST",
      body: JSON.stringify({
        [dataType]: postDataArr,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("POST Response...", json);
      });
  };

  return (
    <div className="container-outer">
      <button onClick={() => getData("fruits")}>Get Fruits</button>
      <br />
      <button onClick={() => getData("vegetables")}>Get Vegetables</button>
      <br />
      <button onClick={() => getData("musicians")}>Get Musicians</button>
      <br />
      <br />
      <br />
      <button onClick={() => postData("fruits", ["Mango", "Papaya"])}>
        Post Fruit
      </button>
      <br />
      <button
        onClick={() => postData("vegetables", ["Kale", "Radish", "Broccoli"])}
      >
        Post Vegetables
      </button>
      <br />
      <button
        onClick={() =>
          postData("musicians", [
            "Ornette Coleman",
            "Miles Davis",
            "Louis Armstrong",
          ])
        }
      >
        Post Musicians
      </button>
    </div>
  );
}
