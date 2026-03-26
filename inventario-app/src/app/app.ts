import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatbotComponent } from "./components/chatbot/chatbot";

@Component({
  selector: 'app-root',
  imports: [RouterModule, ChatbotComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('inventario-app');
}
