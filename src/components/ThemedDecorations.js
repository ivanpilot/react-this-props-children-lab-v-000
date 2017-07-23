// Code ThemedDecoration Component Here
import React from 'react'

class ThemedParty extends React.Component{
  render(){
    var children = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.theme}>{child}</div>
      )
    })

    return (
      <div>
        {children}
      </div>
    );
  }
}

export default ThemedParty
