import React from 'react';
import List from "../List/List";
import './AddButtonList.scss';

const AddButtonList = () => {
    return <>
        <List items={[
            {
                className: 'list_add-button',
                icon: <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1V11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 6H11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>,
                name: 'Добавить список'
            }
        ]}/>
        <div className='add-list-popup'></div>
    </>
}

export default AddButtonList;