import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  /*Wir erstellen ein Form Group objekt um die Daten die wir im Post-edit Component html 
  entgegennehmen zu validieren. Das ! bedeutet, das OBjekt kann entweder Null sein oder einen
  Wert enthalten*/
  form!: FormGroup;

  //constructor() { }

  //Aufbauen einer Verbindung zum Postservice indem wir das in den Konstruktur übergeben
  //Nutzung des Router Services in Angular zum Navigieren auf die post-list Komponente beim Klicken auf den Save Button
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    /*Hier initialisieren wir jetzt das form Objekt*/
    /*FormGroup wird für die Validierung der Inhalte im Post-Edit component
    in seiner Form verwendet. Dabei wird bspw. von der Klasse Validators das Property required 
    und maxLength verwendet*/ 
    this.form = new FormGroup(
      {
        title: new FormControl(null,[Validators.required,Validators.maxLength(10)]),
        description: new FormControl(null, [Validators.required]),
        imagePath: new FormControl(null, [Validators.required]),
      });
  }

  onSubmit()
  {
   /* console.log("onSubmit() called!")
    console.log(this.form); /*Mit diesem Befehl sehen wir wenn wir auf Save klicken in der Konsole im Browser unser FormGroup Objekt*/

    /*Hier holen wir uns jetzt die Inhalte aus dem FormControl in post-edit.component.html
    wir greifen darüber über form.value.<vergebener name des html tags> zu */
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;

    //Ready with Object
    const post: Post = new Post(title,
       description,
        imagePath, 
        "test@test.com",
         new Date())
       
       
         //Calling service
         this.postService.addPost(post);

         this.router.navigate(["/post-list"])
  }

 

}
