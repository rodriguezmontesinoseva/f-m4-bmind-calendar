import React from 'react';
import './styles.scss';



function Select(props) {
    const { usersData, handlerChangeSelect, handlerChangeTeam, team } = props;
   
    return (
        <div className='container-filters'>
            <label htmlFor=""> Equipo: </label>
            <select className='btn-select' onChange={handlerChangeTeam}>
                <option value='0' key='0' > Todos</option>
                <option value='1' key='1' > Marketing</option>
                <option value='2' key='2' > Dpto.Técnico</option>
            </select>
            <label htmlFor=""> Usuarios:  </label>
            <select className='btn-select' onChange={handlerChangeSelect} >
                {team === '0'
                    ? usersData.map(item => {
                        return (
                            <option value={item.id} key={item.id}  >
                                {item.name}
                            </option>)
                    })
                    :
                    usersData.filter((item) => item.team_id === team).map(item => {
                        return (
                            <option value={item.id} key={item.id}  >
                                {item.name}
                            </option>)
                    }
                    )

                }
            </select>
        </div>
    )
}

export default Select;