import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  myFocus =
  {
    web:"Web Design",
    UIX:"UI/UX Design",
    Responsive:"Responsive Design",
    Mobile:"Mobile App Design"
  };
  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}