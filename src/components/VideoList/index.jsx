import React, {PropTypes} from 'react';
import ViewVideo from '../ViewVideo';
import style from './style';

const VideoList = ({videos}) => {
  return (
    <div>
      <ul className={style.lists}>
        {videos.map((item, i) => (
          <li className={style.list} key={i}>
            <ViewVideo {...item} />
            <p className="text-center">{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
