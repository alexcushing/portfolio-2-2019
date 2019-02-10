import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'
import cx from 'classnames';  
import './Card.css';

class Card extends Component {
  state = {
    expanded: false
  }
  expand = () => {
    this.setState({ expanded: !this.state.expanded });
  }
  render() {
    return (
      <>
      <div
        data-tip={this.state.expanded ? 'click to minimize' : 'click to expand'}
        className={
        cx('Card',{
          'Card-selected': this.state.expanded
        })
      } onClick={this.expand}>
        {this.props.children}
        {
          this.state.expanded &&
          <>
          <div className='Card-languages'>
            {
              this.props.languages.map((language, i) => <div className='Card-language'>{language}{ i !== this.props.languages.length - 1 && ','}</div>)
            }
          </div>
          <div className='Card-blurb'>
            {this.props.blurb}
          </div>
          </>
        }
      </div>
      <ReactTooltip type='info' effect='solid' place='right' />
      </>
    );
  }
}

export default Card;