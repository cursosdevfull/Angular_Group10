import { Component, Input } from '@angular/core';

@Component({
  selector: 'amb-test',
  templateUrl: './test.component.html',
  /*  template: `<h1>Test</h1>

    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>{{ name01 }}</td>
      </tr>
      <tr>
        <td>{{ name02 }}</td>
      </tr>
      <tr>
        <td>{{ name03 }}</td>
      </tr>
    </table>`, */
  // styles: ['h1 { color: red; }', 'table {font-size: 30px}'],
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  @Input('title') titulo = 'app test';
  name01 = 'Sergio';
  name02 = 'Carmen';
  name03 = 'Jorge';

  constructor() {
    setInterval(() => {
      this.name01 = 'Sergio ' + Math.random();
      this.name02 = 'Carmen ' + Math.random();
      this.name03 = 'Jorge ' + Math.random();
    }, 1000);
  }
}
