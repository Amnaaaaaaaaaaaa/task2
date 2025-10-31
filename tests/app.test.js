const request = require('supertest');
const app = require('../app');

describe('Todo API', () => {
  it('should return empty todos initially', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('should add a new todo', async () => {
    const res = await request(app).post('/todos').send({ task: 'Learn Jenkins' });
    expect(res.statusCode).toBe(201);
    expect(res.body.todos).toContain('Learn Jenkins');
  });
});
