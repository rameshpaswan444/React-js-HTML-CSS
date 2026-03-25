import React, { useState } from "react";
function ColormixerProject() {
  
    const [r, setr]=useState(0);
    const [g, setg]=useState(0);
    const [b, setb]=useState(0);

    return (
        <div>
            <h1>Colormixer Project</h1>
            <div style={{backgroundColor:`rgb(${r}, ${g}, ${b})`,height:200, width:200}}>

            </div>
            <label htmlFor="red">Red</label>
            <input id="red" type = "range" min="0" max="255" onChange={(e) => setr(e.target.value)} />
            <br />
            <br/>
            <label htmlFor="green">Green</label>
            <input id="green" type = "range" min="0" max="255" onChange={(e) => setg(e.target.value)} />
            <br />
            <br/>
            <label htmlFor="blue">Blue</label>
            <input id="blue" type = "range" min="0" max="255" onChange={(e) => setb(e.target.value)} />
          

        </div>
    );
}
 export default ColormixerProject;