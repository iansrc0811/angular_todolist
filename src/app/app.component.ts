import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = '請輸入項目名稱';
  inputItem = '';
  todos: any[] = [];

  setInput() {
    if (this.inputItem) {
      // this.todos.push(this.inputItem);
      this.todos = [...this.todos, this.inputItem];
      this.inputItem = '';
    }
  }
}
