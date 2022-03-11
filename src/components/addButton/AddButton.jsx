import './scss/AddButton.scss';
import { connect } from '../../connect';
import { showAddModal } from '../../store/modals/Actions';

const AddButton = ({ openDataModal }) => {
  return (
    <div className='position-fixed bottom-0 end-0 m-5'>
      <button
        className='
          btn
          btn-secondary
          rounded-circle
          add-button
          d-flex
          justify-content-center
          align-items-center'
        onClick={openDataModal}
      >
        <i className='bi bi-plus-lg'></i>
      </button>
    </div>
  );
};

export default connect(null, (dispatch) => ({
  openDataModal: () => dispatch(showAddModal()),
}))(AddButton);
