import React, { Fragment } from 'react';
import './styles.scss';
import { directive } from '@babel/types';

function Select(props) {
    // console.log(props);
    // const hayprops = props ? 'hay props' : 'no hay props';
    // console.log(hayprops);
    const { usersData } = props;
    console.log(usersData);

    return (
        <div>
            {/* //si userdata existe pinta los usuarios, sino carga loading */}
            {usersData
                ?
                <select>
                    {usersData.map(item => {
                        return (
                            <option value="user1">
                                {item.name}
                            </option>)

                    })}
                </select>

                :
                <p>no hay props</p>
            };


      {/* //  {selCharacter.house ? <p>Casa: {selCharacter.house}</p> : ''} */}
        </div>

        // 
    )
}

export default Select;