import { workflow } from "@/lib/content";

type WorkflowFlowProps = {
  steps?: string[];
};

const WorkflowFlow = ({ steps = workflow }: WorkflowFlowProps) => (
  <div>
    {/* Desktop: one horizontal sequence */}
    <ol className="hidden md:grid" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
      {steps.map((step, index) => (
        <li key={step} className="relative pr-3">
          <div className="flex items-center">
            <span className="relative z-10 flex h-2.5 w-2.5 shrink-0 rounded-full border-2 border-brand-teal bg-background" />
            {index < steps.length - 1 && <span className="h-px flex-1 bg-border" />}
          </div>
          <p className="mt-3 text-[12px] font-semibold leading-snug text-foreground">{step}</p>
        </li>
      ))}
    </ol>

    {/* Mobile: vertical sequence */}
    <ol className="md:hidden">
      {steps.map((step, index) => (
        <li key={step} className="relative flex gap-4 pb-4 last:pb-0">
          <div className="flex flex-col items-center">
            <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-brand-teal bg-background" />
            {index < steps.length - 1 && <span className="mt-1 w-px flex-1 bg-border" />}
          </div>
          <p className="-mt-0.5 pb-3 text-[13.5px] font-medium text-foreground">{step}</p>
        </li>
      ))}
    </ol>
  </div>
);

export default WorkflowFlow;
