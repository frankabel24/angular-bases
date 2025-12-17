import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <p>Counter: {{ counter }}</p>

<button (click)="increasedBy(1)">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="increasedBy(-1)">-1</button>

  `,
  standalone: false
})

export class CounterComponent {

  public counter: number = 10;

  increasedBy(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }
}
