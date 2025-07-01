'use client'
import { motion, MotionProps } from 'framer-motion';
import { ElementType, ReactNode } from 'react';

interface MotionWrapperProps extends MotionProps {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
}

const MotionWrapper = ({ as: Component = 'div', children, className, ...rest }: MotionWrapperProps) => {
  const MotionTag = motion(Component);
  return (
    <MotionTag className={className} {...rest}>
      {children}
    </MotionTag>
  );
};

export default MotionWrapper;
