import React, { useEffect, useState } from 'react';
import { IValue, IValidateResults } from '@lib/types';
import { RequestFormUI } from './request-form-ui';
import { validator } from '@utils/validator';
import { useDispatch } from '@services/store';
import { sendRequest } from '@services/slices/thunks';
import { useLocation, useNavigate } from 'react-router-dom';

export const RequestForm: React.FC = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({} as IValidateResults);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const onChange = (value: IValue) => {
    setValues({
      ...values,
      [value.name]: value.value,
    });
  };
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const errors = validator(values);
    if (Object.keys(errors).length > 0) {
      setErrors({
        ...errors,
      });
      return false;
    } else {
      dispatch(sendRequest(values))
        .then(() => {
          navigate('/success', {
            state: {
              background: location.state?.background || location,
            },
            replace: true,
          });
        })
        .catch((error) => {
          // TODO: handle error
          console.error('error', error);
        });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const errors = validator(values);
      setErrors({
        ...errors,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);
  return (
    <RequestFormUI
      values={values}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};
