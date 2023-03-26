import Modal from '../../shared/components/Modal';

function AddModal({ onAdd, onClose }: IProps) {
  return (
    <Modal title='Add todo' onClose={onClose}>
      <div>ADD TODO FORM</div>
    </Modal>
  );
}

export default AddModal;

interface IProps {
  readonly onAdd: () => void;
  readonly onClose: () => void;
}
