import { useState } from 'react';
import colors from '../helpers/colors'

export default function EditableTitle({initialTitle}) {
  const [title, setTitle] = useState(initialTitle)
  const [styles, setStyles] = useState({
    backgroundColor: colors.grey,
    borderColor: colors.grey,
  })

  const onBlur = (e) => {
    if (e.target.value.trim() === '') setTitle('')
    setStyles({backgroundColor: colors.grey, borderColor: colors.transparent})
  }

  const onFocus = (e) => {
    setStyles({backgroundColor: 'white', borderColor: colors.darkBlue})
  }
 
  return (
    <div>
    <input
      onBlur={onBlur}
      onFocus={onFocus}
      className='editable-input' 
      value={title} 
      placeholder='Title'
      onChange={e => setTitle(e.target.value)}
      type='text'
      name='title'
    > 
    </input>
    <style jsx>{`
      textarea, input { 
        outline: none; 
        padding: 2px;
        padding-left: 5px;
      }
      input {
        border: 2px solid ${styles.borderColor};
        border-radius: 3px;
        width: 80%;
        background-color: ${styles.backgroundColor};
        font-size: 1.5rem;
      }
    `}</style>  
    </div>
  );
}