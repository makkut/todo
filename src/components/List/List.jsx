import React from 'react';

const List =({items})=>{
    return(<ul className='todo_list'>
        {
            items.map(item=>{
                return(
                    <li className='active'>
                        <i>{item.icon ? item.icon: <i className={'badge badge--${item.color}'}></i>}</i>
                        <span>{item.name}</span>
                    </li>
                )})
        }
    </ul>
    )
}
export default List;