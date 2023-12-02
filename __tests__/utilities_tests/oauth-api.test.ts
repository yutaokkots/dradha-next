import '@testing-library/jest-dom'
import { oAuthGithubUtils }from '@/utilities/api/users/oauth-api'
import { mockFetch } from '../mock-fetch';

test("Testing the random state generator", ()=> {
    const stringLength:number = 20;
    const randomString:string = oAuthGithubUtils.oAuthGithubAuthorizationCode(stringLength)
    expect(typeof randomString).toBe('string')
    expect(randomString.length).toBe(stringLength)
})

test("Generate OAuth params (for github) using the GithubID and redirect link from .env.", () => {
    const params = oAuthGithubUtils.oAuthGithubLink()
    expect(typeof params).toBe('string')
    const url = encodeURIComponent('http://localhost:3000/callback')
    const expected = `?client_id=abcdefgh87654321&redirect_uri=${url}`
    expect(params).toEqual(expected)
})

test("Compare the outgoing state and incoming state for equality", () => {
    const state1 = "abcdef789321"
    const state2 = "abcdef789321"
    const state3 = "789321abcdef"
    const state4 = ""
    expect(oAuthGithubUtils.oAuthGithubStateComparison(state1, state2)).toBeTruthy
    expect(oAuthGithubUtils.oAuthGithubStateComparison(state1, state3)).toBeFalsy
    expect(oAuthGithubUtils.oAuthGithubStateComparison(state1, state4)).toBeFalsy
    expect(oAuthGithubUtils.oAuthGithubStateComparison(state4, state4)).toBeFalsy
})

test('postInput()', async () => {
    window.fetch = mockFetch(someJson);
  
    // ... your postInput or component render here
    const result = await postInput();
  
    // Assert your expectations
    expect(result).toEqual(someJson);
  });

test("Retrieve a state from the django server for OAuth", async () => {
    const mockdata = {
        "state": "CnVolSXZkcz2xClIf3tJ",
        "timestamp": "\"2023-12-02T12:57:05.861787\""
    }
    //window.fetch = mockFetch(mockdata);
    const fetchedData = mockFetch(mockdata);
    const state = oAuthGithubUtils.oAuthGithubStateGet()
    console.log(state)
})