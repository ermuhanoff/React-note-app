import { useState } from 'react';

import { constants } from './constants';
import './scss/DataViewModal.scss';

const DataViewModal = ({ note, isFetching, onSubmit, submitText }) => {
  const [titleValue, setTitleValue] = useState(note?.title || '');
  const [descriptionValue, setDescriptionValue] = useState(
    note?.description || ''
  );
  const [colorValue, setColorValue] = useState(note?.color || '');
  const [errors, setErrors] = useState({});

  const onSubmitClick = () => {
    const { both, title } = constants.errors;

    if (titleValue.trim() === '' && descriptionValue.trim() === '')
      setErrors({ all: both.empty });
    else if (
      titleValue.trim() !== '' &&
      titleValue.length > title.maxLength.value
    )
      setErrors({ title: title.maxLength.message });
    else {
      setErrors({});

      onSubmit({ ...note, title: titleValue, description: descriptionValue, color: colorValue});
    }
  };

  return (
    <>
      <div className='modal-body'>
        <div>
          <div className='col mb-3'>
            <input
              className={`form-control fs-4 ${(errors?.title || errors?.all) && 'is-invalid'}`}
              type='text'
              placeholder={constants.inputsPlaceholder.title}
              value={titleValue}
              disabled={isFetching}
              onChange={(event) => setTitleValue(event.target.value)}
            />
            <div className='invalid-feedback'>
              {errors?.all || errors?.title}
            </div>
          </div>
          <div className='col'>
            <textarea
              className={`form-control ${errors?.all && 'is-invalid'}`}
              rows='5'
              placeholder={constants.inputsPlaceholder.text}
              value={descriptionValue}
              disabled={isFetching}
              onChange={(event) => setDescriptionValue(event.target.value)}
            ></textarea>
            <div className='invalid-feedback'>{errors?.all}</div>
          </div>
          <div className='col mt-3'>
            <label className='form-label'>
              <span>{constants.labels.color}</span>
              <input
                type='color'
                className='form-control form-control-color'
                value={colorValue || '#ffffff'}
                title={constants.inputsPlaceholder.color}
                onChange={(event) => setColorValue(event.target.value)}
              />
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <button className='btn btn-primary' onClick={onSubmitClick}>
          {submitText}
        </button>
      </div>
    </>
  );
};

export default DataViewModal;
