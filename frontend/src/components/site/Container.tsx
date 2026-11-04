import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => (
  <div className={cn("mx-auto w-full max-w-[1160px] px-5 sm:px-6 lg:px-8", className)}>
    {children}
  </div>
);

export default Container;
