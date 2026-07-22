import { useState } from 'react';
import { Input, Button, Stack, Row, Typography } from '../common';
import { TASK_STATUS, TASK_STATUS_OPTIONS } from '../../constants';
import { validateTask } from '../../helpers';
import './index.css';

const emptyForm = {
  title: '',
  description: '',
  status: TASK_STATUS.PENDING,
  dueDate: '',
};

const TaskForm = ({ initialValues, onSubmit, onCancel, submitLabel = 'Save task' }) => {
  const [values, setValues] = useState({ ...emptyForm, ...initialValues });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (event) => {
    const { value } = event.target;
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateTask(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    onSubmit({
      ...values,
      title: values.title.trim(),
      description: values.description.trim(),
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate>
      <Stack gap="18px">
        <Input
          label="Title *"
          placeholder="e.g. Prepare release notes"
          value={values.title}
          onChange={handleChange('title')}
          error={errors.title}
        />

        <div className="input">
          <Typography as="label" variant="label-md" className="input-label" htmlFor="task-description">
            Description
          </Typography>
          <textarea
            id="task-description"
            className="input-field task-form-textarea"
            rows={3}
            placeholder="Add more detail (optional)"
            value={values.description}
            onChange={handleChange('description')}
          />
        </div>

        <div className="input">
          <Typography as="label" variant="label-md" className="input-label" htmlFor="task-status">
            Status
          </Typography>
          <select
            id="task-status"
            className="input-field task-form-select"
            value={values.status}
            onChange={handleChange('status')}
          >
            {TASK_STATUS_OPTIONS.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <Input
          label="Due date *"
          type="date"
          value={values.dueDate}
          onChange={handleChange('dueDate')}
          error={errors.dueDate}
        />

        <Row justifyContent="flex-end" gap="12px" margin="4px 0 0">
          <Button type="button" variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            {submitLabel}
          </Button>
        </Row>
      </Stack>
    </form>
  );
};

export default TaskForm;
