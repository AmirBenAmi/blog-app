import React from 'react';
import { connect } from 'react-redux';



export class PostListFilters extends React.Component {
    render(){
        return (
            <div>
                <input type="text"
                placeholder="Search posts"
                value={this.props.filters.text}
                onChange={this.onChange}
                />
                <select 
                value={this.props.filters.sortBy}
                onChange={this.onSortChange}
                >
                     <option value="title">By Title</option>
                    <option value="date">By Date</option>
                    </select>
                <button> add </button>
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