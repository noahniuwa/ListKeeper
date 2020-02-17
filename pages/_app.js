import React from 'react'
import App, { Container } from 'next/app'
import '../styles.css'
 
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
 
import { faEllipsisH, faWindowClose } from '@fortawesome/free-solid-svg-icons'
 
library.add(faEllipsisH, faWindowClose) 
 
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}
 
export default MyApp