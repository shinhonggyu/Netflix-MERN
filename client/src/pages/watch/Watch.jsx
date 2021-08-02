import { ArrowBackOutlined } from '@material-ui/icons';
import './watch.scss';
import umi from '../../umi.mp4';

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video className="video" autoPlay progress controls src={umi} />
    </div>
  );
};

export default Watch;
