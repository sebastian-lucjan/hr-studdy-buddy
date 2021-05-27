import { Input } from 'components/atoms/Input/Input';
import { SearchBarWrapper, SearchResultItem, SearchResult, SearchWrapper, StatusInfo } from 'components/organisms/SearchBar/SearchBar.styles';
import { useCombobox } from 'downshift';
import { useStudents } from 'hooks/useStudents';
import debounce from 'lodash.debounce';
import React, { useEffect, useState } from 'react';

export const SearchBar = () => {
  // const [searchPhrase, setSearchPhrase] = useState('');
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 1000);

  const { isOpen, getToggleButtonProps, getLabelProps, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper {...getComboboxProps()}>
        <Input {...getInputProps()} />
        <SearchResult isVisible={isOpen && matchingStudents.length} {...getMenuProps()}>
          {isOpen &&
            matchingStudents.map((student, index) => (
              <SearchResultItem
                isHighlighted={highlightedIndex === index}
                {...getItemProps({ item: student, index })}
                key={student.id}
              >{`${student.name}, id: ${student.id}`}</SearchResultItem>
            ))}
        </SearchResult>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
