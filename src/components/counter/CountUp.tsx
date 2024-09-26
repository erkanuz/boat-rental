import useCountUp from '../../hooks/useCountUp';

interface CountUpProps {
  start: number;
  end: number;
  duration: number;
}

export const CountUp = ({ start, end, duration }: CountUpProps) => {
  const count = useCountUp({ start, end, duration });

  return <span>{count}</span>;
};