import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  img: string = '';

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    //code
  }
  @Output() loaded = new EventEmitter<string>();
  imageDefault: string = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
  constructor() {
    //Before render
    //No async -- once time
    console.log('1 - Constructor');
   }

  ngOnInit(): void {
    //Before render
    // async - fetch -- once time
    console.log('3 OnInit')
  }

  onLoaded() {
    this.loaded.emit("Element loaded successfully");
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Before -during- render
    //Change inputs -- x-times
    console.log("2 - ngOnChanges")
  }

  ngAfterViewInit(): void {
    // After render
    // Handler children
    console.log("4 - ngAfterViewInit")
  }

  ngOnDestroy(): void {
    // Delete component
    console.log("5 - ngOnDestroy")
  }
}
