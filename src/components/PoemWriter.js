import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      valid: false
    };
  }



  change = (e) => {
    const validate = (txt) => {
      const lines = txt.split('\n').map(line => line.split(/\s+/).filter(word => word !== ''))
      if (lines.length !== 3 ||
          lines[0].length !== 5 ||
          lines[1].length !== 3 ||
          lines[2].length !== 5
      ) return false;
      return true;
    }

    if(validate(e.target.value)) {
      this.setState({value: e.target.value,valid:true})
    }
    else {
    this.setState({value: e.target.value, valid:false})
    }
  }



  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.change}
        />
        { this.state.valid ? <div/> :
            <div
              id="poem-validation-error"
              style={{color: 'red'}}
            >
              This poem is not written in the right structure!
            </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
