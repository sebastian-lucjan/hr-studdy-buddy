import React, { useState, useEffect } from 'react';
import { SearchBarWrapper, StatusInfo } from 'components/organisms/SearchBar/SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';
import axios from 'axios';

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    axios
      .post('users/search', { searchPhrase: inputValue })
      .then(({ data }) => {
        console.log(data);
        setSearchResult(data);
      })
      .catch((err) => console.warn(err.message));
  }, [inputValue]);

  useEffect(() => {
    axios
      .get('users')
      .then(({ data }) => {
        setUsers(data.users);
      })
      .catch((err) => console.warn(err.message));
  }, [inputValue]);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <Input name="search" id="search" onChange={handleInputChange} value={inputValue} autoComplete="off" />
      {searchResult.map((result, index) => {
        console.log(result);
        return <h1 key={index}>{result.name}</h1>;
      })}
    </SearchBarWrapper>
  );
};
