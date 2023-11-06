import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ToolbarModule],
  template: `<div
    class="h-30rem w-100%"
    style="background-color: #009879;"
  ></div>`,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}