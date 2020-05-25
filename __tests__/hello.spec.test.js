import http from 'http';
import fetch from 'isomorphic-unfetch';
import listen from 'test-listen';
import { apiResolver } from 'next/dist/next-server/server/api-utils';
import handler from '../pages/api/hello';

describe('Tests for hello API endpoint', () => {
  let server;

  afterEach(() => {
    server && server.close();
  });

  test('Should return 200 with John Doe on GET', async () => {
    server = http.createServer((req, res) => apiResolver(req, res, undefined, handler));
    const url = await listen(server);

    const response = await fetch(url);
    const jsonResult = await response.json();
    expect(response.status).toBe(200);
    expect(jsonResult).toMatchObject({
        name: 'John Doe'
    });
  });
});