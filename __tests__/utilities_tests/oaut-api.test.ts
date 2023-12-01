import '@testing-library/jest-dom'
import { oAuthGithubUtils } from '@/utilities/api/users/oauth-api'

test("Testing the random state generator", ()=> {
    const stringLength:number = 20;
    const randomString:string = oAuthGithubUtils.oAuthGithubAuthorizationCode(stringLength)
    console.log(randomString)
    expect(typeof randomString).toBe('string')
    expect(randomString.length).toBe(stringLength)
})
