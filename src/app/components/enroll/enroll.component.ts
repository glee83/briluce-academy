import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollComponent implements OnInit {

  registration=true;
  language = false;
  documents = false;
  payments = false;

  // button colors 

  class1 = true;
  class2: any;
  class3: any;
  class4: any;
 
  constructor() { }

  ngOnInit(): void {
  }

  toggleForm(event:string){

    switch(event){
      case 'registration':
        this.registration= true;
        this.language = false;
        this.documents = false;
        this.payments = false;

        //adding active form  a color
        this.class1 = true;
        this.class2 = false;
        this.class3 = false;
        this.class4 = false;
        break
      
        case 'language':
          this.language = true;
          this.documents = false;
          this.registration =false;
          this.payments = false;

          //adding active form  a color
          this.class1 = false;
          this.class2 = true;
          this.class3 = false;
          this.class4 = false;
          break

        case 'documents':
          this.documents = true;
          this.language = false;
          this.registration =false;
          this.payments = false;

          //adding active form  a color
          this.class1 = false;
          this.class2 = false;
          this.class3 = true;
          this.class4 = false;
          break

        default:
        this.payments = true;
        this.language = false;
        this.documents = false;
        this.registration =false;

        //adding active form  a color
        this.class1 = false;
        this.class2 = false;
        this.class3 = false;
        this.class4 = true;
    }
  }

}
