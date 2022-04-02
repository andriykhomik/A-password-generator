import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public length: number = 0;
  public includeLetters: boolean = false;
  public includeUpperLetters: boolean = false;
  public includeNumbers: boolean = false;
  public includeSymbols: boolean = false;
  public password: string = '';

  public onChangeLength(el: any) {
    const parseValue = parseInt(el.target.value);
    if (!isNaN(parseValue)) {
      this.length = parseValue;
    }
    if (this.length > 1000000) {
      this.length = 1000000;
    }
  }

  public onChangeUseLetters(): void {
    this.includeLetters = !this.includeLetters;
  }

  public onChangeUseUppercaseLetters(): void {
    this.includeUpperLetters = !this.includeUpperLetters;
  }

  public onChangeUseNumbers(): void {
    this.includeNumbers = !this.includeNumbers;
  }

  public onChangeUseSymbols(): void {
    this.includeSymbols = !this.includeSymbols;
  }

  public onButtonClick(): void {
    const numbers: string = '1234567890';
    const letters: string = 'abcdefghijklmnopqrstuvwxyz';
    const lettersUppercase: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols: string = '!@#$%^&*()_+=-';
    let validChars: string = '';

    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeUpperLetters) {
      validChars += lettersUppercase;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      if (validChars[index]) {
        generatedPassword += validChars[index];
      }
    }
    this.password = generatedPassword;
  }
}
