import { Input } from 'components/atoms/Input/Input';
import { SearchBarWrapper, SearchResult, SearchWrapper, StatusInfo } from 'components/organisms/SearchBar/SearchBar.styles';
import { useCombobox } from 'downshift';
import { useStudents } from 'hooks/useStudents';
import debounce from 'lodash.debounce';
import React, { useEffect, useState } from 'react';

export const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [matchingStudents, setMatchingStudents] = useState('');
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async () => {
    const { students } = await findStudents(searchPhrase);
    setMatchingStudents(students);
  }, 1000);

  const { isOpen, getToggleButtonProps, getLabelProps, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });

  const handleSearchPhrase = (e) => setSearchPhrase(e.target.value);
  useEffect(() => setSearchPhrase(searchPhrase), [searchPhrase]);

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
      <SearchWrapper {...getComboboxProps()}>
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
