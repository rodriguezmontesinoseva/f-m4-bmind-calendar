import React from 'react';
import './styles.scss';

function Select(props) {
    const { usersData, handlerChangeSelect } = props;
    return (
        <div>
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