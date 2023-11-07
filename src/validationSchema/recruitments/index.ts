import * as yup from 'yup';

export const recruitmentValidationSchema = yup.object().shape({
  job_title: yup.string().required(),
  job_description: yup.string().required(),
  requirements: yup.string().required(),
  salary_range: yup.string().required(),
  application_deadline: yup.date().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
