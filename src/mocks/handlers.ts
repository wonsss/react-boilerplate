import { rest } from 'msw';

export function handlers() {
  return [rest.get('/example', getExample)];
}

const getExample: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(ctx.status(200));
};
