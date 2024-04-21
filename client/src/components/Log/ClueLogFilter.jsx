import './ClueLogFilter.css';
import Form from "react-bootstrap/Form";
import { useDispatch } from 'react-redux';

export default function ClueLogFilter() {
  return (
    <Form className="clue-log-filter" value="All">
      <div className="mb-3">
        <Form.Check
          inline
          label="All"
          name="group1"
          type="radio"
          id={`inline-radio-1`}
        />
        <Form.Check
          inline
          label="Broadcasts Only"
          name="group1"
          type="radio"
          id={`inline-radio-2`}
        />
        <Form.Check
          inline
          label="Commons Only"
          name="group1"
          type="radio"
          id={`inline-radio-3`}
        />
      </div>
    </Form>
  );
}
