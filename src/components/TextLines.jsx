import { Fragment } from 'react';

export default function TextLines({ lines }) {
  return lines.map((line, index) => (
    <Fragment key={`${index}-${line}`}>
      {index > 0 && <br />}
      {line}
    </Fragment>
  ));
}
