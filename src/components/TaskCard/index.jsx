import { Card, Stack, Row, Typography, Button } from '../common';
import { STATUS_MODIFIER } from '../../constants';
import { formatDate, isOverdue } from '../../helpers';
import './index.css';

const TaskCard = ({ task, onEdit, onDelete }) => {
  const modifier = STATUS_MODIFIER[task.status] || 'pending';
  const overdue = isOverdue(task);

  return (
    <Card border borderRadius={0.75} padding="18px" className="task-card">
      <Stack gap="10px">
        <Row justifyContent="space-between" alignItems="flex-start" gap="12px">
          <Typography variant="headline-sm" className="task-card-title">
            {task.title}
          </Typography>
          <span className={`task-badge task-badge-${modifier}`}>{task.status}</span>
        </Row>

        {task.description && (
          <Typography variant="body-md" color="var(--color-on-surface-variant)">
            {task.description}
          </Typography>
        )}

        <Row justifyContent="space-between" alignItems="center" gap="12px" margin="4px 0 0">
          <Typography
            variant="label-sm"
            className={overdue ? 'task-card-due task-card-due-overdue' : 'task-card-due'}
          >
            {overdue ? 'Overdue · ' : 'Due '}
            {formatDate(task.dueDate)}
          </Typography>

          <Row gap="8px">
            <Button size="sm" variant="secondary" onClick={() => onEdit(task)}>
              Edit
            </Button>
            <Button size="sm" variant="ghost" onClick={() => onDelete(task.id)}>
              Delete
            </Button>
          </Row>
        </Row>
      </Stack>
    </Card>
  );
};

export default TaskCard;
