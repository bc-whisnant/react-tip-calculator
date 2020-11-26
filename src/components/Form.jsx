import React, { Component, Fragment } from 'react'

class Form extends Component {
  state = {
    totalBeforeTip: 0,
    totalAfterTip: 0,
  }

  handleChange = (event) => {
    this.setState({ totalBeforeTip: event.target.value })
  }

  calcTotal = (percentage) => {
    let total =
      parseFloat(this.state.totalBeforeTip) +
      parseFloat((this.state.totalBeforeTip * percentage) / 100)
    this.setState({
      totalAfterTip: total.toFixed(2),
    })
  }

  render() {
    return (
      <Fragment>
        <div className='form-group'>
          <input
            type='number'
            className='form-control'
            id='total'
            placeholder='Enter total amount:'
            value={this.state.totalBeforeTip}
            onChange={this.handleChange}
          />
        </div>
        <div className='row mb-4'>
          <div className='mx-2'>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={() => this.calcTotal(10)}
            >
              Tip 10%
            </button>
          </div>
          <div className='mx-2'>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={() => this.calcTotal(15)}
            >
              Tip 15%
            </button>
          </div>
          <div className='mx-2'>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={() => this.calcTotal(20)}
            >
              Tip 20%
            </button>
          </div>
        </div>
        <h4>Your total is: {this.state.totalBeforeTip}</h4>
        <h4>Your total after tipping is: {this.state.totalAfterTip}</h4>
      </Fragment>
    )
  }
}

export default Form
