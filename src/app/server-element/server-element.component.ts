import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element!: { type: string; name: string; content: string; };

  ngOnInit(): void {
    console.log("Oninit Called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Onchages Called");
    console.log(changes);
  }

}
