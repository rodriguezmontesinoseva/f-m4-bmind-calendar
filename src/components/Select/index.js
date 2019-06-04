import React from 'react';
import './styles.scss';

function Select(props) {
    const { usersData, handlerChangeSelect, handlerChangeTeam, teams } = props;
    return (
        <div>
            <label htmlFor=""> Equipo: </label>
            <select className='btn-select' onChange={handlerChangeTeam} >
                {teams.map(item => {
                    return (
                        <option value={item.team_id} key={item.team_id} >
                            {item.team_id}
                        </option>)
                })}
                {/* selected={item.id === selectedUser.id} */}
            </select>

            <label htmlFor=""> Usuarios:  </label>
            <select className='btn-select' onChange={handlerChangeSelect} >
                {usersData.map(item => {
                    return (
                        <option value={item.id} key={item.id}  >
                            {item.name}
                        </option>)
                })}
                {/* selected={item.id === selectedUser.id} */}
            </select>
        </div>
    )
}

export default Select;