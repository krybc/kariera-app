import {Comment} from '../../api/model/comment';
import {ViewModel} from '../view.model';

export class CommentViewModel extends ViewModel<Comment> {
  public id: number;
  public author: string;
  public content: string;

  constructor(
    protected apiModel: Comment,
  ) {
    super(apiModel);
    this.id = this.apiModel.id;
    this.author = this.apiModel.author;
    this.content = this.apiModel.content;
  }

  toApiModel(): Comment {
    return Object.assign(this.apiModel, {
      author: this.author,
      content: this.content
    });
  }
}
