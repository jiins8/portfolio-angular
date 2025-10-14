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
  const icon = document.querySelector('.menu-icon') as HTMLElement;
  if (icon) {
    icon.classList.add('ng-animating'); // activa animación
    setTimeout(() => {
      this.menuActive = !this.menuActive; // cambia el icono
      icon.classList.remove('ng-animating'); // termina animación
    }, 150); // tiempo de la animación
  } else {
    this.menuActive = !this.menuActive;
  }
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
