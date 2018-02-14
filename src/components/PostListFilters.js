import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTextFilter, sortByDate, sortByTitle } from '../actions/filters';



class PostListFilters extends React.Component {
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
      };
    onSortChange = (e) => {
        if(e.target.value === 'title'){
            this.props.sortByTitle();
        } else {
            this.props.sortByDate();
        }
    };
    render(){
        return (
            <div>
                <input type="text"
                placeholder="Search posts"
                value={this.props.filters.text}
                onChange={this.onTextChange}
                />
                <select 
                value={this.props.filters.sortBy}
                onChange={this.onSortChange}
                >
                     <option value="title">By Title</option>
                    <option value="date">By Date</option>
                    </select>
                <button><Link to='/create'>Add Post</Link></button>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    filters: state.filters
  });

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByTitle: () => dispatch(sortByTitle())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostListFilters);