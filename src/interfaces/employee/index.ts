import { PerformanceReviewInterface } from 'interfaces/performance-review';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  first_name: string;
  last_name: string;
  position: string;
  date_of_birth: any;
  start_date: any;
  end_date?: any;
  salary: number;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  performance_review?: PerformanceReviewInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    performance_review?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  position?: string;
  user_id?: string;
  company_id?: string;
}
