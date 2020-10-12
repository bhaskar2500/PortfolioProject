import React from 'react'
import Logo from './logo.png'
import styles from './style.module.scss'

export default class Loading extends React.Component {
  render() {
    // const { message = 'Loading...' } = this.props
    return (
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', 
        }}
      >
        <div className={styles.container}>
          <div className={styles.innerContainer} />
          <img src={Logo} alt="Logo" className={styles.logo} />
          <div className={styles.loadingIndicator} />
        </div>
      </div>
    )
  }
}
