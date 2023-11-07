import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface RecruitmentInterface {
  id?: string;
  job_title: string;
  job_description: string;
  requirements: string;
  salary_range: string;
  application_deadline: any;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface RecruitmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  job_title?: string;
  job_description?: string;
  requirements?: string;
  salary_range?: string;
  user_id?: string;
  company_id?: string;
}
