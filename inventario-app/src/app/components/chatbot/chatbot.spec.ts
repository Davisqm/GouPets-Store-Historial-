import { ComponentFixture, TestBed } from '@angular/core/testing';
// Cambiamos { Chatbot } por { ChatbotComponent }
import { ChatbotComponent } from './chatbot';

describe('ChatbotComponent', () => {
  let component: ChatbotComponent;
  let fixture: ComponentFixture<ChatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Aquí también debe decir ChatbotComponent
      imports: [ChatbotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Importante para inicializar el componente
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});