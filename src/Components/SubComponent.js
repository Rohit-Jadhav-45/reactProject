import "./SubComponent.css";
import { useState } from "react";
function SubComponent(props) {
  const [title, setName] = useState(props.name);
  const [middleName, setmiddleName] = useState(props.middleName);
  const [lastName, setLastName] = useState(props.lastName);
  const [age, setAge] = useState(props.age);

  let ClickHandler = () => {
    setName("Vikas");
    setmiddleName("Rajendra");
    setLastName("Pawar");
    setAge("35");
  };
  return (
    
      <div className="Sub-component-container">
        <div className="Person-details">
          <p>
            Name:<span className="person">{title}</span>
          </p>
          <p>
            Middle Name:<span className="person">{middleName}</span>
          </p>
          <p>
            Last Name:<span className="person">{lastName}</span>
          </p>
          <p>
            Age:<span className="person">{age}</span>
          </p>
        </div>
        <div className="clickBtn">
          <button onClick={ClickHandler}>Click</button>
        </div>
      </div>
   
  );
}

export default SubComponent;
