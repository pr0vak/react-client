import { Spinner as BootstrapSpinner } from "react-bootstrap";

export function Spinner() {
	return (
		<div className="d-flex justify-content-center py-4">
			<BootstrapSpinner animation="border" role="status" />
		</div>
	);
}
