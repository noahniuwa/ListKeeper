import NewList from '../components/NewList'
import List from '../components/List'
import { useState } from 'react'
import Head from 'next/head'
import colors from '../helpers/colors'

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

  switchLists = (sourceId, targetId) => {
    let newLists = this.state.lists.slice()
    let sourceElement
    let targetElement
    newLists.forEach(list => {
      if (String(list.id) === String(sourceId)){
        sourceElement = list
      }
      if (String(list.id) === String(targetId)){
        targetElement = list
      }
    })

    newLists = newLists.map(list => {
      if (String(list.id) === String(sourceId)){
        return targetElement
      }
      if (String(list.id) === String(targetId)){
        return sourceElement
      }
      return list
    })
    this.setState({lists: newLists})
  }

  render(){
    return (
      <div>
        <Head>
          <title>TrelloLike</title>
          <link href="https://fonts.googleapis.com/css?family=Dosis:400,700&display=swap" rel="stylesheet" />
          <script src="/DragDropTouch.js"></script>
        </Head>
        <header>
          ListKeeper
        </header>
        <main>
          <div className='lists-container'>
            {this.state.lists.map((list) => {
              return <List 
              openMenu={this.state.openMenu}
              setOpenMenu={list.setOpenMenu}
              setTitle={list.setTitle}
              switchLists={list.switchLists}
              deleteList={list.deleteList}
              key={list.key}
              id={list.id}
              initialTitle={list.initialTitle}
              />
            })}
          </div>
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
          main {
            display: flex;
            padding: 15px;
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
            width: 100%;
            background-color: ${colors.grey};
          }
        `}</style>
      </div>
    )
  }
}