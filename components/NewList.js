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
        <button onClick={(e) => {
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
        }}>
          Add note
        </button>
      </div>
      <style jsx>{`
        .new-list-container {
          white-space: nowrap;
          border: 7px ${colors.grey} solid;
          border-radius: 5px;
        }
        button {
          border-left: 3px solid ${colors.grey};
        }
        .new-list {
          width: 250px;
          height: 50px;
          border-radius: 5px;
        
          text-align: center;
        }
        input {
          padding: 5px;
        }
        button {
          padding: 5px;
        }
    `}</style>  
    </div>
  );
}