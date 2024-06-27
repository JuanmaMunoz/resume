import { TypeAccordionItem } from './enums';

export interface ISkill {
  name: string;
  coverage: number;
}

export interface IDegree {
  name: string;
  school: string;
  startDate: number;
  endDate: number;
}

export interface IProject {
  name: string;
  description: string;
  technologies: string[];
}

export interface IExperience {
  name: string;
  company: string;
  imageCompany: string;
  startDate: number;
  endDate: number;
  description: string;
  proyects: IProject[];
}

export interface IInfoUser {
  name: string;
  age: number;
  city: string;
  email: string;
  position: string;
  positionDescription?: string;
  skills?: ISkill[];
  hobbies?: string[];
  businessSkills?: ISkill[];
  languages?: ISkill[];
  professionalGrowth?: IProfessionalGrowth;
  degrees?: IDegree[];
  courses?: IDegree[];
  experience?: IExperience[];
}

export interface IMenuButton {
  text: string;
  url: string;
  icon: string;
}

export interface IAccordionItem {
  type: TypeAccordionItem;
  icon: string;
}

export interface IGrowth {
  year: number;
  values: number[];
}

export interface IProfessionalGrowth {
  names: string[];
  growth: IGrowth[];
}

export interface IDataset {
  label: string;
  data: number[];
  borderWidth: number;
  backgroundColor: string;
  borderColor: string;
}

export interface ICharData {
  labels: string[];
  datasets: IDataset[];
}
