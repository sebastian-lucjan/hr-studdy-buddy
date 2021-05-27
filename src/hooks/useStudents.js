import axios from 'axios';
import { useState, useEffect } from 'react';

export const useStudents = ({ groupId = '' } = {}) => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => {
        setGroups(data.groups);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!groupId) return;

    axios
      .get(`/students/${groupId}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err.message));
  }, [groupId]);
  return { students, groups };
};
