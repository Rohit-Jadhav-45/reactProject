import "./SubComponent.css";
import { useState } from "react";
function SubComponent(props) {
  const [title, setName] = useState(props.name);
  const [middleName, setmiddleName] = useState(props.middleName);
  const [lastName, setLastName] = useState(props.lastName);
  const [age, setAge] = useState(props.age);
  const [newDetails,setNewDetail] = useState("");

  

  let ClickHandler = () =>{
      if(newDetails === ''){
        alert("Please Enter your name");
        setName(title);
      }else{
       setName(newDetails);
       setNewDetail("");
       setmiddleName("Rajendra");
       setLastName("Pawar");
       setAge3("35");
      }
  };

  let changeHandler = (event) =>{
    setNewDetail(event.target.value);
  }
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
           <input type="text" id="myInput" value={newDetails} onChange={ changeHandler }></input>
          <button onClick={ClickHandler}>Click</button>
        </div>
       
      </div>
      
  );
}

export default SubComponent;
