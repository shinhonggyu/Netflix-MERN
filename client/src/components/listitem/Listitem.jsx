import {
  Add,
  InsertEmoticonRounded,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from '@material-ui/icons';
import { useEffect, useState } from 'react';
import './listitem.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Listitem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get('/movies/find/' + item, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMGFhYWI0MGE0ZDE5NTJmNDg0ZDQ4YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyODE3MTcwNCwiZXhwIjoxNjI4NjAzNzA0fQ.2ScXpQ-p8_DOvvYluSp__kCDpOR4aZID2EXsInfzkxM',
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);
  return (
    <Link to={{ pathname: '/watch', movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default Listitem;
