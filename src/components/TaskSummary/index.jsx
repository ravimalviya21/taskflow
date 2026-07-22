import { useSelector } from 'react-redux';
import { Card, Stack, Typography } from '../common';
import { selectTaskCounts } from '../../store/tasksSlice';
import { TASK_STATUS } from '../../constants';
import './index.css';

const TaskSummary = () => {
  const counts = useSelector(selectTaskCounts);

  const cards = [
    { key: 'total', label: 'Total tasks', value: counts.total, modifier: 'total' },
    { key: TASK_STATUS.PENDING, label: 'Pending', value: counts[TASK_STATUS.PENDING], modifier: 'pending' },
    { key: TASK_STATUS.IN_PROGRESS, label: 'In progress', value: counts[TASK_STATUS.IN_PROGRESS], modifier: 'in-progress' },
    { key: TASK_STATUS.COMPLETED, label: 'Completed', value: counts[TASK_STATUS.COMPLETED], modifier: 'completed' },
  ];

  return (
    <div className="task-summary">
      {cards.map((card) => (
        <Card
          key={card.key}
          borderRadius={0.75}
          padding="16px 18px"
          className={`summary-card summary-card-${card.modifier}`}
        >
          <Stack gap="4px">
            <Typography variant="headline-lg">{card.value}</Typography>
            <Typography variant="label-md" color="var(--color-on-surface-variant)">
              {card.label}
            </Typography>
          </Stack>
        </Card>
      ))}
    </div>
  );
};

export default TaskSummary;
