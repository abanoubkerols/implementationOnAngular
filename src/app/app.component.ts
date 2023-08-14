import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = ''
  includeLetters = false
  includeNums = false
  includeSymbs = false
  len = 0
  wrong = false

  onButtonClick() {
    if(this.len == 0 || !this.len){
       this.wrong = !this.wrong
    }
    const numbers = '1234567890'
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$%^&*()'

    let validChars = ''
    if (this.includeLetters) {
      validChars += letters
      
    }
    if (this.includeNums) {
      validChars += numbers
      
    }
    if (this.includeSymbs) {
      validChars += symbols
      
    }

    let generatedPassword = ''
    for (let i = 0; i < this.len; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index]
    }
    this.password = generatedPassword
  }

  getPassword() {
    return this.password
  }

  onChangeLatters() {
    this.includeLetters = !this.includeLetters
    this.wrong = !this.wrong
  }
  onChangeNum() {
    this.includeNums = !this.includeNums
    this.wrong = !this.wrong
  }
  onChangeSym() {
    this.includeSymbs = !this.includeSymbs
    this.wrong = !this.wrong
  }

  onChangeLen(e: Event) {
    const parseVal = parseInt((e.target as HTMLInputElement).value)
    if (!isNaN(parseVal)) {
      this.len = parseVal
    }
  }
}
