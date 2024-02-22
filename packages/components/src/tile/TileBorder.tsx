'use client';

import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useMouse } from '@uidotdev/usehooks';

export const TileBorder = () => {
  const [angle, setAngle] = useState<string>('0deg');
  const [{ elementX, elementY }, ref] = useMouse<HTMLDivElement>();

  useEffect(() => {
    if (ref?.current) {
      const { clientHeight, clientWidth } = ref.current;
      const angleRadians = Math.atan2(
        elementY - clientHeight / 2,
        elementX - clientWidth / 2,
      );
      const angleDeg = (angleRadians * 180) / Math.PI - 90;
      setAngle(`${angleDeg}deg`);
    }
  }, [ref, elementX, elementY]);
  return (
    <div
      ref={ref}
      className={styles.tileBorder}
      // @ts-expect-error
      style={{ '--angle': angle }}
    />
  );
};
