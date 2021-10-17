import React from 'react';

import { InputContainer } from '~/styles/components/input/input';

const Input = React.forwardRef((props, ref) => (
  <InputContainer {...props} ref={ref} />
));

export default Input;
