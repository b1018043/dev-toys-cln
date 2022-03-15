export type TextConvertFunc = (input: string) => string;

const toConstant: TextConvertFunc = (input: string) => {
  const snakedInput = input.replaceAll(' ', '_');
  return snakedInput.toUpperCase();
};

const toLowerCase: TextConvertFunc = (input: string) => {
  return input.toLowerCase();
};

const toSnakeCase: TextConvertFunc = (input: string) => {
  return input.toLowerCase().replaceAll(' ', '_');
};

const capitalize: TextConvertFunc = (input: string) => {
  return input.charAt(0).toUpperCase() + input.slice(1);
};

const toUpperCamelCase: TextConvertFunc = (input: string) => {
  // NOTE: 現状の実装では複数行の場合にはうまく動作しない
  return input.split(' ').map(capitalize).join('');
};

export { toConstant, toLowerCase, toSnakeCase, toUpperCamelCase };
