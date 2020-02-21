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
      <form>
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
      </form>
      <style jsx>{`
        .new-list {
          width: 250px;
          background-color: ${colors.grey};
          height: 50px;
          border-radius: 5px;
          line-height: 50px;
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