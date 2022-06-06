import { Component, ComponentFactoryResolver, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { LoginComponent } from './admin/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing';

  @ViewChild('temp', { read: ViewContainerRef })
  private vcr!: ViewContainerRef;
  
  constructor(){
     
  }
  async loadLogin(){
  this.vcr.clear();
  const {LoginComponent} = await import('./admin/login/login.component');
  this.vcr.createComponent(LoginComponent);


}
async loadList(){
  this.vcr.clear();
  const {ListComponent} = await import('./admin/list/list.component');
  this.vcr.createComponent(ListComponent);

}


}
