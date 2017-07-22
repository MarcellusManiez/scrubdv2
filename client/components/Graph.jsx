import React from 'react';
import { Sparklines, SparklinesBars } from 'react-sparklines';

const CommentGraph = ({ data }) =>
  (
    <Sparklines data={data} style={{ width: '700px', height: '40px', svgHeight: '20px' }}>
      <SparklinesBars style={{ fill: '#03A9F4' }} />
    </Sparklines>
  );

export default CommentGraph;

