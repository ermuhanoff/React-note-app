const ConfirmModal = ({ onSubmit, question, submitText }) => {
  return (
    <>
      <div className='modal-body'>{question}</div>
      <div className='modal-footer'>
        <button className='btn btn-primary' onClick={onSubmit}>
          {submitText}
        </button>
      </div>
    </>
  );
};

export default ConfirmModal;
