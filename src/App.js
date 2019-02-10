import React from 'react';
import Me from './me.png';
import Card from './Card.js';
import './App.css';

const WFBlurb = "Worked on creating and updating new JavaScript components, styled pages seen by millions of users, and took part in a large-scale react conversion. All work was written following an internal set of code standards, tested thoroughly, reviewed by peer developers, and built with wireframes provided by a team of designers."

const PutBlurb1 = "Created internal iOS applications for different teams within the company. Also worked on a 'kitchen sink' application to show off uses for the reusable components.";

const PutBlurb2 = "Worked in web and software development creating interfaces for data manipulation, python cycles for automating work tasks, ETL jobs, and more.";

const App = () => (
  <>
    <div className="App">
      <h1 className='App-title'>
        Alex Cushing
        </h1>
      <h3 className='App-subtitle'>
        Front-End Developer at <a className='App-subtitle-link link' href='https://www.fantasypros.com' target='_blank'>FantasyPros</a>
      </h3>
      <h4 className='App-subtitle App-subtitle-date'>
        February 2019 - Present
        </h4>
      <img className='App-img' src={Me} />
    </div>
    <div className='App-subsection'>
      <div className='App-subsection-inner'>
        <h3 className='App-subtitle-alt'>
          Previously
        </h3>
        <div className='App-prev-section'>
          <div className='App-prev-subsection'>
            <Card
              languages={
                [
                  'JavaScript (React)',
                  'SCSS',
                  'HTML/JSX',
                  'PHP'
                ]
              }
              blurb={WFBlurb}
            >
              <h3 className='App-prev'>
                Front-End Developer at <a className='App-prev-link link' href='https://wayfair.com' target='_blank'>Wayfair</a>
              </h3>
              <h4 className='App-prev App-prev-date'>
                October 2017 - February 2019
          </h4>
            </Card>
            <Card
              languages={
                [
                  'Swift',
                  'JavaScript'
                ]
              }
              blurb={PutBlurb1}
            >
              <h3 className='App-prev'>
                Digital Transformation Intern at <a className='App-prev-link link' href='https://putnam.com' target='_blank'>Putnam Investments</a>
              </h3>
              <h4 className='App-prev App-prev-date'>
                May 2017 - August 2017
          </h4>
            </Card>
            <Card
              languages={
                [
                  'JavaScript', 'JQuery', 'Python', 'Django', 'SCSS'
                ]
              }
              blurb={PutBlurb2}
            >
              <h3 className='App-prev'>
                Software Engineering Co-Op at <a className='App-prev-link link' href='https://putnam.com' target='_blank'>Putnam Investments</a>
              </h3>
              <h4 className='App-prev App-prev-date'>
                July 2016 - December 2016
          </h4>
            </Card>
          </div>
        </div>
      </div>
    </div>
    <div className='App-bottom'>
      <div className='App-bottom-content'>
        <h5 className='App-bottom-link'><a className='App-bottom-link-text link' target='_blank' href='https://github.com/alexcushing'>GitHub</a></h5>
        <h5 className='App-bottom-link'><a className='App-bottom-link-text link' target='_blank' href='https://linkedin.com/in/alexandercushing'>LinkedIn</a></h5>
        <h5 className='App-bottom-text'>alexandercushing@gmail.com</h5>
      </div>
    </div>
  </>
);

export default App;
