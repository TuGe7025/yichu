import React from 'react';

export default (props) => {
	
	const { prolist } = props;
	
	return (
		<ul>
			{
				prolist.map((item) => (
					<li key = {item.id} > 
						<img src={item.images.small} alt={item.images.alt}></img>
						<h3>{ item.title }</h3>
					</li>
				))
			}
		</ul>
	)

}