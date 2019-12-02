export class PersonalData {
  name: string;
  title: string;
  email: string;
  likedin: string;
  img: string;
  skills: [];
  education: [Courses];
  interests: string;
}

export class Courses {
  title: string;
  duration: string;
  description: [];
}

export class EmpresaData {
  name: string;
  date: string;
  url: string;
  description: [];
  examples: [EmpresaDataExamples];
}

export class EmpresaDataExamples {
  name: string;
  description: string;
  skills: string;
  image: string;
  link: string;
}
