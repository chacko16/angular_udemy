import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private backEndService: BackEndService ) { }

  ngOnInit(): void {

    //Damit bewirken wir, dass beim initialien Aufruf der Seite die Daten aus der Datenbank geladen und ausgeführt werden
    //Ansonsten würden keine Bilder erscheinen. Erst beim Klicken auf den Fetch Button
    this.onFetch()
  }

  onSave()
  {
    console.log("onSave was clicked!");
    this.backEndService.saveData();
  }

onFetch() {
  console.log('onFetch() called');
  this.backEndService.fetchData();
}

}
