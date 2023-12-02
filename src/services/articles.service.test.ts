 import request from 'supertest'
import { app } from '../index'

describe('GET /articles', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/articles')

    expect(response.status).toBe(200)
  })
})