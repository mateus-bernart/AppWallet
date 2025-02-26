import {icons, LucideProps} from 'lucide-react-native';
import {ReactElement} from 'react';

type IconName = keyof typeof icons;

type IconProps = LucideProps & {
  name: IconName;
};

const Icon = ({name, ...props}: IconProps): ReactElement => {
  const LucideIcon = icons[name];
  return <LucideIcon {...props} />;
};

export default Icon;
export {type IconName};
