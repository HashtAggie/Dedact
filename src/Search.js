import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon';

const style = {
  margin: 12,
  chip: {
   margin: 4,
 },
 wrapper: {
   display: 'flex',
   flexWrap: 'wrap',
 },
};

const Search = () => (
  <div>
    <TextField
      hintText="Search"
    />
  <RaisedButton label="OK" primary={true} style={style} />
    </div>
);

export default Search;
