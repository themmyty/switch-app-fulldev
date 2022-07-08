import Dropdown from 'react-bootstrap/Dropdown'

function dropdown() {
 
	interface SearchBarProps {
		term: string;
		optionalArgument?: string;
	  }
	  
	  interface title{
		something:string;
	  }

return (
	<div style={{ display: 'block',
				padding: 30 }}>
	
	<Dropdown>
		<Dropdown.Toggle variant="light">
		Account
		</Dropdown.Toggle>
		<Dropdown.Menu>
		<Dropdown.Item href="#">
			account status
		</Dropdown.Item>
		<Dropdown.Item href="#">
			Details
		</Dropdown.Item>
		<Dropdown.Item href="#">
			payments
		</Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown>
	</div>
);
}

   
export default dropdown
