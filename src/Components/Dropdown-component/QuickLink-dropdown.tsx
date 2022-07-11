import Dropdown from 'react-bootstrap/Dropdown'

function QuickLinkdropdown() {
 
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
			Quick Links
		</Dropdown.Toggle>
		<Dropdown.Menu>
		<div style={{color:'gray',padding:20}}><p>Recent</p></div>
		<Dropdown.Item href="#">
			Payment
		</Dropdown.Item>
		<Dropdown.Item href="#">
			Invoice
		</Dropdown.Item>
		<Dropdown.Item href="#">
			Subscription
		</Dropdown.Item>
		<div style={{color:'gray',padding:20}}><p>All links</p></div>
		<Dropdown.Item href="#">
			Payment
		</Dropdown.Item>
		<Dropdown.Item href="#">
			invoice
		</Dropdown.Item>
		<Dropdown.Item href="#">
			Transactions
		</Dropdown.Item>
		<Dropdown.Item href="#">
			Payment Links
		</Dropdown.Item>
		<Dropdown.Item href="#">
			Fraud and risks
		</Dropdown.Item>
		<Dropdown.Item href="#">
			Subscription
		</Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown>
	</div>
);
}

   
export default QuickLinkdropdown;
