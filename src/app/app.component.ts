import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'emojifier-app';
  isClicked = false;
  count = 0;
  input: string = '';

  //object of emojis

  emojiText: any = {
    smiley: '🙂',
    laugh: '🤣',
    sad: '😔',
    suprised: '😲',
    sun: '🌞',
    star: '⭐',
  };
  // objects converted to array
  emojiList: string[] = Object.keys(this.emojiText).map(
    (key) => this.emojiText[key]
  );

  result: any;
  ngOnInit(): void {}
  // on even click of the button the emoji box would dissapear
  clickMe() {
    this.count++;
    if (this.count % 2 !== 0) {
      this.isClicked = true;
    } else {
      this.isClicked = false;
    }
  }
  // replacing custom strings to emojis
  emojiReplace(value: string) {
    let text = value
      .replaceAll(':)', this.emojiText.smiley)
      .replaceAll(':sad', this.emojiText.sad)
      .replaceAll(':sun', this.emojiText.sun)
      .replaceAll(':laugh', this.emojiText.laugh)
      .replaceAll(':suprised', this.emojiText.suprised)
      .replaceAll(':star', this.emojiText.star);

    this.input = text;
  }

  // on click of any emoji in the box the emoji would itself be appended to the input value
  emojiClick(emoji: string) {
    this.input += emoji;
  }
}
