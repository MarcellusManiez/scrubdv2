import React from 'react';
import { Sparklines, SparklinesLine, SparklinesCurve, SparklinesBars } from 'react-sparklines'

const CommentGraph = ( {data} ) => {
  return (
    <Sparklines data={data} style={{width:'700px', height: '40px', svgHeight: '20px'} }>
      <SparklinesLine style={{ fill: "red" }} />
    </Sparklines>
  )
};

export default CommentGraph;