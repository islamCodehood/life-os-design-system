import type { ReactNode } from 'react';
import { JobCard, type JobCardProps } from '../JobCard';

export type JobWorkflowStepState = 'complete' | 'current' | 'future';

export interface JobWorkflowStep {
  id: string;
  label: string;
  detail?: ReactNode;
  state: JobWorkflowStepState;
}

export interface JobWorkflowProps {
  job: JobCardProps;
  history: JobWorkflowStep[];
  timelineLabel?: string;
}

/**
 * Visualizes workflow history supplied by the Job domain.
 * It does not infer transitions or payment eligibility.
 */
export function JobWorkflow({
  job,
  history,
  timelineLabel = 'Job progress',
}: JobWorkflowProps) {
  return (
    <section className="lo-compound lo-job-workflow">
      <JobCard {...job} />
      <ol className="lo-job-workflow__timeline" aria-label={timelineLabel}>
        {history.map((step) => (
          <li key={step.id} className="lo-job-workflow__step" data-state={step.state}>
            <span className="lo-job-workflow__marker" aria-hidden="true" />
            <div>
              <strong>{step.label}</strong>
              {step.detail && <div className="lo-job-workflow__detail">{step.detail}</div>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
