import {Text} from '../../../Text';

interface Props {
  children: React.ReactNode;
  hidden: boolean;
}

export function TagsWrapper({children, hidden}: Props) {
  if (hidden) {
    return (
      <Text as="span" visuallyHidden>
        {children}
      </Text>
    );
  }

  return <>{children}</>;
}
