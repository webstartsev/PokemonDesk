import React from 'react';

type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  tag: HeadingTypes;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, tag: Tag, className }) => (
  <Tag className={className}>{children}</Tag>
);

export default Heading;
