import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { Notes } from '../api/notes';

import NoteListHeader from './NoteListHeader';
import NoteListItem from './NoteListItem';

export const NoteList = (props) => {
    return (
        <div>
            <NoteListHeader />
            { props.notes.map(note => <NoteListItem key={note._id} note={note} />) }
            NoteList {props.notes.length}
        </div>
    );
};

NoteList.propTypes = {
    notes: PropTypes.array.isRequired
};

export default createContainer(() => {
    Meteor.subscribe('notes');

    // will be auto-tracked
    return {
        notes: Notes.find().fetch()
    };
}, NoteList);