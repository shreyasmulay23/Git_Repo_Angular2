/**
 * Created by Shreyas on 3/18/2017.
 */
import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent {
  name: string;
  email: string;
  address: {};
  hobbies: string[];
  showHobbies: boolean = false;
  postsInter: postInterface[];

  constructor(private postsService: PostsService) {
    this.name = 'Shreyas';
    this.email = 'shreyasmulay23@gmail.com';
    this.address = {
      street: "62, MIG, Indiranagar",
      city: "Ujjain",
      state: "M.P."
    };
    this.hobbies = ["Music", "Movies", "Sports"];

    this.postsService.getPosts().subscribe(posts => {
      this.postsInter = posts;
    })

  }

  toggleHobbies() {
    if (this.showHobbies == true) {
      this.showHobbies = false
    } else {
      this.showHobbies = true;
    }
  }

  addHobby(hobby: string) {
    this.hobbies.push(hobby);
  }

  deleteHobby(i: number) {
    this.hobbies.splice(i, 1);
  }
}

interface postInterface {
  userId : number;
  title : string;
  body: string;
}
