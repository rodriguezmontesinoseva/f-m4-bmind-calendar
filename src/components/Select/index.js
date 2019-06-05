import React from "react";
import "./styles.scss";

function Select(props) {
  const {
    usersData,
    handlerChangeSelect,
    handlerChangeTeam,
    team,
    teamID
  } = props;

  return (
    <div className="container-filters">
      <label htmlFor="">
        {" "}
        Equipo: {" "}
        <select className="btn-select" onChange={handlerChangeTeam}>
          <option value="0" key="0" defaultValue={teamID}>
            {" "}
            Todos
          </option>
          <option value="1" key="1" defaultValue={teamID}>
            {" "}
            Marketing
          </option>
          <option value="2" key="2" defaultValue={teamID}>
            {" "}
            Dpto.Técnico
          </option>
        </select>
      </label>

      <label htmlFor="">
        {" "}
        Usuarios:{" "}
        <select className="btn-select" onChange={handlerChangeSelect}>
          {team === "0"
            ? usersData.map(item => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                );
              })
            : usersData
                .filter(item => item.team_id === team)
                .map(item => {
                  return (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  );
                })}
        </select>
      </label>
    </div>
  );
}

export default Select;
