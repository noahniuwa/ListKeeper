import NewList from '../components/NewList'
import List from '../components/List'
import { useState } from 'react'
import Head from 'next/head'
import colors from '../helpers/colors'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

export default class Index extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lists: [],
      openMenu: '',
    }
  }

  setOpenMenu = (menuId) => {
    this.setState({openMenu: menuId})
  }

  getOpenMenu = () => {
    return this.state.openMenu
  }
    
  addList = (list) => {
    let newLists = this.state.lists.slice()
    newLists.push(list)
    this.setState({lists: newLists})
  }

  deleteList = (listId) => {
    let newLists = this.state.lists.slice()
    newLists = newLists.filter(list => list.id !== listId)
    this.setState({lists: newLists})
  }

  // switchLists = (sourceId, targetId) => {
  //   let newLists = this.state.lists.slice()
  //   let sourceElement
  //   let targetElement
  //   newLists.forEach(list => {
  //     if (String(list.id) === String(sourceId)){
  //       sourceElement = list
  //     }
  //     if (String(list.id) === String(targetId)){
  //       targetElement = list
  //     }
  //   })

  //   newLists = newLists.map(list => {
  //     if (String(list.id) === String(sourceId)){
  //       return targetElement
  //     }
  //     if (String(list.id) === String(targetId)){
  //       return sourceElement
  //     }
  //     return list
  //   })
  //   this.setState({lists: newLists})
  // }

  onDragEnd = (result) => {
    console.log(result)
    const { destination, source, draggableId } = result
    if (!destination) {
      return
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index  ) {
      return
    }

    const newLists = Array.from(this.state.lists)
    const sourceList = newLists[source.index]
    newLists.splice(source.index, 1)
    newLists.splice(destination.index, 0, sourceList)
    this.setState({lists: newLists})
  }

  render(){
    return (
      <div className="app">
        <Head>
          <title>TrelloLike</title>
          <link href="https://fonts.googleapis.com/css?family=Dosis:400,700&display=swap" rel="stylesheet" />
          <script src="/DragDropTouch.js"></script>
        </Head>
        <header>
          ListKeeper
        </header>
        <main>
          <DragDropContext
            onDragEnd={this.onDragEnd}
          >
            <Droppable
              droppableId={"droppable-id"}
            >
            {(provided) => (
              <div className='lists-container'
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
              {this.state.lists.map((list, index) => {
                return <List 
                  index={index}
                  openMenu={this.state.openMenu}
                  setOpenMenu={list.setOpenMenu}
                  setTitle={list.setTitle}
                  // switchLists={list.switchLists}
                  deleteList={list.deleteList}
                  key={list.key}
                  id={list.id}
                  initialTitle={list.initialTitle}
                />
              })}
              {provided.placeholder}
            </div>
            )}
            </Droppable>
          </DragDropContext>
          <NewList 
            openMenu={this.state.openMenu}
            getOpenMenu={this.getOpenMenu} 
            setOpenMenu={this.setOpenMenu} 
            switchLists={this.switchLists} 
            deleteList={this.deleteList} 
            addList={this.addList}
          />
        </main>   
       <style jsx>{`
         .app {
          
         }
          main {
            display: flex;
            padding-left: 20px;
            
          }
          .dropspace {
            border: 1px solid blue;
            display: inline-block;
            height: 100px;
            width: 100px;
          }
          .item {
            border: 1px solid red;
            display: inline-block;
          }
          .targets-container {
            position: absolute;
            display: flex;
          }
          .lists-container {
            display: flex;
            height: 100vh;
            align-items: flex-start;
          }
          header {
            position: fixed;
            height: 80px;
            width: 100%;
            line-height: 80px;
            background-color: ${colors.grey};
            font-size: 2rem;
            left: 0;
            top: 0;
            padding-left: 20px;
          }
        `}</style>
      </div>
    )
  }
}