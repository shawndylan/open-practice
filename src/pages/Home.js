import React from 'react';
import "./home.css";
import { Link } from 'react-router-dom';
import AtlasIcon from '../svg/atlas-icon';
import IndexIcon from '../svg/index-icon';
import ManualIcon from '../svg/manual-icon';
import { IconArrowsMinimize } from '@tabler/icons';


function Home() {

  return(

    <div>
      <div className="section-A">
        <h2>A database for discovering alternative models of architectural practice.</h2><IconArrowsMinimize/>
      </div>

      <div className="section-B">

        <div className="section-B1">
          <h1>Shifting Practice</h1>
          <br></br>
          <h3>A Profession In Crisis</h3>
          <br></br>
          <p>The architectural profession's relationship to the broader social and political discourse is eroding. In the last decade or so, we have seen drastic shifts in architectural practice as it relates to global events such as the 2008 financial crisis, and more recently the Covid-19 pandemic. Traditional practice structures based on neo-liberal global markets fail to meet the socio-political challenges of the 21st-century. How can architects rectify relevance in contributing to social issues?</p>
        </div>

        <div className="section-B2">

          <svg id="exclamation" data-name="Component 34 – 1" xmlns="http://www.w3.org/2000/svg" width="85.404" height="382.999" viewBox="0 0 85.404 382.999">
            <g id="hatch_black" data-name="hatch black">
              <rect id="Rectangle_107" data-name="Rectangle 107" width="85.404" height="254.893"/>
              <rect id="Rectangle_108" data-name="Rectangle 108" width="85.404" height="85.404" transform="translate(0 297.595)"/>
            </g>
          </svg>

        </div>
      </div>

      <div className="section-C">
        <div className="section-C1">
          <h1>New Modes of Practice</h1>
          <br></br>
          <h3>Collaborative Models</h3>
          <br></br>
          <p>New models for architectural practice have emerged as a result of changing economic conditions. These practices have taken on structures which rely on horizontal collaboration between people and groups rather than traditionally vertically-managed office structures. Collectives, cooperatives, platforms, and networks are some of the examples that exist.</p>
        </div>
        <div className="section-C2">

        </div>
      </div>

      <div className="section-D">
       <div className="section-D1">
          <h1>Empowering New Modes of Practice</h1>
          <br></br>
          <h3>New Avenues for Professional Practice</h3>
          <br></br>
          <p>The discourse of professional practice is often delivered through the lens of corporate, large-scale firms which results in a one-dimensional approach to architectural practice. New types of practices including: collectives, cooperatives, platforms and networks demand new modes of professional practice.</p>
        </div>
        <div className="section-D2">
        </div>
      </div>

      <div className="section-E">
       <h1>Three Levels of Exploration:</h1>
       <br></br>

       <div className="section-E-wrapper">

         <div className="section-E1">
         <AtlasIcon/>
           <Link to="/Atlas"><h2>Atlas</h2></Link>
            <br></br>

            <p>The atlas disseminates 'big-picture' trends, patterns, and themes across multiple practices in order to understand relationships at a high-level overview.</p>
          </div>

         <div className="section-E2">
         <IndexIcon/>
            <Link to="/Index"><h2>Index</h2></Link>
            <br></br> 
            <p>The index is a collection of individual practices for exploration. The index can be viewed by level, and includes: practices, projects, and tools, each of which can be filtered, sorted and compared.</p>
         </div>

           <div className="section-E3">
           <ManualIcon/>
            <Link to="/Manual"><h2>Manual</h2></Link>
            <br></br>
            <p>The manual operates as a 'manual of practice' which defines and summarizes different categorizations of practices. The manual can be used as a way to understand the concepts and frameworks which can be used to develop new forms of practice.</p>
           </div>

         </div>

      </div>

    </div>

    )

}


export default Home;
