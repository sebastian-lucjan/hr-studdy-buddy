import React, { useState, useEffect } from 'react';
import { SearchBarWrapper, StatusInfo, SearchWrapper, SearchResult } from 'components/organisms/SearchBar/SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';
import { useStudents } from 'hooks/useStudents';
import debounce from 'lodash.debounce';

export const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [matchingStudents, setMatchingStudents] = useState('');
  const { findStudents } = useStudents();

  const handleSearchPhrase = (e) => setSearchPhrase(e.target.value);
  useEffect(() => setSearchPhrase(searchPhrase), [searchPhrase]);

  const getMatchingStudents = debounce(async () => {
    const { students } = await findStudents(searchPhrase);
    setMatchingStudents(students);
  }, 1000);

  useEffect(() => {
    if (!searchPhrase) return;
    getMatchingStudents(searchPhrase);
  }, [searchPhrase]); //getMatchingStudents ?

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper>
        <Input onChange={handleSearchPhrase} value={searchPhrase} />
        {matchingStudents.length && searchPhrase ? (
          <SearchResult>
            {matchingStudents.map(({ id, name }) => (
              <li key={id}>{`${name}, id: ${id}`}</li>
            ))}
          </SearchResult>
        ) : null}
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
