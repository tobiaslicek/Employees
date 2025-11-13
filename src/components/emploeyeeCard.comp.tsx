import type { FunctionComponent } from 'react';

import styles from './employeeCard.scss';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  company: {
    name: string;
    title: string;
  };
}

export type EmployeeCardProps = {
  user: User;
};

export const EmployeeCard: FunctionComponent<EmployeeCardProps> = ({
  user,
}) => {
  const { firstName, lastName, company } = user;

  return <div className={styles.abcd}></div>;
};
