import React from 'react';
import './styles.scss';

function Select(props) {
    const { usersData, handlerChangeSelect, selectedUser } = props;
    return (
        <div>
            <select className='btn-select' onChange={handlerChangeSelect} value={selectedUser}>
                <option value="">--Please choose an option--</option>
                {usersData.map(item => {
                    return (
                        <option value={item.id} key={item.id} >
                            {item.name}
                        </option>)
                })}
            </select>
        </div>
    )
}

export default Select;