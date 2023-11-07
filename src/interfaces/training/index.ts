import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface TrainingInterface {
  id?: string;
  training_name: string;
  description: string;
  start_date: any;
  end_date: any;
  location: string;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface TrainingGetQueryInterface extends GetQueryInterface {
  id?: string;
  training_name?: string;
  description?: string;
  location?: string;
  user_id?: string;
  company_id?: string;
}
