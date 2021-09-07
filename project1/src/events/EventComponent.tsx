import { ChangeEvent, DragEvent, FC } from 'react';

const EventComponent: FC = () => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    console.log('im being dragged!');
  };

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag me!
      </div>
    </div>
  );
};

export default EventComponent;
