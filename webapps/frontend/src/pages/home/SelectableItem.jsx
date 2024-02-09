import { Button } from "react-bootstrap";

const SelectableItem = ({ text }) => {
  return (
    <div className="d-grid gap-2">
      <Button variant="outline-dark" size="lg" className="mb-3">
        {text}
      </Button>
    </div>
  );
};

export default SelectableItem;
