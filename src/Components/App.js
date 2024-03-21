import "./App.css";
import SubComponent from "./SubComponent";
import Card from "./Card";


function App() {
  let randomInformation = "https://jsonplaceholder.typicode.com/users";
  fetch(randomInformation)
    .then((response) => response.json())
    .then((data) => {
      let myData = data;
      let randomeNames = {};
      for (let i = 0; i < myData.length; i++) {
        randomeNames.Name = myData[i].name;
        randomeNames.Age = myData[i].age;
      }
      console.log(randomeNames);
      
    });
    
 
  let name = "Rajaram";
  let middleName = "Sachin";
  let lastName = "Kadam";
  let Age = 28;
  return (
    <Card className="my-container">
      <h2>Welcome {name} !</h2>
      <SubComponent
        name={name}
        middleName={middleName}
        lastName={lastName}
        age={Age}
      />
      <SubComponent></SubComponent>
    </Card>
  );
}

export default App;
