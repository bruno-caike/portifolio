import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  differentials = [
    'Comunicativo', 'Trabalho em equipe', 'Princípios éticos', 'Confiança', 'Atitude positiva', 'Proatividade', 'Flexibilidade'
  ];
  hards = [
    'HTML - 3 anos', 'CSS - 3 anos', 'SASS - 2,5 anos', 'Bootstrap - 2 anos', 'Tailwind - 1,5 anos', 'Javascript - 3 anos', 'ReactJS - 1 ano', 'PHP - 3 anos', 'Laravel - 3 anos', 'Lumen - 3 anos', "Wordpress - 6 meses", 'SQL - 3 anos', 'MYSQL - 3 anos', 'GIT - 3 anos', 'GitLab - 3 anos', 'GitHub - 3 anos'
  ];
  courses = [
    'Codeboost', 'Scrum Básico', 'Git e GitHub', 'Básico Power BI', 'Laravel Developer', 'FullStack PHP Developer', 'Javascript Origamid', 'Anáise e Desenvolvimento de Sistemas'
  ];
  techs = [
    'HTML', 'CSS', 'SASS', 'Bootstrap', 'Javascript', 'PHP', 'Laravel', 'Lumen', "MYSQL"
  ];
  experiences = [
    {title: 'Desenvolvedor Web Junior na Dois Comunicação (Julho 2020 - até o momento)', content: "Suporte aos usuários finais, Desenvolvimento e manutenção de websites, sistemas e aplicativos mobile."},
    {title: 'Estagio em desenvolvimento Web na Dois Comunicação (Janeiro 2020 - Junho 2020)', content: "Desenvolvimento e manutenção de websites e sistemas."},
    {title: 'Auxiliar de Suporte na Zember Tecnologia (Agosto 2019 - Novembro 2019)', content: "Auxiliar de produção, Suporte aos usuários finais e Conversão de banco de dados."},
  ]
}
