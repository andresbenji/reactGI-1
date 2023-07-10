import React, { Component } from "react";
import BasicInfo from "./BasicInfo";

export class ReactGI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: "Andres Cuellar",
          number: "980-349-3443",
          dob: "02/29/2000",
        },
        {
          name: "Daniella Ramirez",
          number: "908-322-3688",
          dob: "02/27/1999",
        },
        {
          name: "Sebastian Bonilla",
          number: "980-768-9800",
          dob: "07/21/2000",
        },
        {
          name: "Oscar Morado",
          number: "980-786-534",
          dob: "06/16/2000",
        },
        {
          name: "D'Andre Derr",
          number: "704-999-4075",
          dob: "03/24/2002",
        },
      ],
    };
  }

  render() {
    const { people } = this.state;

    return (
      <div>
        <h1>Contacts</h1>
        {people.map((person) => (
          <BasicInfo person={person} />
        ))}
      </div>
    );
  }
}

export default ReactGI;
