import { useState } from 'react';
import List from '../components/List'
import colors from '../helpers/colors'


export default function NewList({
  addList, 
  deleteList, 
  setOpenMenu, 
  /*switchLists,*/ 
  getOpenMenu, 
  openMenu
}) {
  const [title, setTitle] = useState('')
  
  return (
    <div className='new-list'>
      <div className='new-list-container'>
        <input 
          value={title} 
          placeholder='Note title'
          onChange={e => setTitle(e.target.value)}
          type='text'
          name='title'
        > 
        </input>
        <div onClick={(e) => {
          e.preventDefault()
          addList({ 
            setOpenMenu: setOpenMenu,
            setTitle: setTitle,
            // switchLists: switchLists,
            deleteList: deleteList,
            key: Math.random(),
            id: Math.random(),
            initialTitle: title || "Title",})
          setTitle("")
        }}
        className="add-list-button"
        >
          Add note
        </div>
      </div>
      <style jsx>{`
        .add-list-button{
          display: inline-block;
          background-color: #D9DBE2;
          padding: 6px;
          border-radius: 5px;
        }
        .new-list-container {
          white-space: nowrap;
          border-radius: 5px;
          width: 250px;
          border-radius: 5px;
          text-align: center;
        }
        input {
          padding: 5px;
          border: 2px ${colors.grey} solid;
          border-radius: 5px;
          margin-right: 6px;
        }
        button {
          padding: 5px;
        }
    `}</style>  
    </div>
  );
}