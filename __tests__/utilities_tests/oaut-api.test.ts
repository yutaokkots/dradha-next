import '@testing-library/jest-dom'
import { oAuthGithubUtils } from '@/utilities/api/users/oauth-api'

test("Testing the random state generator", ()=> {
    const stringLength:number = 20;
    const randomString:string = oAuthGithubUtils.oAuthGithubAuthorizationCode(stringLength)
    expect(typeof randomString).toBe('string')
    expect(randomString.length).toBe(stringLength)
})

test("Generate OAuth params (for github)", () => {
    const params = oAuthGithubUtils.oAuthGithubLink()
    console.log(params)
    expect(typeof params).toBe('string')
})