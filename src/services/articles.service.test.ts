 import { getAll, getById } from './articles.service'

describe('ArticlesService', () => {
  describe('getAll', () => {
    it('should return an array of articles', async () => {
      const articles = await getAll()
      expect(articles).toBeDefined()
      expect(articles.statusCode).toBe(200)
      expect(articles.body).toBeDefined()
      expect(articles.body.length).toBeGreaterThan(0)
    })
  })

  describe('getById', () => {
    it('should return an article with the given id', async () => {
      const req = {
        params: {
          id: '1',
        },
      }
      const article = await getById(req)
      expect(article).toBeDefined()
      expect(article.statusCode).toBe(200)
      expect(article.body).toBeDefined()
      expect(article.body.title).toBe('Article title 1')
    })
  })
})