
export interface ThirdPartyOAuthOptions {
    name: string;
    logo: string;
    alt: string;
    link: string;
    width: number;
    height: number;
}

export const thirdPartyOAuth = [
    {
        name: "Github",
        logo: "/oauth/github-mark-white.png",
        alt: "github logo",
        link: "https://github.com/login/oauth/authorize/",
        width: 60,
        height: 60
    }
]