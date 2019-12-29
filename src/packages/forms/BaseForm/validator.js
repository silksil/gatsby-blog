// TODO Make this validator a separate package?
const RULES = {
  required: value =>
    (!value && 'required') ||
    (value === undefined && 'required') ||
    (value === null && 'required'),
  min: (value, min) => (!value || value.length < min) && 'min',
  max: (value, max) => (!value || value.length > max) && 'max',
  between: (value, min, max) =>
    (!value || value.length > max || value.length < min) && 'between',
  email: value =>
    (!value && 'email') || (!/\S+@\S+\.\S+/.test(value) && 'email'),
  accepted: value => value !== true && 'accepted',
  password: value =>
    !value ||
    (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.{8,})\w+/.test(value) && 'password'),
  username: value => !/^[a-zA-Z0-9äöüÄÖÜ\-_]*$/.test(value) && 'username',
};

const validator = {
  rules: RULES,

  addRule(name, method) {
    this.rules[name] = method;
  },

  async validate(validation = '', value) {
    const validations = validation
      .replace(/\s/, '')
      .split('|')
      .filter(val => val);

    try {
      const rules = validations.map(rule => {
        const chunk = rule.split(':');
        const name = chunk[0];
        const method = this.rules[name];
        if (!method) {
          throw new Error(`Validation method "${name}" does not exist`);
        }

        const params = (chunk[1] && chunk[1].split(',')) || [];

        return method(value, ...params);
      });

      const errors = await Promise.all(rules);

      return errors.filter(val => val)[0];
    } catch (e) {
      console.log(e); // eslint-disable-line
      return 'unexpected';
    }
  },
};

export default validator;
