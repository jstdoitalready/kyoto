import { isEmpty, isBoolean, isPlainObject, reduce } from 'lodash';

const handleResponsiveProp = (prefix, values) => {
  if (isPlainObject(values)) {
    return reduce(
      values,
      (acc, value, key) => {
        if (isBoolean(value)) {
          return {
            ...acc,
            [`${key === 'default' ? '' : `${key}-`}${prefix}`]: value
          };
        }

        return {
          ...acc,
          [`${key === 'default' ? '' : `${key}-`}${prefix}${value}`]: !isEmpty(
            value
          )
        };
      },
      {}
    );
  }

  if (isBoolean(values)) {
    return {
      [`${prefix}`]: values
    };
  }

  return {
    [`${prefix}${values}`]: !isEmpty(values)
  };
};

export default handleResponsiveProp;
