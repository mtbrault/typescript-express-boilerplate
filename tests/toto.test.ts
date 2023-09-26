import request from 'supertest'
import { StatusCodes } from 'http-status-codes'
import app from '../src'

describe('GET /toto', () => {
    it(`${StatusCodes.OK} - Should return a message`, async () => {
        const res = await request(app).get('/toto')
        expect(res.statusCode).toEqual(StatusCodes.OK)
        expect(res.body.message).toEqual('Hello world!')
    })
})