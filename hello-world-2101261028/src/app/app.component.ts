import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items = [
    { 
      title: "Personal Information", 
      content: "I'm a 21-year-old Web Developer studying at PU Paisii Hilendarski, deeply passionate about React and other cutting-edge web technologies.", 
      visible: false 
    },
    { 
      title: "Hobbies", 
      content: "Reading books (old classics), watching movies (such as Drive, starring Ryan Gosling), going to the gym, creating websites.", 
      visible: false 
    },
    { 
      title: "Favorite Content Creator", 
      content: "Blazin' Kickin' Chiken'", 
      link: "https://www.youtube.com/@BKCplaysPokemon",
      visible: false 
    },
    { 
      title: "Channel Information", 
      content: "Clash Royal, Andy Studio and Мъци reactions, daily BLOGS", 
      visible: false 
    },
    {
      title: "Valuation",
      content: "69 leva",
      visible: false
    }
  ];

  public name = "Hristo Zagorliev";

  public toggleItem(index: number): void {
    this.items.forEach((item, i) => {
      if (i === index) {
        item.visible = !item.visible;
      } else {
          item.visible = false;
      }
    });
  }
}
