import React, { useState, useEffect } from 'react';
import { SearchBarWrapper, StatusInfo, SearchWrapper, SearchResult } from 'components/organisms/SearchBar/SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';
import { useStudents } from 'hooks/useStudents';

export const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [matchingStudents, setMatchingStudents] = useState(['aaa', ' BBBB']);
  const { findStudents } = useStudents();

  const handleSearchPhrase = (e) => setSearchPhrase(e.target.value);
  useEffect(() => setSearchPhrase(searchPhrase), [searchPhrase]);

  const getMatchingStudents = async () => {
    const { students } = await findStudents(searchPhrase);
    console.log(students);
    setMatchingStudents(students);
  };

  useEffect(() => {
    if (!searchPhrase) return;
    getMatchingStudents(searchPhrase);
  }, [searchPhrase, getMatchingStudents]); //getMatchingStudents ?

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
            {matchingStudents.map((student) => (
              <li key={student.id}>{student.name}</li>
            ))}
          </SearchResult>
        ) : null}
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
