import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.css'],
})
export class SkillsPageComponent {
  iconsPath = 'assets/icons/';
  frontend = [
    { file: 'html.svg', title: 'HTML' },
    { file: 'css.svg', title: 'CSS' },
    { file: 'js.svg', title: 'JavaScript' },
    { file: 'ts.svg', title: 'TypeScript' },
    { file: 'angular.svg', title: 'Angular' },
  ];
  backend = [
    { file: 'csharp.svg', title: 'C#' },
    { file: 'netcore.svg', title: '.NET Core' },
    { file: 'nodejs.svg', title: 'NodeJS' },
    { file: 'mysql.svg', title: '.MySQL' },
    { file: 'sqlserver.svg', title: 'SQL Server' },
    { file: 'mongodb.svg', title: 'MongoDB' },
  ];
  others = [
    { file: 'linux.svg', title: 'Linux' },
    { file: 'python.svg', title: 'Python' },
    { file: 'git.svg', title: 'Git' },
    { file: 'github.svg', title: 'Github' },
    { file: 'azure.svg', title: 'Azure DevOps' },
    { file: 'vscode.svg', title: 'Visual Studio Code' },
    { file: 'docker.svg', title: 'Docker' },
    { file: 'nginx.svg', title: 'Nginx' },
    { file: 'apache.svg', title: 'Apache' },
    { file: 'xd.svg', title: 'Adobe XD' },
    { file: 'photoshop.svg', title: 'Adobe Photoshop' },
    { file: 'illustrator.svg', title: 'Adobe Illustrator' },
  ];
}
