import './scss/Modal.scss';
import { connect } from '../../../connect';
import { hideModalAction } from '../../../store/modals/Actions';
import LoadingSpinner from '../../loadingSpinner';

const Modal = ({ isOpened, isFetching, modalData, hideModal }) => {
  return (
    <>
      {isOpened && (
        <div className='modal modal__overlay modal--showed' tabIndex='-1'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>{modalData.title}</h5>
                <button
                  type='button'
                  className='btn-close'
                  onClick={hideModal}
                  disabled={isFetching}
                />
              </div>
              {isFetching ? <LoadingSpinner height={200}/> : modalData.content}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default connect(
  (state) => ({
    isOpened: state.modals.isOpened,
    isFetching: state.modals.isFetching,
    modalData: state.modals.modalData,
  }),
  (dispatch) => ({
    hideModal: () => dispatch(hideModalAction()),
  })
)(Modal);
