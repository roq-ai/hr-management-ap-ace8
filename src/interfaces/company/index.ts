import { EmployeeInterface } from 'interfaces/employee';
import { RecruitmentInterface } from 'interfaces/recruitment';
import { TrainingInterface } from 'interfaces/training';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  website?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  employee?: EmployeeInterface[];
  recruitment?: RecruitmentInterface[];
  training?: TrainingInterface[];

  _count?: {
    employee?: number;
    recruitment?: number;
    training?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  website?: string;
  name?: string;
  tenant_id?: string;
}
