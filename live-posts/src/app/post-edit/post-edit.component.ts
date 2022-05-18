import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  index: number = 0;
  editMode = false;
  /*Wir erstellen ein Form Group objekt um die Daten die wir im Post-edit Component html 
  entgegennehmen zu validieren. Das ! bedeutet, das OBjekt kann entweder Null sein oder einen
  Wert enthalten*/
  form!: FormGroup;

  //constructor() { }

  //Aufbauen einer Verbindung zum Postservice indem wir das in den Konstruktur übergeben
  //Nutzung des Router Services router in Angular zum Navigieren auf die post-list Komponente beim Klicken auf den Save Button.
  //Nutzung von route um den Parameter welcher hinter der URL steht herauszufinden.
  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let title = '';
    let description = '';
    let imagePath = '';



    //Der route Service hilft herauszufinden wann immer Änderungen in dem params wie 0,1,2,3 sind möchten wir
    //sie subscriben, dass heißt wir haben jetzt die Möglichkeit in der Konsole uns den Parameter aus der URL
    //ausgeben zu lassen
    this.route.params.subscribe((params: Params) => {

      if(params['index'])
      {
        console.log(params['index']);

        this.index = params['index'];

        //Mit dieser Zeile holen wir uns jetzt anhand von dem Index den Post, welcher editiert werden soll
      /*  console.log(
        this.postService.getPost(this.index)); */

        const post = this.postService.getPost(this.index);
        title = post.title;
        description = post.description;
        imagePath = post.imagePath;
        

        //Hier setzen wir ein Flag, dass uns signalisiert das wir einen Post editieren und nicht adden
        this.editMode = true;
      }

    });


    /*Hier initialisieren wir jetzt das form Objekt*/
    /*FormGroup wird für die Validierung der Inhalte im Post-Edit component
    in seiner Form verwendet. Dabei wird bspw. von der Klasse Validators das Property required 
    und maxLength verwendet*/ 
    this.form = new FormGroup(
      {
    /*  title: new FormControl(null,[Validators.required,Validators.maxLength(10)]),
        description: new FormControl(null, [Validators.required]),
        imagePath: new FormControl(null, [Validators.required]), */

        /*Die folgenden drei Zeilen bewirken, dass die Elemente die wir auf der Live Posts Seite haben
        beim KLicken auf den Edit Button in auf der Post Add Seite erscheinen. Die Inhalte werden in den
        aus dem post objekt in die einzelnen Variablen title, description und imagePath übertragen */

        title: new FormControl(title,[Validators.required,Validators.maxLength(10)]),
        description: new FormControl(description, [Validators.required]),
        imagePath: new FormControl(imagePath, [Validators.required]),

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
         new Date(),
         5)
       
       
         //Calling service
     /*    this.postService.addPost(post);

         this.router.navigate(["/post-list"]) */

         /*Die Zeilen haben wir geändert weil wir jetzt beim Klicken auf Save auf der Post Edit Seite 
         den entsprechenden Post editieren und nicht einen neuen Post anlegen*/

         //Calling service
         if (this.editMode) {
           this.postService.updatePost(this.index, post);
         }
         else
         {
           this.postService.addPost(post);
         }

         this.router.navigate(["/post-list"])
  }

 

}
