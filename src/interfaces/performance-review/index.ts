import { EmployeeInterface } from 'interfaces/employee';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceReviewInterface {
  id?: string;
  employee_id: string;
  review_date: any;
  reviewer: string;
  performance_rating: number;
  comments?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  user?: UserInterface;
  _count?: {};
}

export interface PerformanceReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
  reviewer?: string;
  comments?: string;
  user_id?: string;
}
