import { useEffect } from 'react';

export const Message = () => {
  useEffect(() => {
    console.log('Message mounted');

    const onMouseMove = ({ x, y }: MouseEvent) => {
      const cords = { x, y };
      console.log(cords);
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      console.log('message unmounted');
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>User exists</h3>
    </>
  );
};
