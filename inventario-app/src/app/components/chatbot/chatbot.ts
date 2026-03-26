import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Mensaje {
  texto: string;
  esUsuario: boolean;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrls: ['./chatbot.css']
})
export class ChatbotComponent {

  abierto = false;
  mensajes: Mensaje[] = [];
  textoUsuario = '';

  respuestas: { [key: string]: string } = {
  'Hola': '¡Hola! 😊 Bienvenido. Puedo ayudarte con productos, precios y recomendaciones para tu mascota.',
  'Adios': '¡Gracias por visitarnos! 🐾 Si necesitas algo más, aquí estaré. ¡Que tengas un excelente día!',
  'agility gold perro': 'Agility Gold para perros. Nutrición premium que mejora energía y digestión.',
  'agility gold cachorro': 'Agility Gold Cachorros. Favorece un crecimiento saludable.',
  'agility gold gato': 'Agility Gold Gatos. Mejora pelaje y sistema digestivo.',
  'agility maintenance': 'Agility Maintenance. Ideal para perros adultos.',
  'agility senior': 'Agility Senior. Apoya articulaciones y vitalidad.',

  'pro plan adulto': 'Pro Plan Adulto. Nutrición avanzada con proteínas de alta calidad.',
  'pro plan cachorro': 'Pro Plan Cachorro. Refuerza defensas y desarrollo.',
  'pro plan sensitive': 'Pro Plan Sensitive. Ideal para piel y estómago sensibles.',
  'pro plan gato': 'Pro Plan Gato Adulto. Control de bolas de pelo.',

  'royal canin perro': 'Royal Canin Perro. Fórmula específica por raza.',
  'royal canin gato': 'Royal Canin Gato. Salud urinaria y digestiva.',
  'royal canin cachorro': 'Royal Canin Puppy. Crecimiento balanceado.',
  'royal canin sensitive': 'Royal Canin Sensitive. Alta tolerancia digestiva.',

  'dog chow adulto': 'Dog Chow Adulto. Energía y nutrición diaria.',
  'dog chow cachorro': 'Dog Chow Cachorros. Refuerza defensas.',
  'cat chow': 'Cat Chow. Nutrición completa para gatos.',

  'nexgard': 'NexGard. Tableta antipulgas y garrapatas de acción rápida.',
  'nexgard spectra': 'NexGard Spectra. Protege contra parásitos internos y externos.',
  'bravecto': 'Bravecto. Protección antipulgas hasta por 12 semanas.',
  'simparica': 'Simparica. Control eficaz de pulgas y garrapatas.',
  'credelyo': 'Credelio. Antiparasitario oral mensual.',
  'advocate': 'Advocate. Control de parásitos internos y externos.',
  'advantix': 'Advantix. Protección externa para perros.',
  'frontline': 'Frontline. Eliminación de pulgas y garrapatas.',
  'revolution': 'Revolution. Protección completa mensual.',

  'condrovet': 'Condrovet. Suplemento para salud articular.',
  'canisan d': 'Canisan D. Apoyo para articulaciones.',
  'artroflex': 'Artroflex. Mejora movilidad y flexibilidad.',
  'hemolitan': 'Hemolitan. Suplemento vitamínico.',
  'nutribound': 'Nutribound. Apoyo nutricional para mascotas.',
  'omega 3': 'Omega 3 veterinario. Mejora piel y pelaje.',

  'shampoo clorhexidina': 'Shampoo con clorhexidina. Control bacteriano.',
  'shampoo dermatologico': 'Shampoo dermatológico. Ideal para piel sensible.',

  'arena sanitaria': 'Arena sanitaria. Control de olores y fácil limpieza.',
  'arena aglomerante': 'Arena aglomerante premium para gatos.',
  'arena ecologica': 'Arena ecológica biodegradable.',

  'kong classic': 'Kong Classic. Juguete resistente y rellenable.',
  'kong extreme': 'Kong Extreme. Ideal para mordidas fuertes.',
  'pelota para perros': 'Pelota resistente para juego y ejercicio.',
  'rascador para gatos': 'Rascador para gatos. Protege muebles.',

  'transportadora': 'Transportadora. Viajes seguros para mascotas.',
  'cama ortopedica': 'Cama ortopédica. Ideal para mascotas mayores.',
  'comedero automatico': 'Comedero automático. Alimentación programada.',
  'bebedero fuente': 'Fuente de agua. Estimula hidratación.'
  };

  toggleChat() {
    this.abierto = !this.abierto;
  }

  enviarMensaje() {
    if (!this.textoUsuario.trim()) return;

    const texto = this.textoUsuario.toLowerCase();

    this.mensajes.push({ texto: this.textoUsuario, esUsuario: true });
    this.textoUsuario = '';

    setTimeout(() => {
      this.mensajes.push({
        texto: this.obtenerRespuesta(texto),
        esUsuario: false
      });
    }, 500);
  }

  obtenerRespuesta(texto: string): string {
    for (const key in this.respuestas) {
      if (texto.includes(key)) {
        return this.respuestas[key];
      }
    }
    return 'No entendí 🤔 Escribe "ayuda".';
  }
}
