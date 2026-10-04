import type { ReactNode } from 'react';
import { AttentionCard } from '../../components/AttentionCard';
import {
  GraduationMilestone,
  type GraduationEvidenceItem,
} from '../GraduationMilestone';

export interface GraduationEvidencePanelProps {
  title: string;
  message: ReactNode;
  evidence: GraduationEvidenceItem[];
  coverageTitle?: string;
  coverageDescription?: ReactNode;
  primaryAction?: { label: string; onClick?: () => void };
  secondaryAction?: { label: string; onClick?: () => void };
}

/**
 * Parent decision pattern for graduation. Evidence is transparent and supplied by the application.
 * Low data coverage is communicated as uncertainty, never as poor performance.
 */
export function GraduationEvidencePanel({
  title,
  message,
  evidence,
  coverageTitle,
  coverageDescription,
  primaryAction,
  secondaryAction,
}: GraduationEvidencePanelProps) {
  return (
    <section className="lo-compound lo-graduation-evidence">
      <GraduationMilestone
        mode="suggestion"
        title={title}
        message={message}
        evidence={evidence}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
      />
      {coverageTitle && (
        <AttentionCard
          eyebrow="Data coverage"
          title={coverageTitle}
          description={coverageDescription}
        />
      )}
    </section>
  );
}
