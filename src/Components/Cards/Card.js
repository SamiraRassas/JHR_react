import React from 'react';
import house1 from '../../photos/house1.jpg';
import './Card.css'


const card = () => {
	return(
		<>
        <div className='col'>
		<div className=' 
        bg-washed-green dib card1 br3 pa3  grow bw2 shadow-5' >
		<img className='house1' src={house1} alt='house'/>
        {/* <img  src='../photos/house1.jpg' alt='house'/> */}
			<div className='tc'>
				<h2> House 1</h2>
				<p> House 1</p>
			</div>
		</div>
        <div className=' 
        bg-washed-green dib br3 card2 pa3  grow bw2 shadow-5' >
		<img className='house1' src={house1} alt='house'/>
        {/* <img  src='../photos/house1.jpg' alt='house'/> */}
			<div className='tc'>
				<h2> House 2</h2>
				<p> House 2</p>
			</div>
		</div>
        </div>
 </>
		);
}

export default card 