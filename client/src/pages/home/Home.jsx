import { useEffect, useState } from 'react';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';
import axios from 'axios';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      const config = {
        headers: {
          token:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMGFhYWI0MGE0ZDE5NTJmNDg0ZDQ4YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyODE3MTcwNCwiZXhwIjoxNjI4NjAzNzA0fQ.2ScXpQ-p8_DOvvYluSp__kCDpOR4aZID2EXsInfzkxM',
        },
      };

      try {
        const res = await axios.get(
          `lists${type ? '?type=' + type : ''}${
            genre ? '&genre=' + genre : ''
          }`,
          config
        );
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List key={list.id} list={list} />
      ))}
    </div>
  );
};

export default Home;
