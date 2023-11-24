

const themeSetter = (theme: 'light'|'dark' ) => {
    localStorage.setItem("theme", theme);
}

export default themeSetter