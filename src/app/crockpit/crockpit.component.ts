import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-crockpit',
  templateUrl: './crockpit.component.html',
  styleUrls: ['./crockpit.component.css']
})
export class CrockpitComponent {
  newServerName = ''
  newServerContent = '';
  
  @Output('serverCtd') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>()
  @Output('bluePrintCtd') bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>()

  @ViewChild('serverContentInput') serverContentInput!: ElementRef;

  onAddServer(serverNameInput: HTMLInputElement) {
    // local varible 
    console.log(serverNameInput.value);
    // use viewChile
    console.log(this.serverContentInput.nativeElement.value);
    
    // this.serverCreated.emit({
    //   serverName: this.newServerName,
    //   serverContent: this.newServerContent
    // })
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    // this.bluePrintCreated.emit({
    //   serverName: this.newServerName,
    //   serverContent: this.newServerContent
    // }) 
    this.bluePrintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    }) 
  }

}
