import React from 'react';
import moment from 'moment';

export class PostForm extends React.Component{
    constructor(props) {
       super(props);
       this.onTitleChange = this.onTitleChange.bind(this);
       this.onNoteChange = this.onNoteChange.bind(this);
       this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            id: props.post ? props.post.id : '1',
            title: props.post ? props.post.title : '',
            note: props.post ? props.post.note : '',
            createdAt: props.post ? moment(props.post.createdAt) : moment(),
            error: ''
        }
      }
      onSubmit(e) {
        e.preventDefault();
          if(!this.state.title || !this.state.note){
              this.setState(({error: 'please provide title and note'}));
          } else {
              this.setState(() => ({error: ''}));
              this.props.onSubmit({
                id: this.state.id,
                title: this.state.title,
                note: this.state.note,
                createdAt: this.state.createdAt
              });

          }
      }
      onTitleChange(e){
          const title = e.target.value;
          this.setState(() => ({ title}));
      }
      onNoteChange(e){
          const note = e.target.value;
          this.setState(() => ({ note }));
      }
    render (){
        return  (
            <form onSubmit={this.onSubmit}>
            {this.state.error && <p className="form__error">{this.state.error}</p>}
            <input 
                type="text"
                placeholder="Title"
                autoFocus
                value={this.state.title} 
                onChange={this.onTitleChange}
            />
            <textarea 
            placeholder="Add your thoughts"
            value={this.state.note} 
            onChange={this.onNoteChange}
            />
            <div>
            <button >Save Post</button>
            </div>
            </form>
        )
    }
    };

export default PostForm;