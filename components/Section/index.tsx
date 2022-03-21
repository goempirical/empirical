import clsx from 'clsx';

import SectionTitle from '@components/SectionTitle';

import { ISectionProps } from './types';

function Section({ className, children, title }: ISectionProps) {
  return (
    <section className={clsx('flex justify-center w-full py-20 px-4', className)}>
      <div className="flex flex-col lg:gap-30 gap-20 max-w-u1280 w-full items-center">
        {title && (
          <SectionTitle>{title}</SectionTitle>
        )}
        {children}
      </div>
    </section>
  );
}

Section.defaultProps = {
  className: '',
};

export default Section;
