import { Root } from './styles/SectionTitle.styles';

export default function SectionTitle({ id, children, count }) {
  return (
    <Root>
      <h2 id={id}>{children}</h2>
      <span>({String(count).padStart(2, '0')})</span>
    </Root>
  );
}
