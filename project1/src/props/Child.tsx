import { FC } from 'react';

interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child: FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      <p>Color: {color}</p>
      <button onClick={onClick}>Click me</button>
      <p>{children}</p>
    </div>
  );
};
