import React from 'react';
import './styles.scss';

function Select(props) {
    const { usersData, handlerChangeSelect, selectedUser } = props;
    return (
        <div>
            <select className='btn-select' onChange={handlerChangeSelect}>
                {usersData.map(item => {
                    return (
                        <option value={item.id} key={item.id} selected={item.id === selectedUser.id} >
                            {item.name}
                        </option>)
                })}
            </select>
        </div>
    )
}

export default Select;