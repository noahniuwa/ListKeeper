import { useState, useEffect } from 'react'
import EditableTitle from './EditableTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dynamic from 'next/dynamic'
import colors from '../helpers/colors'
import { Droppable } from 'react-beautiful-dnd'

const Editor = dynamic(
  () => import('./Editor'),
  { ssr: false }
)


export default class List extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      menuDisplay: 'hidden',
      menuId: 'm'.concat(String(Date.now())),
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.openMenu !== prevProps.openMenu) {
      if (this.props.openMenu === this.state.menuId) {
        this.setState({menuDisplay: ''})
      }
      else {
        this.setState({menuDisplay: 'hidden'})
      }
    } 
  }

  handleChange = (value) => {
    this.setState({ text: value })
  }

  drag = (event) => {
    event.dataTransfer.setData('text', event.target.id)
  }
   
  onDragOver = (event) => {
    event.preventDefault();
  }

  onDrop = (event) => {
    event.preventDefault();
    const sourceNodeId = event.dataTransfer.getData('text')
    const targetNodeId = event.target.closest('.list').id
    this.props.switchLists(sourceNodeId, targetNodeId)
  }

  handleEllipsisClick = (event) => {
    if (this.props.openMenu === this.state.menuId) {
      return
    }
    else {
      this.props.setOpenMenu(this.state.menuId)
    }
  }

  handleCloseButtonClick = (event) => {
    if (this.props.openMenu === this.state.menuId){
      this.props.setOpenMenu('')
    }
  }
  
  render(){
    return (
      <div 
        onDrop={() => this.onDrop(event)} 
        onDragOver={() => this.onDragOver(event)} 
        onDragStart={() => this.drag(event)} 
        draggable='true' 
        id={this.props.id} 
        className="list"
      >
        <div className='list-heading'>
          <EditableTitle initialTitle={this.props.initialTitle}/>
          <div className='ellipsis'>
            <FontAwesomeIcon onClick={this.handleEllipsisClick} icon='ellipsis-h' />
            <div className={`menu ${this.state.menuDisplay}`}> 
              <div className='close-button'>
                <FontAwesomeIcon onClick={this.handleCloseButtonClick}  icon='window-close' />
              </div>
              <div>
              <button className='delete-button' onClick={(e) => {
                e.preventDefault()
                this.props.deleteList(this.props.id)
              }}>
                Delete Note
              </button>
              </div>
            </div>
          </div>
        </div>        
        <div>
          <Editor />
        </div>
        <style jsx>{`
          .delete-button {
            border: 1px solid black;
            margin-left: 30px;
            width: 80px;
          }
          .close-button {
            text-align: right;
          }
          .hidden {
            display: none;
          }
          .menu {
            border: 1px solid black;
            border-radius: 5px;
            background-color: white;
            height: 200px;
            width: 180px;
            position: absolute;
            z-index: 10;
          }
          .ellipsis {
           padding-right: 3px;
          }
          .list-heading {
            display: flex;
            justify-content: space-between;
            font-size: 1rem;
          }
          .list {
            vertical-align: top;
            width: 300px;
            border-radius: 5px;
            padding: 8px;
            display: inline-block;
            background-color: ${colors.grey};
            flex-shrink: 0;
            margin-right: 7px;
          }
          h2 {
            font-size: 18px;
          }
          input {
            width: 80%;
          }
        `}</style>
      </div>
    );
  }
}