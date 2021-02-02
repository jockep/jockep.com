import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Home() {
	return (
		<>
			<div id="home">
				<h1>Work in progress</h1>

				<div id="socialicons">
					<a href="https://www.facebook.com/joacim91/">
						<FontAwesomeIcon style={{ color: 'blue' }} className='socialicon' icon={['fab', 'facebook-square']} />
					</a>
					<a href="https://twitter.com/jockefire">
						<FontAwesomeIcon style={{ color: '#1DA1F2' }} className='socialicon' icon={['fab', 'twitter']} />
					</a>
					<a href="https://github.com/jockep">
						<FontAwesomeIcon style={{ color: '#333333' }} className='socialicon' icon={['fab', 'github']} />
					</a>
				</div>

			</div>
		</>
	);
}
