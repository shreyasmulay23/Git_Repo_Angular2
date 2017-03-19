"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Shreyas on 3/18/2017.
 */
var core_1 = require('@angular/core');
var posts_service_1 = require('../services/posts.service');
var UserComponent = (function () {
    function UserComponent(postsService) {
        this.postsService = postsService;
        this.showHobbies = false;
        this.name = 'Shreyas';
        this.email = 'shreyasmulay23@gmail.com';
        this.address = {
            street: "62, MIG, Indiranagar",
            city: "Ujjain",
            state: "M.P."
        };
        this.hobbies = ["Music", "Movies", "Sports"];
        this.postsService.getPosts().subscribe(function (posts) {
            console.log(posts);
        });
    }
    UserComponent.prototype.toggleHobbies = function () {
        if (this.showHobbies == true) {
            this.showHobbies = false;
        }
        else {
            this.showHobbies = true;
        }
    };
    UserComponent.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    UserComponent.prototype.deleteHobby = function (i) {
        this.hobbies.splice(i, 1);
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user',
            template: "<h1><strong>{{name}}</strong></h1>\n    <p><strong>Email :</strong> {{email}}</p> \n    <p><strong>Address:</strong> {{address.street}}, {{address.city}}, {{address.state}}</p>\n    <p><button class=\"btn btn-primary\" (click)=\"toggleHobbies()\">{{showHobbies ? \"Hide Hobbies\" : \"Show Hobbies\" }}</button></p>\n    <div *ngIf=\"showHobbies\">\n      <p><strong>Hobbies: </strong></p>\n        <ul>\n            <li *ngFor = \"let hobbie of hobbies; let i=index\">\n              {{hobbie}} <button (click)='deleteHobby(i)' class='btn btn-default'>X</button>\n            </li>\n          </ul>\n          <form (submit)='addHobby(hobby.value)'>\n            <label>Add Hobbie</label> <input type='text' #hobby/>\n\n          </form>\n          \n    </div>\n    <form>  \n      <label>Name</label> <input type='text' name='fName' [(ngModel)] = 'name'/>\n    </form> \n    \n    ",
            providers: [posts_service_1.PostsService]
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostsService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map