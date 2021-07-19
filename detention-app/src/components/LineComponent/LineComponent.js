import React from 'react';

class LineComponent extends React.Component {

  render() {
    return (
      <div>
        <h1 id='line'> I will never mutate state or props directly </h1>
      </div>
    );
  }
}

export default LineComponent;
