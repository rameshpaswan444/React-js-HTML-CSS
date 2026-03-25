import { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([])
  const handleSkills = (event) => {
   // console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkills([...skills, event.target.value])
    } else {
      setSkills(skills.filter(skill => skill !== event.target.value));
    }
  };
  return (
    <div>
      <h2>Select your skills</h2>

      <input onChange={handleSkills} type="checkbox" id="java" value="java" />
      <label htmlFor="java">JAVA</label>

      <br />
      <br />
      <input
        onChange={handleSkills}
        type="checkbox"
        id="python"
        value="python"
      />
      <label htmlFor="python">PYTHON</label>

      <br />
      <br />
      <input
        onChange={handleSkills}
        type="checkbox"
        id="javascript"
        value="javascript"
      />
      <label htmlFor="javascript">JAVASCRIPT</label>
      <h1>{skills.toString()}</h1>
    </div>
  );
}
export default Skills;
