import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>
      Comentarios de lo que sea
    </h3>
    <img src="https://static01.nyt.com/images/2016/08/05/us/05onfire1_xp/05onfire1_xp-videoSixteenByNineJumbo1600-v2.jpg"
     alt="This is fine">
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Similique excepturi nobis eveniet porro voluptatem magni sit
      numquam a deserunt reiciendis officia quis consectetur exercitationem
      distinctio quo, delectus totam rem expedita.
    </p>
  `,
  styles: `
  img {
    width: 100%;
    height: auto;
  }`
})
export class CommentsComponent {

}
