import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  menuActive = false;
  activeSection = 'home';
  isDarkMode = false;

  
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('section[id]');
    let current = 'home';

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        current = section.id;
      }
    });

    this.activeSection = current;
  }
}
