import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
  state = {
      languages: [
          {id: 1, value:"Javascript", xp:1.8},
          {id: 2, value:"CSS", xp:1.5},
          {id: 3, value:"PHP", xp:2},
          {id: 5, value:"Python", xp:0.8}
      ],
      framework: [
        {id: 1, value:"Laravel", xp:2},
        {id: 2, value:"React", xp:2},
        {id: 3, value:"Saas", xp:1.7},
        {id: 4, value:"Material UI", xp:0.5}
    ]
  }

  render() {
        let {languages, framework} = this.state;

        return (
        <div className='languagesFrameworks'>
            <ProgressBar 
                languages={languages}
                className="languagesDisplay"
                title="languages"
            />
            <ProgressBar 
                languages={framework}
                className="frameworkDisplay"
                title="frameworks & bibliothèque"
            />
        </div>
        );
  }
}

export default Languages;
